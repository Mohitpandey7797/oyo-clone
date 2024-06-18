import connectDB from "@/db";
import hotelModel from "@/models/hotel-model";

export default async function handler(req, res) {
    if (req.method === "GET") {
        try {
            await connectDB();  // Ensure the database connection is awaited

            // Fetch hotels with price less than or equal to the query price
            const hotels = await(await hotelModel.find({ price: { $lte: req.query.price } })).length;

            // Respond with the list of hotels
            res.status(200).json({ msg: "Range Filter.", hotels });
        } catch (error) {
            // Handle any errors that occur during the database query or connection
            res.status(500).json({ msg: "Internal Server Error", error: error.message });
        }
    } else {
        res.status(405).json({ msg: "Method Not Allowed" });
    }
}
