import mongoose from "mongoose";

const foodDonationSchema = new mongoose.Schema(
  {
    donorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    foodType: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    expirationDate: {
      type: Date,
      required: true,
    },
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location",
        required: true,
    },
    pickupAvailable: {
      type: Boolean,
      default: true,
    },
    deliveryAvailable: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected", "Completed"],
      default: "Pending",
    },
    isActive: {
        type: Boolean,
        default: true
      }
  },
  { timestamps: true }
);

export const FoodDonation = mongoose.model("FoodDonation", foodDonationSchema);
