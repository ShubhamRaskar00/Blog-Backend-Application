const mongoose = require("mongoose");

// Connection state monitoring
let connectionState = {
  isConnected: false,
  lastConnected: null,
  disconnectionCount: 0,
  errors: [],
};

// check database connection
const checkDatabaseConnection = (req, res, next) => {
  if (!connectionState.isConnected) {
    return res
      .status(503)
      .json({ message: "Database connection not available" });
  }
  next();
};

const mongoDbConnectionStatus = () => {
  // Monitor mongoose connection events
  mongoose.connection.on("connected", () => {
    connectionState.isConnected = true;
    connectionState.lastConnected = new Date();
    console.log("Mongoose connected to DB");
  });

  mongoose.connection.on("error", (err) => {
    connectionState.errors.push({
      timestamp: new Date(),
      error: err.message,
    });
    console.error("Mongoose connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    connectionState.isConnected = false;
    connectionState.disconnectionCount++;
    console.log("Mongoose disconnected");
  });
};

module.exports = {
  connectionState,
  checkDatabaseConnection,
  mongoDbConnectionStatus,
};
