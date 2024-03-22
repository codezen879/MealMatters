import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sociallinks from "./components/Sociallinks";
import About from "./pages/About";
import Services from "./pages/Ngo";
import Footer from "./components/Footer";
import Support from "./components/Support";
import RegistrationPage from "./pages/Register";
import Login from "./pages/Login";
// import ViewDonation from "./pages/ViewDonations.jsx";
import {Toaster} from "react-hot-toast"
// import Verification from './pages/Verificationc'
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
    return (
        <div className="overflow-x-hidden ">
            {/* <Toaster position="top-center" reverseOrder={false} /> */}
            <Navbar />
            


            {/* <RegistrationPage /> */}
            {/* <Login/> */}
            {/* <Sociallinks /> */}

            <Routes>
                <Route path="/home" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/services" element={<Services />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="/careers" element={<Careers />} /> */}
                {/* <Route path="/verification" element={<Verification />} /> */}
                {/* <Route path="/support" element={<Support />} /> */}
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
            
            <Support />
            <Footer />
        </div>
    );
}
