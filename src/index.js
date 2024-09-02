//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path:'./env'
})


connectDB();




















/*
import express from "express";

const app = express();

(async () => {
  try {
    // Attempt to connect to MongoDB using the URI and database name
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Start the Express server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });

  } catch (error) {
    // Handle connection or server errors
    console.log("ERROR: ", error);
    throw error;
  }
})();
*/
