import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sociallinks from "./components/Sociallinks";
import About from "./pages/About";
import Ngo from "./pages/Ngo";
import Footer from "./components/Footer";
// import Support from "./components/Support";
import RegistrationPage from "./pages/Register";
import Login from "./pages/Login";
import DonerDashBoard from "./components/dashBoard/donerDashBoard/DonerDashBoard";
import Contact from "./pages/Contact";

// import ViewDonation from "./pages/ViewDonations.jsx";
import {Toaster} from "react-hot-toast"
// import Verification from './pages/Verificationc'
import Help from "./pages/Help";
import Protected from "./Protected";
import { Routes, Route, Navigate } from "react-router-dom";
import LogProtected from "./LogProtected";
import LoginPage from "./pages/Login";
import Activedonation from "./components/dashBoard/active/Activedonation";
import Accepted from "./components/dashBoard/accept/Accepted";
import Missed from "./components/dashBoard/missed/Missed";
export default function App() {
    return (
        <div className="overflow-x-hidden ">
            {/* <Toaster position="top-center" reverseOrder={false} /> */}
            <Navbar />
            


            {/* <RegistrationPage /> */}
            {/* <Login/> */}
            {/* <Sociallinks /> */}

            <Routes>
                {/* <Route path="/home" element={<Home />} /> */}
                <Route path="/about" element={<Protected Component={About} />} />
                <Route path="/dash" element={<Protected Component={DonerDashBoard} />} />
                <Route path="/ngo" element={<Ngo />} />
                <Route path="/contact" element={<Protected Component={Contact} />} />
                <Route path="/help" element={<Protected Component={Help} />}/>
                {/* <Route path="/verification" element={<Verification />} /> */}
                {/* <Route path="/support" element={<Support />} /> */}
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Protected Component={Home} />} />
                <Route path="/activedonation" element={<Protected Component={Activedonation} />} />
                <Route path="/accepted" element={<Protected Component={Accepted} />} />
                <Route path="/misseddonation" element={<Protected Component={Missed} />} />
            </Routes>
            

            {/* <Support /> */}
            <Footer />
        </div>
    );
}
