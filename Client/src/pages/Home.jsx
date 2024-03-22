import React from "react";
import HeroImage from "../Images/HeroImage2.jpg";
import { MdArrowRight } from "react-icons/md";
//import vd from "../Images/About/about.mp4"

const Home = () => {
    const applyLink = "https://forms.gle/pimZ8CCMG66YzeZN8";
    const click = (applyLink) => {
        window.open(applyLink, "_blank");
    };
    return (
        <div name="home" className="w-[100%]  bg-gradient-to-b">
            <div className="relative">
                <img
                    className="w-full h-[500px] md:h-[500px] "
                    src={HeroImage}
                    alt=""
                />
                {/* <div className="absolute flex flex-col justify-center items-center top-10 left-0">
                    <p className="text-[#ced0b9] text-3xl font-extrabold ">Meal-Matters</p>
                    <p className="text-[#ced0b9] text-1.6xl font-extrabold">From Excess to Empathy</p>
                </div> */}
            </div>
        </div>
    );
};

export default Home;
