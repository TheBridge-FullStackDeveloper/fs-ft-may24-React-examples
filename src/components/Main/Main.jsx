import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import TravelList from "./TravelList";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Staff from "./Staff";
import Topic from "./Topic";

const Main = () => {
  return (
    <main>
      <h1>Mi web de viajes</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<TravelList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  );
};

export default Main;
