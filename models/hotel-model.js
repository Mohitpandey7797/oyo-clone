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
        type: Number,
        required: true, // Assuming price should be required
        validate: {
            validator: function(v) {
                return v >= 0; // Price should be non-negative
            },
            message: props => `${props.value} is not a valid price!`
        }
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


// Middleware to convert price to number if it's a string
hotelSchema.pre('save', function(next) {
    if (typeof this.price === 'string') {
        this.price = parseFloat(this.price);
    }
    next();
});

export default mongoose.models?.hotel || mongoose.model("hotel", hotelSchema);
