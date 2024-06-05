import mongoose from "mongoose";

const URI = "mongodb+srv://mohitpandey7797:Mohit123@cluster0.r6uckvl.mongodb.net/Store"
const connectDB = async() =>{
    
    await mongoose.connect(URI)         
    console.log("DB Connected...");
}
export default connectDB;



