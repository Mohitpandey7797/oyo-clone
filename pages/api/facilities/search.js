import Hotel from "@/components/Hotel";
import connectDB from "@/db";
import hotelModel from "@/models/hotel-model";
import Hotels from "@/pages/hotels";
export default async function handler(req,res){
    
    if(req.method === "GET"){
        connectDB();
        const key = req.query.val;
        console.log(key);
        const hotels = (await hotelModel.find({'facilities.name':{$in:key}})).length;
        res.status(200).json({msg:"All Good" , hotels});
    }
}