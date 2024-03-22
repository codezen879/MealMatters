import React, { useState,useEffect } from "react";
import * as OpenCageGeocode from "opencage-api-client";


function DonationModal({ isOpen, onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    };
    // const donationsubmit = (e) => {
    //     e.preventDefault(); 
    //     const name = document.getElementById("name").value;
    //     const contact = document.getElementById("contact").value;
    //     const address = document.getElementById("address").value;
    //     const foodType = document.getElementById("foodType").value;
    //     const message = document.getElementById("message").value;
    //     const files = document.getElementById("files").files;
    //     console.log(name, contact, address, foodType, message, files);
    // };

    const [manualInput, setManualInput] = useState(false); // State for manual input
    const [liveLocation, setLiveLocation] = useState(false); // State for live location
    const [addressDetails, setAddressDetails] = useState(""); // State for address details

    const getAddressFromCoords = (latitude, longitude) => {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setAddressDetails("Could not fetch address details.");
                } else {
                  const city = data.address.town ;
                  const postcode = data.address.postcode;
                  const country = data.address.country;
                    setAddressDetails(`${city}, ${postcode}, ${country}`);
                    console.log(
                        `Current city: ${city}, postcode: ${postcode}, country: ${country}`,
                    );
                    console.log( city, postcode, country);
                }
            })
            .catch((error) => {
                setAddressDetails("Error fetching address details.");
                console.error("Error fetching address details:", error);
            });
    };
    useEffect(() => {
      if (isOpen) {
          document.body.style.overflow = "hidden";
      } else {
          document.body.style.overflow = "auto";
      }

      return () => {
          document.body.style.overflow = "auto";
      };
  }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-50 flex items-center justify-center z-20 my-10">
            <div className="bg-white p-8 rounded-lg w-[1000px] mx-5 "style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto"}} >
            <div className="flex justify-between items-center mb-4">
                    <h2 className="text-green-700 text-2xl font-bold">Excess to Empathy</h2>
                    <button
                    onClick={onClose}
                    className="relative right-0 m-4 bg-[#8b0000] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    Close
                </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700">
                            Donor's Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="contact"
                            className="block text-sm font-medium text-gray-700">
                            Donor's Contact Number
                        </label>
                        <input
                            type="number"
                            id="contact"
                            name="contact"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700">
                            Donor's Address
                        </label>
                        <select
                            id="address"
                            name="address"
                            required
                            onChange={(e) => {
                                setManualInput(e.target.value === "manual");
                                setLiveLocation(e.target.value === "live");
                            }}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option value="">Select Address Option</option>
                            <option value="manual">Enter manually</option>
                            <option value="live">Use live location</option>
                        </select>
                        {manualInput && (
                            <input
                                type="text"
                                id="manualAddress"
                                name="manualAddress"
                                placeholder="Enter address manually"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        )}
                        {liveLocation && (
                            <button
                                type="button"
                                onClick={() => {
                                    navigator.geolocation.getCurrentPosition(
                                        (position) => {
                                            const { latitude, longitude } =
                                                position.coords;
                                            getAddressFromCoords(
                                                latitude,
                                                longitude,
                                            );
                                            console.log(latitude, longitude);
                                        },
                                        (error) => {
                                            console.error(
                                                "Error getting location:",
                                                error,
                                            );
                                        },
                                    );
                                }}
                                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Use Current Location
                            </button>
                        )}
                        {addressDetails && (
                            <p className="mt-2 text-sm text-gray-500">
                                {addressDetails}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="foodType"
                            className="block text-sm font-medium text-gray-700">
                            Food Type
                        </label>
                        <select
                            id="foodType"
                            name="foodType"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option value="">Select Food Type</option>
                            <option value="veg">Vegetarian</option>
                            <option value="nonveg">Non-Vegetarian</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700">
                            Food Details
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="2"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700">
                            Time for which this food will be available
                        </label>
                        <select
                            id="foodType"
                            name="foodType"
                            required
                            onChange={(e) =>
                                setManualInput(e.target.value === "manual")
                            }
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option value="">Select maximum hours</option>
                            <option value="1-4">1 - 4 hrs</option>
                            <option value="4-8">4 - 8 hrs</option>
                            <option value="8-12">8 - 12 hrs</option>
                            <option value="12-16">12 - 16 hrs</option>
                            <option value="16-20">16 - 20 hrs</option>
                            <option value="more-than-20">
                                more than 20 hrs
                            </option>
                            <option value="manual">Enter manually</option>
                        </select>
                        {manualInput && (
                            <input
                                type="number"
                                id="manualTime"
                                name="manualTime"
                                placeholder="Enter manually in hours"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        )}
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="contact"
                            className="block text-sm font-medium text-gray-700">
                           Food Quantity (In Kg)
                        </label>
                        <input
                            type="number"
                            id="Quantity"
                            name="Quantity"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="files"
                            className="block text-sm font-medium text-gray-700">
                            Upload Photos of Food
                        </label>
                        <input
                            type="file"
                            id="files"
                            name="files"
                            accept=".jpg,.jpeg,.png,.pdf"
                            multiple
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                        //  onClick={donationsubmit}
                        >
                        Donate Now 
                    </button>
                    </div>
                </form>
               
            </div>
        </div>
    );
}

export default DonationModal;
