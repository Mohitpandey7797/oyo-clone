import mongoose from "mongoose";

const URI = "mongodb+srv://mohitpandey7797:Mohit@#54321@project.wfwm5pb.mongodb.net/Project"
const connectDB = async() =>{
    await mongoose.connect(URI,{
       
    });
    console.log("DB Connected...");
}
export default connectDB;



