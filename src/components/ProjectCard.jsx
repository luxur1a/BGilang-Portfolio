// src/components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({
  title,
  description,
  imageSrc,
  technologies,
  demoUrl,
  repoUrl,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-8 bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-600/50 transition-colors group">
      {/* Bagian Kiri: Visual/Screenshot */}
      <div className="md:w-1/2 bg-gray-800 relative overflow-hidden flex items-center justify-center min-h-[300px]">
        {/* Placeholder - Ganti dengan tag <img src={imageSrc} /> nanti */}
        <span className="text-gray-500 font-mono text-center px-4">
          {imageSrc ? `Screenshot of ${title}` : "No Image Provided"}
        </span>

        {/* Efek overlay saat di-hover */}
        <div className="absolute inset-0 bg-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Bagian Kanan: Informasi & Link */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-techno font-bold mb-2">{title}</h2>
        <p className="font-sans text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Badges (Looping data array) */}
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-xs font-semibold rounded-full border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Tombol Aksi */}
        <div className="flex gap-4 mt-auto">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold rounded-lg transition-all text-center"
            >
              Live Demo
            </a>
          )}

          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-transparent hover:bg-gray-800 text-white border border-gray-700 text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                ></path>
              </svg>
              View Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
