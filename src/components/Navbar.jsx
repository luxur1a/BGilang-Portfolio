import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ role, onLogout }) {
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 h-20
    bg-gray-950/80 backdrop-blur-xs border-b border-white/10"
    >
      <div
        className="flex flex-cols justify-between items-center
      h-full py-4 px-8 font-sans hover text-white/70  "
      >
        <div className="">
          <Link to="/" className="hover:text-orange-600">
            Home
          </Link>
        </div>
        <div className="flex flex-row gap-8">
          <div>Fullstack Portfolio</div>
          <Link
            to="/3d-portfolio"
            className="hover:text-orange-600 transition transition-colors duration-200 ease-out"
          >
            3D Portfolio
          </Link>
          <div>About Me</div>
        </div>
        <div className="">
          <Link
            to={"/"}
            className="rounded-md py-2 px-4 bg-orange-600 text-white
            hover:bg-orange-800 hover:text-white/50
            transition transition-colors duration-200 ease-out"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
