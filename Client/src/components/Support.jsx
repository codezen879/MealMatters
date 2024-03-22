import PlayStore from "../Images/Support/playstore.svg";
import AppStore from "../Images/Support/appstore.svg";

export default function Support() {
    return (
        <div className="grid max-sm:grid-cols-1 md:grid-cols-3 py-8 gap-5 px-4 md:px-36">
            <div className="space-y-2">
                <h1 className="font-bold text-xl md:text-3xl">Join Us With</h1>

                <div className="flex flex-row gap-4 items-center [&>*]:max-sm:aspect-video">
                <a href="https://www.instagram.com/innovatechsolutions_mh" target="_blank"><img src={PlayStore} className="max-sm:h-20 h-16" /></a>
                <a href="https://t.me/innovatechsolutions_internship" target="_blank"><img src={AppStore} className="max-sm:h-20 h-14" /></a>
                </div>
            </div>
            <div className="space-y-8">
                <h1 className="font-bold text-xl md:text-3xl">Support</h1>
                <h1 className="font-semibold ">
                    In case of queries, send us an e-mail on{" "}
                    <a
                        href="mailto:support@iMumz.com"
                        className="text-black-600 font-extrabold">
                        mealmatters@gmail.com
                    </a>
                </h1>
            </div>
            <div className="space-y-6">
                <h1 className="font-bold text-xl md:text-3xl">Address</h1>
                <h1 className="font-semibold">
                    Kandivali - Mumbai, Maharastra, INDIA. 400101
                </h1>
                <h1 className="font-semibold">CIN: U85300KA2020PTC140653</h1>
            </div>
        </div>
    );
}
