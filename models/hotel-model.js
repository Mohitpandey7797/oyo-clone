import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    description: {
        type: String,
        required: true,
        trim: true,
    },

    banner: {
        type: String,
        required: true,
    },

    gallery: [
        {
            type: String,
        },
    ],

    price: {
        type: String,
    },

    facilities: [
        {
            img: String,
            name: String,
        },
    ],

    location: {
        type: String,
        trim: true,
        
    }

}, 
{timestamps: true});

export default mongoose.models?.hotel || mongoose.model("hotel", hotelSchema);
