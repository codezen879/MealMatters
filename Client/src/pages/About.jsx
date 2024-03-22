import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import Web from "../Images/web.jpg";
import Shlok from "../Images/About/images.jpeg";
import App from "../Images/app.webp";
import Net from "../Images/net.jpg";
import Cloud from "../Images/cloud.jpg";
import Graphic from "../Images/graphic.jpg";
import aboutimg from "../Images/About/about.jpg";

const data = [
    {
        id: 1,
        src: Shlok,
        initial: "Shlok Prajapati - Director at",
        companyName: "[Penguin Solutions]",
        description:
            "Your Support Will Bring A Smile On Their Face ",
    },
    {
        id: 2,
        src: Web,
        description:
            "Your Support Will Bring A Smile On Their Face ",
    },
    {
        id: 3,
        src: App,
        description:
            "Your Support Will Bring A Smile On Their Face ",
    },
    {
        id: 4,
        src: Net,
        description:
            "Your Support Will Bring A Smile On Their Face ",
    },
    {
        id: 5,
        src: Cloud,
        description:
            "Your Support Will Bring A Smile On Their Face ",
    },
    {
        id: 6,
        src: Graphic,
        description:
            "Your Support Will Bring A Smile On Their Face ",
    },
];

const breakpoints = {
    768: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 3,
        spaceBetween: 30,
    },
};

const About = () => {
    return (
        <div>
        <div className="min-h-screen h-full w-full flex flex-col md:flex-row ">
            <img
                className="rounded-lg md:ml-44 h-[50vh] md:h-[70vh] m-8 md:m-16 shadow-2xl shadow-black transform transition-transform duration-300 hover:scale-110"
                src={aboutimg}
                alt="About Page"
            />
            <div className="md:w-1/2 h-full md:pt-14 mx-4 my-12">
                <h1 className="font-sans font-bold text-3xl md:text-5xl leading-[1.2] text-black">
                    Power your life by making A Donation
                </h1>
                <div className="mt-4 w-6 h-1 bg-[#0283F3]"></div>
                <div className="py-3 font-extrabold text-xl md:text-2xl">
                    Who are we
                </div>
                <div className="w-full md:w-[60%]">
                Donating is a great way to improve the conditions of the unprivileged citizen. Your small help will counter poverty, hunger and will bring happiness and a feeling of satiety among the unprivileged.
                </div>
            </div>
        </div>

        <div className="bg-[#111827] mb-20 flex flex-col">
            <div className="w-3/4 m-auto md:py-40 pb-6 pt-6">
                <div className="text-white text-center text-3xl font-semibold md:text-5xl ">
                    What Our{" "}
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent font-bold">
                        Testimonials
                    </span>{" "}
                    Say!
                </div>
                <div className="mt-6 ">
                    <Swiper
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        keyboard={{ enabled: true }}
                        breakpoints={breakpoints}
                        className="mySwiper">
                        {data.map((d) => (
                            <SwiperSlide key={d?.id}>
                                <div className="bg-white h-[450px] text-black rounded-xl ">
                                    <div className="h-56 rounded-t-xl flex justify-center items-center">
                                        <img
                                            src={d?.src}
                                            alt={d?.initial}
                                            className="h-44 rounded-full w-44 "
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center items-center gap-4 p-4">
                                        <p className="font-bold">
                                            {d?.initial}
                                        </p>
                                        <p className="font-bold">
                                            {d?.companyName}
                                        </p>
                                        <p>{d?.description}</p>
                                        <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl ">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
    );
};

export default About;
