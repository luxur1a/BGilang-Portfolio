import React from "react";
import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      // 1. Kondisi Awal (Saat baru mau masuk)
      initial={{ opacity: 0, y: 20 }}
      // 2. Kondisi Selesai (Posisi normal)
      animate={{ opacity: 1, y: 0 }}
      // 3. Kondisi Keluar (Saat pindah ke halaman lain)
      exit={{ opacity: 0, y: -20 }}
      // 4. Pengaturan Kecepatan & Gaya Animasi
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
