//import instagram from "../Images/Footer/instagram.svg";
export default function Footer() {
    return (
        <div className=" flex flex-col md:flex-col justify-between items-center gap-2 bg-[#111827] px-8 md:px-40 py-4">
            <h1 className="text-xs text-white">
                © 2024 Mealmatters, OCP
            </h1>

            <div className="max-sm:flex-col items-center max-sm:space-y-2 [&>*]:underline [&>*]:text-white [&>*]:text-xs md:space-x-4">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>

            {/* <div className="flex flex-row gap-5">
                {links.map((link, index) => (
                    <a
                        key={index}
                        href="#"
                        className="aspect-square h-5 md:h-6">
                        <img
                            src={`/components/Footer/${link.image}.svg`}
                            alt={link.name}
                            className="text-white"
                        />
                    </a>
                ))}
            </div> */}
        </div>
    );
}
