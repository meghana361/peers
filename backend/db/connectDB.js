import mongoose from "mongoose";
import dotenv from "dotenv"
// Correct Mongo URI with proper username and password
// const MONGO_URI = "mongodb+srv://meghanagk77:W8fy2DUMA0z0P79j@cluster0.rz4vf9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
dotenv.config({ path: './backend/.env' }); 
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
