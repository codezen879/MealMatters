// import React from "react";
// import pageImg from "../Images/Careers/career.png"
// import axios from "axios";
// const getData=
// const careersData = [
//   {
//     title: "Mahavir nagar",
//     description: "50person",
//     applyLink: "https://forms.gle/pimZ8CCMG66YzeZN8",
//   },
//   {
//     title: "Santacruz",
//     description: "40person",
//     applyLink: "https://forms.gle/pimZ8CCMG66YzeZN8",
//   },
//   {
//     title: "Malad",
//     description: "30person",
//     applyLink: "https://forms.gle/pimZ8CCMG66YzeZN8",
//   },
//   {
//     title: "Mahim",
//     description: "60person",
//     applyLink: "https://forms.gle/pimZ8CCMG66YzeZN8",
//   },
//   {
//     title: "Vasai",
//     description: "80person",
//     applyLink: "https://forms.gle/pimZ8CCMG66YzeZN8",
//   },
//   {
//     title: "Virar",
//     description: "8person",
//     applyLink: "https://forms.gle/pimZ8CCMG66YzeZN8",
//   },
  
  
// ];

// export default function Careers() {
//     const click = (applyLink) => {
//         window.open(applyLink, "_blank");
//       };
    
//   return (
//     <>
    
//     <div className="min-h-screen bg-gray-100 ">
//       <main className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 gap-2">
//           {careersData.map((career, index) => (
//             <div key={index} className="p-4 bg-white rounded-lg shadow-md mt-8 transform transition-transform duration-300 hover:scale-110">
//               <h2 className="text-xl font-semibold mb-4">{career.title}</h2>
//               <p className="text-gray-700 mb-4">{career.description}</p>
//               <button className="text-blue-500 hover:underline" onClick={() => click(career.applyLink)}>Request</button>
//             </div>
//           ))}
//         </section>
//       </main>
//     </div>
//     </>
//   );
// }
import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Help = () => {
    const [data, setData] = useState([]);
    const [distance, setDistance] = useState("");
    const [toggle,SetToggle]=useState(false)
    const getTasks = async () => {
      try {
        console.log(distance)
        const response = await axios.post(`http://localhost:8000/api/v1/food/nearBy`,{lat1:"19.237188","lon1":"72.844139",distance});
        // const jsonData = await response.json();

        setData(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    const handleChange = (e) => {
      setDistance(e.target.value);
      // console.log(distance)
    }
  
    useEffect(() => {
      getTasks();
    }, [distance]);
  return (
    <div>
        <div className='border-black border-2 w-[400px] mx-5 rounded-lg'>        
            <input
            className=' px-5 mx-5 my-5 border-black border-2 rounded-md'
            placeholder='Enter The Distance' onChange={(e)=>handleChange(e)}/>
            <button onClick={()=>SetToggle(true)} className='border-black border-2 px-5 my-5 rounded-md'>submit</button>
        </div>
       <br/>
       {toggle&&(<>
        <div className="min-h-screen bg-gray-100 ">
     <main className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 gap-2">
          {data?.map((data, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md mt-8 transform transition-transform duration-300 hover:scale-110">
              <h2 className="text-xl font-semibold mb-4">{data.foodDetails}</h2>
              <p className="text-gray-700 mb-4">{data.quantity}</p>
              <button className="text-blue-500 hover:underline" onClick={() => click(career.applyLink)}>Request</button>
            </div>
          ))}
        </section>
    </main>
  </div>
       </>)}
    </div>
  )
}

export default Help