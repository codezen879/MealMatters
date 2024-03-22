import React, { useState } from "react";
import axios from "axios";
function DonationModal({ isOpen, onClose }) {
    let [formData, setFormData] = useState({
        donorName: "",
        contactNumber: "",
        donorAddress: "",
        foodType: "",
        foodDetails: "",
        expirationDate: "",
        quantity: 0,
        photos: [], // For file upload
    });

    const [address, setAddress] = useState("");
    const [latitude, setLatitude ] = useState("");
    const [longitude, setLongitude ] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const getAddressFromCoords = (latitude, longitude) => {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setAddress("Could not fetch address details.");
                } else {
                    const { town, postcode, country } = data.address;
                    const addressString = `${town}, ${postcode}, ${country}`;
                    setAddress(addressString);
                    setFormData(prevState => ({
                        ...prevState,
                        donorAddress: addressString
                    }));
                }
            })
            .catch((error) => {
                setAddress("Error fetching address details.");
                console.error("Error fetching address details:", error);
            });
    };

    const handleUseCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
                console.log(latitude, longitude)
                getAddressFromCoords(latitude, longitude);
            },
            (error) => {
                console.error("Error getting location:", error);
            },
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Form submission logic here
        let location={latitude, longitude, address}
        let postal_code="1212"
        let donorID=localStorage.getItem('donorID');
        formData={...formData,location,donorID,postal_code}
        console.log({formData});
        // let user=await axios.get("http://localhost:8000/api/v1/users/current-user");
        // console.log({user});
        const reponse = await axios.post("http://localhost:8000/api/v1/food/foodDonate", formData);
        console.log(reponse.data);

        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-50 flex items-center justify-center z-20 my-10">
            <div
                className="bg-white p-8 rounded-lg w-[1000px] mx-5 "
                style={{ maxHeight: "calc(100vh - 120px)", overflowY: "auto" }}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-green-700 text-2xl font-bold">
                        Excess to Empathy
                    </h2>
                    <button
                        onClick={onClose}
                        className="relative right-0 m-4 bg-[#8b0000] text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        Close
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="donorName"
                            className="block text-sm font-medium text-gray-700">
                            Donor's Name
                        </label>
                        <input
                            type="text"
                            id="donorName"
                            name="donorName"
                            value={formData.donorName}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="contactNumber"
                            className="block text-sm font-medium text-gray-700">
                            Contact Number
                        </label>
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="donorAddress"
                            className="block text-sm font-medium text-gray-700">
                            Donor's Address
                        </label>
                        <input
                            type="text"
                            id="donorAddress"
                            name="donorAddress"
                            value={formData.donorAddress}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                         <button
                            type="button"
                            onClick={handleUseCurrentLocation}
                            className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Use Current Location
                        </button>
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
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option value="">Select Food Type</option>
                            <option value="veg">Vegetarian</option>
                            <option value="nonveg">Non-Vegetarian</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="foodDetails"
                            className="block text-sm font-medium text-gray-700">
                            Food Details
                        </label>
                        <textarea
                            id="foodDetails"
                            name="foodDetails"
                            value={formData.foodDetails}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="expirationDate"
                            className="block text-sm font-medium text-gray-700">
                            Availability Time
                        </label>
                        <select
                            id="expirationDate"
                            name="expirationDate"
                            required
                            onChange={handleChange}
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
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="quantity"
                            className="block text-sm font-medium text-gray-700">
                            Food Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    {/* File upload field */}
                    <div className="mb-4">
                        <label
                            htmlFor="photos"
                            className="block text-sm font-medium text-gray-700">
                            Upload Photos of Food
                        </label>
                        <input
                            type="file"
                            id="photos"
                            name="photos"
                            accept=".jpg,.jpeg,.png,.pdf"
                            multiple
                            onChange={(e) => {
                                const files = Array.from(e.target.files);
                                setFormData((prevState) => ({
                                    ...prevState,
                                    photos: files,
                                }));
                            }}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Donate Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DonationModal;