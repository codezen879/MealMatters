// Contact.js

import React from "react";
import 'tailwindcss/tailwind.css';
import Whatsapp from "../Images/whatsapp.png"

const Contact = () => {

  //const whatsappNumber = "9321802886";

  // Create the WhatsApp link
  const whatsappLink = `https://wa.me/${9321802886}`;
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-40">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Email:</h3>
            <p>Innovatechsolutionsmh@gmail.com</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Phone:</h3>
            <p>(+91) 9321802886 </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Address:</h3>
          <p>Kandivali - East, Mumbai</p>
        </div>
        <div>
          <br />
        <button><a href={whatsappLink} target="_blank" rel="noopener noreferrer"><img src={Whatsapp} alt="" className="w-14"/></a></button>

        </div>
        </div>
        

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Working Hours:</h3>
          <p>Monday - Saturday: 10:00 AM - 10:00 PM</p>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;
