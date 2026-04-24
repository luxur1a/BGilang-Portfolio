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
    // UBAH BARIS INI: Ganti h-screen dengan min-h-screen, hapus overflow-hidden, tambah flex & flex-col
    <div className="relative min-h-screen flex flex-col bg-[#0a0a0a] text-white font-mono overflow-x-hidden">
      <Navbar />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Tambahkan flex-grow di sini agar konten mengisi ruang kosong dan mendorong footer ke bawah */}
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
