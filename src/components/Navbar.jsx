import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, animate } from "framer-motion";

function Navbar({ role, onLogout }) {
  const navLinkStyle = ({ isActive }) => {
    return `transition-colors duration-200 ${
      isActive
        ? "text-orange-600 font-bold drop-shadow-[0_0_8px_rgba(234,88,12,0.5)]" // Style saat halaman ini terbuka
        : "text-gray-400 hover:text-white" // Style saat halaman lain yang terbuka
    }`;
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 h-20
    bg-gray-950/80 backdrop-blur-xs border-b border-white/10"
    >
      <div
        className="flex flex-cols justify-between items-center
      h-full py-4 px-8 font-techno text-white/70 font-semibold "
      >
        <div className="text-xl">
          <NavLink to="/" className="text-white">
            Benedict<span className="text-orange-600 text-lg">'s</span>
          </NavLink>
        </div>
        <div className="flex flex-row gap-8">
          <NavLink to={"/fullstack-portfolio"} className={navLinkStyle}>
            Fullstack Portfolio
          </NavLink>
          <NavLink to="/3d-portfolio" className={navLinkStyle}>
            3D Portfolio
          </NavLink>
          <NavLink to={"/about-me"} className={navLinkStyle}>
            About Me
          </NavLink>
        </div>
        <div className="relative isolate flex items-center justify-center">
          {/* 1. Elemen Lingkaran Cahaya (Glow) */}
          <motion.a
            href="mailto:gilangbenediktus24@.com"
            // Class dasar: relative, overflow-hidden, dan styling tombol biasa
            className="relative inline-flex items-center justify-center px-6 py-3 border border-orange-600 font-bold text-white text-sm rounded-lg overflow-hidden group shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)] transition-shadow"
            // 1. Mikro-interaksi Framer Motion (Fisika Pegas)
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {/* 2. LAPISAN PSEUDO-ELEMENT: Efek Glow Berputar (CSS Animation) */}
            {/* content: "" wajib untuk pseudo-element. animate-spin memutar gradasi kerucut */}
            <span
              className="absolute -inset-[150%] bg-[conic-gradient(from_0deg,transparent,#ea580c,#ea580c,transparent)] 
              blur-xl opacity-100 animate-[spin_4s_linear_infinite] z-[-1] group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
            {/* 3. LAPISAN SOLID: Latar belakang oranye utama tombol */}
            {/* Ini untuk menutupi bagian tengah gradasi kerucut */}
            <span
              className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent,transparent,#cf6b19,transparent)] opacity-100 animate-[spin_4s_linear_infinite] z-[-1]"
              aria-hidden="true"
            />
            Reach Me!
          </motion.a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
