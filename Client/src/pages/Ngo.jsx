import React from "react";
import Web from "../Images/ngo1.png";
import Software from "../Images/ngo2.jpeg";
import App from "../Images/ngo3.png";
import Net from "../Images/ngo4.jpeg";
import Cloud from "../Images/ngo5.webp";
import Graphic from "../Images/ngo6.jpeg";

const NGO = () => {
    const services = [
        {
            id: 1,
            src: Software,
            description: "Andheri-East ,Mumbai",
            phone:"9321XXXXXXX"
        },
        {
            id: 2,
            src: Web,
            description: "Santacruz-East ,Mumbai",
            phone:"9321XXXXXXX"
        },
        {
            id: 3,
            src: App,
            description: "Palghar ,Palghar",
            phone:"9321XXXXXXX"
        },
        {
            id: 4,
            src: Net,
            description: "Laxminagar, Kandivali",
            phone:"9321XXXXXXX"
        },
        {
            id: 5,
            src: Cloud,
            description: "Mahavir nagar, Borivali",
            phone:"9321XXXXXXX"
        },
        {
            id: 6,
            src: Graphic,
            description: "Bangur Nagar, Goregaon",
            phone:"9321XXXXXXX"
        },
    ];

    return (
        <>
            <div
                name="services"
                className="w-full bg-gradient-to-b bg-white text-black pb-24">
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center">
                    <div className="pb-8 flex flex-col items-center">
                        <p className="text-4xl font-bold inline border-gray">
                            NGO's that can help you
                        </p>
                        <p className="py-6">
                            Checkout some of our NGO's out here
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                        {services.map(({ id, src, description, phone }) => (
                            <div
                                key={id}
                                className="flex flex-col shadow-sm shadow-gray-600 rounded-lg overflow-hidden">
                                <img
                                    src={src}
                                    className="rounded-md duration-200 hover:scale-110 w-full h-3/4"
                                    alt=""
                                />
                                <div className="flex-grow font-bold p-4">
                                    {description}
                                    <br />
                                    {phone}
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NGO;
