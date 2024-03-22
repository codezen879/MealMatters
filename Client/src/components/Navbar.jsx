import { useState } from "react";
import Logo from "../Images/Navbar/logo.svg";
import open from "../Images/Navbar/open.svg";
import close from "../Images/Navbar/close.svg";

import { NavLink } from "react-router-dom";
import DonationModal from "./components/DonationModal"; // Import the DonationModal component

export default function Navbar() {
    const [toggle, setToggle] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const link = [
        {
            title: "Home",
            link: "/home",
        },
        {
            title: "About us",
            link: "/about",
        },
        {
            title: "NGO's",
            link: "/ngo",
        },
        {
            title: "Contact",
            link: "/contact",
        },
    ];

    function handleClick() {
        setToggle((value) => !value);
    }

    return (
        <div className="flex flex-col">
            <nav className={`relative z-20 flex flex-col justify-between px-8 lg:px-36 py-5  bg-transparent`}>
                <div className="flex flex-row justify-between items-center z-10">
                    <a className="space-x-1" href="#">
                        <img
                            src={Logo}
                            className="aspect-square h-14 inline -translate-y-1.5 rounded-full"
                        />
                        <span className=" text-black tracking-normal font-sans max-[400px]:text-lg  sm:text-2xl font-extrabold md:font-semibold">
                            Meal Matters
                        </span>
                    </a>

                    <div className="hidden md:flex flex-row gap-6">
                        {link.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.link}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[#0283F3] font-semibold cursor-pointer text-base tracking-wide hover:text-[#0283F3]"
                                        : "text-black cursor-pointer text-base tracking-wide hover:text-[#0283F3]"
                                }>
                                {item.title}
                            </NavLink>
                        ))}
                    </div>
                    <div>
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                            onClick={() => setIsModalOpen(true)}> {/* Update here */}
                            <span>Donate</span>
                        </button>
                    </div>

                    <button
                        className="inline-flex md:hidden items-center justify-center py-5 -translate-y-1 rounded-lg [&>*]:aspect-square [&>*]:h-7"
                        onClick={handleClick}>
                        {toggle ? (
                            <img src={close} alt="close" />
                        ) : (
                            <img src={open} alt="open" />
                        )}
                    </button>
                </div>
            </nav>

            <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> {/* Render DonationModal with props */}
        </div>
    );
}
