const mongoose = require("mongoose");
// require("dotenv").config();

// Define the MongoDB connection URL
const connectDb = async ()=>{
  try {
      const connInstance = await mongoose.connect("mongodb+srv://sanket22110171:bKs21WOTa2Hucpcf@votercluster.x6avvpf.mongodb.net/?retryWrites=true&w=majority&appName=VoterCluster");
      console.log("Database Connected...!!");
  } catch (error) {
      console.log("Error to connect database...!")
      console.log(error);
      process.exit(1);
  }
}
connectDb()
