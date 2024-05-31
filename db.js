import mongoose from "mongoose";

const URI = "mongodb+srv://mohitpandey7797:Mohit123@cluster0.fic6kb1.mongodb.net/oyo"
const connectDB = async() =>{
    await mongoose.connect(URI)         
    console.log("DB Connected...");
}
export default connectDB;



