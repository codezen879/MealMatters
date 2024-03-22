import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sociallinks from "./components/Sociallinks";
import About from "./pages/About";
import Services from "./pages/Ngo";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Support from "./components/Support";
import Careers from "./pages/Careers"
// import Verification from './pages/Verificationc'
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
    return (
        <div className="overflow-x-hidden ">
            <Navbar />
            {/* <Sociallinks /> */}

            <Routes>
                <Route path="/home" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/services" element={<Services />} /> */}
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="/careers" element={<Careers />} /> */}
                {/* <Route path="/verification" element={<Verification />} /> */}
                {/* <Route path="/support" element={<Support />} /> */}

                <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>

            <Support />
            <Footer />
        </div>
    );
}
