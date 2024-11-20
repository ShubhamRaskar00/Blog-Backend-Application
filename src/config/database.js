const mongoose = require("mongoose");
const MAX_RETRIES = 3;
const RETRY_DELAY = 5000;

const connectWithRetry = async (mongoUri, retryCount = 0) => {
  try {
    const options = {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10,
      socketTimeoutMS: 45000,
    };

    const conn = await mongoose.connect(mongoUri, options);
    return conn;
  } catch (error) {
    if (retryCount < MAX_RETRIES) {
      console.log(
        `Connection attempt ${retryCount + 1} failed. Retrying in ${
          RETRY_DELAY / 1000
        } seconds...`
      );
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return connectWithRetry(mongoUri, retryCount + 1);
    }
    console.error("Max retries reached. Could not connect to MongoDB");
    throw error;
  }
};

module.exports = connectWithRetry;
