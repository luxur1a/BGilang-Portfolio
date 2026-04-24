import { useState } from "react";
import "./App.css";
import ThreeDExperience from "./components/3DExperience";
import ThreeDPortfolio from "./components/3DPortfolio";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./components/Home";

import Navbar from "./components/Navbar";

function App() {
  return (
    // 'relative' = pembungkus utama, 'w-screen h-screen' = lebar/tinggi penuh
    <div className="relative w-screen h-screen bg-[#0a0a0a] text-white overflow-hidden font-mono">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/3d-portfolio" element={<ThreeDPortfolio />} />
      </Routes>
    </div>
  );
}

export default App;
