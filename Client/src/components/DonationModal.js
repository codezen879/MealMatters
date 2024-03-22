import React from "react";

export default function DonationModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    // Handle form submission
    e.preventDefault();
    // Example: You can send donation data to the server here
    onClose(); // Close the modal after form submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Donate</h2>
        <form onSubmit={handleSubmit}>
          {/* Your form fields here */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
