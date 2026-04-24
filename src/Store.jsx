import { create } from "zustand";

export const useStore = create((set) => ({
  // Nilai awal
  isWireframe: false,

  // Fungsi untuk mengubah nilai (Toggle)
  toggleWireframe: () => set((state) => ({ isWireframe: !state.isWireframe })),

  modelStats: { tris: 0, vertices: 0 },
  setStats: (stats) => set({ modelStats: stats }),
}));
