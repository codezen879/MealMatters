import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../Images/HeroImage2.jpg";
// import MyModal from "./DividerModal"; // Make sure to import the Modal component

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };

    return (
        <div name="home" className="w-full bg-gradient-to-b">
            <div className="relative">
                <img
                    className="w-full h-[500px] md:h-[500px]"
                    src={HeroImage}
                    alt=""
                />
                <div className="absolute flex flex-col justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {/* <Link
                        to="/register"
                        className=""
                    >
                        Get Started
                    </Link> */}
                    <button
                        className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 mt-80 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                        onClick={handleOpenModal}
                    >
                        Get Started
                    </button>
                </div>
            </div>
            {/* <MyModal /> */}
        </div>
    );
};

export default Home;
