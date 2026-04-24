import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

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
        <div className="">
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
        <div className="">
          <NavLink
            to={"/"}
            className="rounded-md py-3 px-5 bg-orange-600 text-white font-semibold
            hover:bg-orange-800 hover:text-white/50
            transition transition-colors duration-200 ease-out"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
