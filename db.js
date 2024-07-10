const mongoose = require("mongoose");
require("dotenv").config();

// Define the MongoDB connection URL
// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URL_LOCAL);
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// };

mongoose.connect(
    "mongodb+srv://sanket22110171:bKs21WOTa2Hucpcf@election.vz9ncfu.mongodb.net/?retryWrites=true&w=majority&appName=Election"
  )
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });
