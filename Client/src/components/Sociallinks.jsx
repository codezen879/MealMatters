import React from "react";
import { FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Sociallinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/company/innovatech-software-solutions/",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    Instagram <FaInstagram size={30} />
                </>
            ),
            href: "https://www.instagram.com/innovatechsolutions_mh",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:innovatechsolutionsmh@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Telegram <FaTelegram size={30} />
                </>
            ),
            href: "https://t.me/innovatechsolutions_internship",
            style: "rounded-br-md",
            
        },
    ];
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={
                            `flex justify-between items-center w-40 h-12 px-4 bg-black ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-[600ms]
                            ${style}`
                        }>
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sociallinks;
