import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    }
    ,
    postal_code: {
        type: String,
        required: true,
    },

},{ timestamps: true });
export const Location = mongoose.model("Location", locationSchema);
