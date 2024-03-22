import React from "react";
import HeroImage from "../Images/HeroImage2.jpg";
import {Link} from "react-router-dom"



const Home = () => {
    
    return (
        <div name="home" className="w-[100%]  bg-gradient-to-b">
            <div className="relative">
                <img
                    className="w-full h-[500px] md:h-[500px] "
                    src={HeroImage}
                    alt=""
                />
                <div className="absolute flex flex-col justify-center items-center sm:top-96 sm:left-[700px] top-96 left-36">
                    <Link
                    to="/register"
                        className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>

        
    );
};

export default Home;
