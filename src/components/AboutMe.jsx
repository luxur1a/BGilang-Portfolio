import React from "react";
import PageTransition from "./PageTransition";

function AboutMe() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-950 text-white pt-32 px-6 pb-20 selection:bg-orange-600 selection:text-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-techno font-bold mb-4">
              About <span className="text-orange-600">Me</span>
            </h1>
            <div className="h-1 w-20 bg-orange-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Kolom Kiri: Foto & Info Singkat (Lebar 4/12) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Area Foto Profil */}
              <div className="aspect-square rounded-2xl bg-gray-900 border border-gray-800 flex items-center justify-center overflow-hidden relative group">
                {/* Ganti dengan <img src="/foto-profilmu.jpg" className="object-cover w-full h-full" /> */}
                <span className="text-gray-600 font-mono text-sm">
                  Foto Profil 1:1
                </span>

                {/* Dekorasi sudut ala sci-fi/tech */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-600 opacity-0 group-hover:opacity-100 transition-opacity m-4"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-600 opacity-0 group-hover:opacity-100 transition-opacity m-4"></div>
              </div>

              {/* Quick Facts Card */}
              <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl font-mono text-sm flex flex-col gap-4">
                <div>
                  <span className="text-gray-500 block mb-1">Status</span>
                  <span className="text-green-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Open to Work
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Education</span>
                  <span className="text-gray-300">
                    S1 Teknik Komputer, UNDIP
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block mb-1">Location</span>
                  <span className="text-gray-300">
                    Indonesia (Willing to Relocate)
                  </span>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Narasi & Keahlian (Lebar 8/12) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {/* Biografi */}
              <section className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-techno font-bold text-white mb-4">
                  Membangun Solusi, dari Backend hingga 3D Canvas.
                </h2>
                <p className="text-gray-400 font-sans leading-relaxed text-md mb-4">
                  Halo, saya Benediktus Gilang. Saya adalah seorang Full Stack
                  Engineer dengan latar belakang Teknik Komputer. Saya memiliki
                  minat besar dalam memecahkan masalah teknis yang kompleks dan
                  mengubahnya menjadi aplikasi yang mulus dan interaktif.
                </p>
                <p className="text-gray-400 font-sans leading-relaxed text-md">
                  Selain membangun arsitektur web modern menggunakan React dan
                  Python, saya memiliki spesialisasi ganda di bidang
                  infrastruktur cloud (AWS re/Start Cloud Practicioner) dan
                  pengembangan interaktif 3D. Saat saya tidak sedang melakukan
                  <i>debugging</i> kode atau merancang *database*, Anda mungkin
                  akan menemukan saya sedang melakukan *rigging* model 3D di
                  Blender, mengeksplorasi AI generatif lokal, atau berlatih
                  *weightlifting*.
                </p>
              </section>

              {/* Tech Stack / Skills */}
              <section>
                <h3 className="text-xl font-techno font-bold mb-6 text-white flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                  Technical Arsenal
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Kategori 1 */}
                  <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl">
                    <h4 className="text-gray-500 text-sm font-mono mb-3 uppercase tracking-wider">
                      Web Development
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Vite", "Tailwind CSS", "Python", "MySQL"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Kategori 2 */}
                  <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl">
                    <h4 className="text-gray-500 text-sm font-mono mb-3 uppercase tracking-wider">
                      Cloud & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["AWS", "GitHub", "Git", "Linux", "Ollama"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Kategori 3 */}
                  <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl md:col-span-2">
                    <h4 className="text-gray-500 text-sm font-mono mb-3 uppercase tracking-wider">
                      3D & Interactive
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React Three Fiber",
                        "Three.js",
                        "Blender",
                        "Unity",
                        "3D Rigging",
                        "Unreal Engine",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
export default AboutMe;
