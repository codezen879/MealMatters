import React from "react";
import Web from "../Images/web.jpg";
import Software from "../Images/it.jpg";
import App from "../Images/app.webp";
import Net from "../Images/net.jpg";
import Cloud from "../Images/cloud.jpg";
import Graphic from "../Images/graphic.jpg";

const Services = () => {
    const services = [
        {
            id: 1,
            src: Software,
            description: "Hello guys I am her Hello guys I am here Hello guys",
        },
        {
            id: 2,
            src: Web,
            description: "Hello guys I am her Hello guys I am here Hello guys",
        },
        {
            id: 3,
            src: App,
            description: "Hello guys I am her Hello guys I am here Hello guys",
        },
        {
            id: 4,
            src: Net,
            description: "Hello guys I am her Hello guys I am here Hello guys",
        },
        {
            id: 5,
            src: Cloud,
            description: "Hello guys I am her Hello guys I am here Hello guys",
        },
        {
            id: 6,
            src: Graphic,
            description: "Hello guys I am her Hello guys I am here Hello guys",
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
                            Services we offer
                        </p>
                        <p className="py-6">
                            Checkout some of our services out here
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                        {services.map(({ id, src, description }) => (
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
