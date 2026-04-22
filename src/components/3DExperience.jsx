import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model as ModelFrieren } from "./Frieren.jsx"; // Komponen model kamu

export default function Experience() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Lampu agar model terlihat */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        {/* Controls agar user bisa putar-putar model pakai mouse */}
        <OrbitControls makeDefault />

        {/* Menampilkan model kamu */}
        <Stage environment="city" intensity={0.6}>
          <ModelFrieren />
        </Stage>
      </Canvas>
    </div>
  );
}
