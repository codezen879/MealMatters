import mongoose from "mongoose";

const foodDonationSchema = new mongoose.Schema(
  {
    donorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    foodType: {
      type: String,
    },
    foodDetails: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    expirationDate: {
      type: String,
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
    waitingList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected", "Completed"],
      default: "Pending",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export const FoodDonation = mongoose.model("FoodDonation", foodDonationSchema);
