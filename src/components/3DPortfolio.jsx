import { useState } from "react";
import ThreeDExperience from "./3DExperience";
import { useStore } from "../Store.jsx";

function ThreeDPortfolio() {
  const { isWireframe, toggleWireframe, modelStats } = useStore();

  return (
    // 'relative' = pembungkus utama, 'w-screen h-screen' = lebar/tinggi penuh
    <div className="relative w-screen h-screen bg-gray-950 text-white overflow-hidden font-mono">
      {/* 1. KANAN ATAS: Statistik Model */}
      <div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-md p-4 rounded-lg border border-white/10 text-xs tracking-widest uppercase">
        <p className="text-gray-400 mb-1">Model Info</p>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between gap-8">
            <span>Triangles:</span>
            <span className="text-blue-400">
              {modelStats.tris.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between gap-8">
            <span>Vertices:</span>
            <span className="text-blue-400">
              {modelStats.vertices.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* 2. SEBELAH KIRI: Menu Kontrol */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
          <h3 className="text-sm mb-4 border-b border-white/10 pb-2">
            Visual Settings
          </h3>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={isWireframe}
              onChange={toggleWireframe}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm group-hover:text-blue-400 transition-colors">
              Wireframe Mode
            </span>
          </label>
        </div>
      </div>

      {/* 3. BACKGROUND: Canvas 3D */}
      <div className="absolute inset-0 z-0">
        <ThreeDExperience />
      </div>
    </div>
  );
}

export default ThreeDPortfolio;
