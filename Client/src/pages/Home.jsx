import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import HeroImage from "../Images/HeroImage2.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full bg-gradient-to-b">
      <div className="relative">
        <img
          className="w-full h-[500px] md:h-[500px]"
          src={HeroImage}
          alt=""
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 mt-80 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2">
                Get Started
              </Button>
            </DialogTrigger>
            <DialogContent className="flex items-center justify-center">
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription>
                  <div className="flex justify-center gap-3">
                    <button className="w-[200px] h-[200px] bg-red-800">
                      Donate Now
                    </button>
                    <button className="w-[200px] h-[200px] bg-red-800">
                      Help
                    </button>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Home;
