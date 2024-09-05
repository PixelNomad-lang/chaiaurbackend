//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { log } from "console";

dotenv.config({
  path:'./env'
})


connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000 , () => {
    console.log(`Server is RUnning at port  : ${process.env.PORT}`);
    
  })
})
.catch((err) => {
  console.log("MOngo DB connection is fail",err);
  
})




















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
