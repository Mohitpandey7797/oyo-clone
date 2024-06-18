import mongoose from "mongoose";

const URI = process.env.MONGO_URL;
const connectDB = async() =>{
    
    await mongoose.connect(URI)         
    console.log("DB Connected...");
}
export default connectDB;



