import { Link } from "react-router-dom";
import PageTransition from "./PageTransition";

function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-orange-600 selection:text-white">
        <div className="absolute top-1/2 left-1 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/40 blur-[120px] rounded-full pointer-events-none" />
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-2 overflow-hidden">
          {/* (Glow Effect) */}

          <div className="relative max-w-4xl mx-auto text-left">
            <h1 className="text-6xl font-bold tracking-tight mb-8 ">
              Hello! I'm <br />
              <span className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                Benediktus Gilang
              </span>
              .
            </h1>
            <div className="text-left text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
              I transform complex problems into elegant, scalable solutions.
              Specialized in full-stack development and 3D interactive web
              experiences.
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/fullstack-portfolio"
                className="px-8 py-4 bg-orange-600 hover:bg-orange-500 font-semibold rounded-lg transition-all
                items-start"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
    // Pembungkus Utama: Latar belakang gray-950, teks putih
  );
}

export default Home;
