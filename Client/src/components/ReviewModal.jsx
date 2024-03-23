import React, { useState } from "react";
import axios from "axios";
function ReviewModal({ reviewedDonationID, donorId }) {
    let [formData, setFormData] = useState({
        rating: "",
        comment: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const donorID = localStorage.getItem("donorID");
        const reviewerUserID = donorId;
        formData = { ...formData, donorId, reviewerUserID, reviewedDonationID };
        console.log(formData);
        const response = await axios.post(
            "http://localhost:8000/api/v1/review/review-donation",
            formData,
        );
        console.log(response.data);
    };

    return (
        <div>
            <div>
                <div className="flex justify-between items-center mb-4"></div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="rating"
                            className="block text-sm font-medium text-gray-700">
                            Rating
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            min="1"
                            max="5"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="comment"
                            className="block text-sm font-medium text-gray-700">
                            Comment
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                            Submit Review
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReviewModal;
