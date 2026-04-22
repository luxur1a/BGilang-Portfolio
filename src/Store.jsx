import { create } from "zustand";

export const useStore = create((set) => ({
  // Nilai awal
  isWireframe: false,

  // Fungsi untuk mengubah nilai (Toggle)
  toggleWireframe: () => set((state) => ({ isWireframe: !state.isWireframe })),
}));
