import React from "react";
import pageImg from "../Images/Careers/career.png"

const careersData = [
  {
    title: "Mahavir nagar",
    description: "50person",
    applyLink: "https://forms.gle/pimZ8CCMG66YzeZN8",
  },
  {
    title: "Santacruz",
    description: "40person",
    applyLink: "https://forms.gle/pimZ8CCMG66YzeZN8",
  },
  {
    title: "Malad",
    description: "30person",
    applyLink: "https://forms.gle/pimZ8CCMG66YzeZN8",
  },
  {
    title: "Mahim",
    description: "60person",
    applyLink: "https://forms.gle/pimZ8CCMG66YzeZN8",
  },
  {
    title: "",
    description: "",
    applyLink: "https://forms.gle/pimZ8CCMG66YzeZN8",
  },
  {
    title: "Software Engineer",
    description: "We are looking for a talented software engineer to join our growing team.",
    applyLink: "https://forms.gle/pimZ8CCMG66YzeZN8",
  },
  
  
];

export default function Careers() {
    const click = (applyLink) => {
        window.open(applyLink, "_blank");
      };
    
  return (
    <>
    
    <div className="min-h-screen bg-gray-100 ">
      <main className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 gap-2">
          {careersData.map((career, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md mt-8 transform transition-transform duration-300 hover:scale-110">
              <h2 className="text-xl font-semibold mb-4">{career.title}</h2>
              <p className="text-gray-700 mb-4">{career.description}</p>
              <button className="text-blue-500 hover:underline" onClick={() => click(career.applyLink)}>Apply Now</button>
            </div>
          ))}
        </section>
      </main>
    </div>
    </>
  );
}
