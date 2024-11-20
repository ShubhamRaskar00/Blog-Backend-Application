require("dotenv").config();
const express = require("express");
const cors = require("cors");
const config = require("./src/config/config");
const connectWithRetry = require("./src/config/database");
const {
  connectionState,
  checkDatabaseConnection,
  mongoDbConnectionStatus,
} = require("./src/middleware/databaseErrorHandler");
const authRoutes = require("./src/routes/authRoutes");
const postRoutes = require('./src/routes/postRoutes');

const app = express();

// Access for added domain only
app.use(cors());

// upload limit
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));



const PORT = config.port;

// Initialize server with database connection
const startServer = async () => {
  try {
    await connectWithRetry(config.mongoUri);
    connectionState.isConnected = true;
    connectionState.lastConnected = new Date();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

// Monitor DB event
mongoDbConnectionStatus();

// Check data base connection and get back the result
app.use(checkDatabaseConnection);


// app routes
app.use("/v1/api/auth", authRoutes);
app.use("/v1/api/", postRoutes);


// start server
startServer();
