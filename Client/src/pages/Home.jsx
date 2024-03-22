import React, { useState } from "react";
import DonationModal from "/src/components/DonationModal";
import { Button } from "@/components/ui/button";
import HeroImage from "../Images/HeroImage2.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control Dialog visibility
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false); // State to control DonationModal visibility

    const handleDonateNow = () => {
        setIsDialogOpen(false); // Close the Dialog modal
        setIsDonationModalOpen(true); // Open the DonationModal
    };
    const handlehelp = () => {
        
    }

    return (
        <>
            <div name="home" className="w-full bg-gradient-to-b">
                <div className="relative">
                    <img
                        className="w-full h-[900px] md:h-[600px]"
                        src={HeroImage}
                        alt=""
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Button
                            className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-9 py-7 mt-96 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                            onClick={() => setIsDialogOpen(true)}>
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
            {isDialogOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg relative">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsDialogOpen(false)}>
                            &#x2715; {/* Close symbol */}
                        </button>
                        <h2 className="text-3xl mb-4">
                            From Access to Empathy
                        </h2>
                        <div className="flex justify-center gap-3">
                            <button
                                className="w-[150px] h-[100px] bg-green-500 text-white text-[24px] text-lg font-bold rounded-lg"
                                onClick={handleDonateNow}>
                                Donate Now
                            </button>
                            <button className="w-[150px] h-[100px] bg-red-800 text-white text-lg font-bold rounded-lg" onClick={handlehelp}>
                            <Link to="/help" className="w-[150px] h-[100px] bg-red-800 text-white text-lg font-bold rounded-lg">
                                <span className="text-[24px]">
                                    Help Someone
                                </span>
                            </Link>
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <DonationModal
                isOpen={isDonationModalOpen}
                onClose={() => setIsDonationModalOpen(false)}
            />
        </>
    );
};

export default Home;
