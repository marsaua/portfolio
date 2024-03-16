import React from "react";
import "./Reset.css"
import "./components/Helpers/Base.scss"
import { Route, Routes } from "react-router-dom";
import NavMenu from './components/NavMenu/NavMenu';
import HomePage from "./pages/HomePage/HomePage";
import ProtectPage from "./pages/ProtectPage/ProtectPage";
import AppointmentPage from "./pages/AppointmentPage/AppointmentPage";
import ForkPage from "./pages/ForkPage/ForkPage";
import HamPage from "./pages/HamPage/HamPage";
import Contacts from "./pages/Contacts/Contacts";

const AppRoutes = () => {
    return (
       
        <main className="container page">    
            <NavMenu/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/protect" element={<ProtectPage/>} />
                <Route path="/appointment" element={<AppointmentPage/>} />
                <Route path="/fork" element={<ForkPage/>} />
                <Route path="/ham" element={<HamPage/>} />
                <Route path="/contacts" element={<Contacts/> }/>
            </Routes>
        </main>    
       
    )
}
export default AppRoutes