import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FullstackPortfolio from "./components/FullstackPortfolio";
import ThreeDPortfolio from "./components/3DPortfolio";
import AboutMe from "./components/AboutMe";

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-950 text-white font-mono overflow-x-hidden ">
      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/fullstack-portfolio"
              element={<FullstackPortfolio />}
            />
            <Route path="/3d-portfolio" element={<ThreeDPortfolio />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </AnimatePresence>
      </main>

      <footer className="py-8 text-center border-t border-gray-900 text-gray-500 text-sm mt-auto">
        <p>© 2026 Benediktus Gilang. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
