import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ThreeDExperience from "./components/3DExperience";
import { useStore } from "./Store.jsx";

function App() {
  const isWireframe = useStore((state) => state.isWireframe);
  const toggleWireframe = useStore((state) => state.toggleWireframe);

  return (
    // 'relative' = pembungkus utama, 'w-screen h-screen' = lebar/tinggi penuh
    <div className="relative w-screen h-screen bg-gray-900">
      <div className="absolute top-5 right-5 z-20">
        <button
          onClick={toggleWireframe} // Panggil fungsi toggle
          className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-lg transition-all shadow-lg"
        >
          {isWireframe ? "Tampilkan Mode Solid" : "Tampilkan Wireframe"}
        </button>
      </div>
      {/* LAPISAN BAWAH: Canvas 3D */}
      <div className="absolute inset-0 z-0">
        <ThreeDExperience />
      </div>
    </div>
  );
}

export default App;
