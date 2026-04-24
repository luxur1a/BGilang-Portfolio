import React from "react";
import ProjectCard from "../components/ProjectCard";
import PageTransition from "./PageTransition";

export default function FullstackPortfolio() {
  const projects = [
    {
      title: "JobLoker",
      description:
        "Platform pencarian kerja komprehensif yang menghubungkan pelamar dengan perusahaan. Dilengkapi dengan fitur filter pencarian dinamis, dashboard pengguna, dan sistem manajemen database yang solid.",
      imageSrc: "/jobloker-screenshot.png", // Akan tampil jika file ada
      technologies: ["React", "Tailwind", "MySQL"],
      demoUrl: "https://jobloker.demo.com", // Hapus baris ini jika belum ada web live-nya
      repoUrl: "https://github.com/luxur1a/jobloker",
    },
    // Tambah di sini
    // { title: "E-Commerce", ... }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-950 text-white pt-32 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="font-techno text-4xl font-bold mb-4">
              Fullstack <span className="text-orange-600">Projects</span>
            </h1>
            <p className="font-sans text-gray-400 max-w-2xl">
              Kumpulan aplikasi web end-to-end yang saya bangun, dari
              perancangan database hingga antarmuka pengguna interaktif.
            </p>
          </div>

          {/* Looping semua project yang ada di array */}
          <div className="flex flex-col gap-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                technologies={project.technologies}
                demoUrl={project.demoUrl}
                repoUrl={project.repoUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
