import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function dbConnect() {
  try {
    const mongoClient = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log("\nDB HOST: " + mongoClient.connection.host);
  } catch (error) {
    console.log("MongoDB Connection Failed: " + error);
    process.exit(1);
  }
}

export default dbConnect;
