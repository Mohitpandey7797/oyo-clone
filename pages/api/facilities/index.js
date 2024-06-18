import connectDB from "@/db";
import hotelModel from "@/models/hotel-model";

export default async function handler(req,res){
    connectDB();
    if(req.method === "GET"){
        const facilities = await hotelModel.find({}).distinct('facilities.name');
        res.status(200).json({msg:"Kya Haal Hai!", facilities});
    }
}