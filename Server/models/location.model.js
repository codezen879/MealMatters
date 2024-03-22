import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    postal_code: {
      type: String,
    },
  },
  { timestamps: true }
);
export const Location = mongoose.model("Location", locationSchema);
