import { FoodDonation } from "../models/foodDonation.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Location } from "../models/location.model.js";
const foodDonate = asyncHandler(async (req, res) => {
  const {
    donorID,
    foodType,
    quantity,
    expirationDate,
    pickupAvailable,
    deliveryAvailable,
    status,
    location,
  } = req.body;
  const { latitude, longitude, address, city, state, country, postal_code } =
    location;

  // if (
  //   [
  //     donorID,
  //     foodType,
  //     quantity,
  //     expirationDate,
  //     pickupAvailable,
  //     deliveryAvailable,
  //     status,
  //   ].some((field) => field?.trim() === "")
  // ) {
  //   return res
  //     .status(201)
  //     .json(new ApiResponse(400, {}, "All fields are required", "false"));
  // }

  const locations = await Location.create({
    latitude,
    longitude,
    address,
    city,
    state,
    country,
    postal_code,
  });

  const location_id = locations._id.toString();

  const foodDonateDetail = await FoodDonation.create({
    donorID,
    foodType,
    quantity,
    expirationDate,
    pickupAvailable,
    deliveryAvailable,
    status,
    location: location_id,
  });

  if (!foodDonateDetail) {
    return res
      .status(201)
      .json(new ApiResponse(400, {}, "User Food Donation Failed", "false"));
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        foodDonateDetail,
        "Donation Details Registered Succesfully!!",
        "true"
      )
    );
});

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const earthRadius = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);  // deg2rad below
  const dLon = deg2rad(lon2 - lon1); 
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ; 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  const distance = earthRadius * c; // Distance in km
  return distance;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

const getNearByFood = asyncHandler(async (req, res) => {
  let { lat1, lon1, distance } = req.body;
  distance = parseFloat(distance);
  lat1 = parseFloat(lat1);
  lon1 = parseFloat(lon1);
  let foodDonationData = await FoodDonation.find({ isActive: true });

  const available = [];

  // Map each data element to a Promise
  const promises = foodDonationData.map(async (data) => {
      let k = data;
      let location = await Location.findById(data.location);
      let lon2 = location.longitude;
      let lat2 = location.latitude;
      lat2 = parseFloat(lat2);
      lon2 = parseFloat(lon2);
      let d = getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2);
      if (d <= distance) {
          return k;
      }
  });

  // Wait for all promises to resolve
  const result = await Promise.all(promises);

  // Filter out undefined values and populate available array
  result.forEach((item) => {
      if (item) {
          available.push(item);
      }
  });

  console.log(available);

  return res.status(201).json(new ApiResponse(200, available, "These Are The Available Donations!!", "true"));
});

export {foodDonate,getNearByFood};
