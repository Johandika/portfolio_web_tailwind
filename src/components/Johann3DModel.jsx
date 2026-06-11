import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import johannGlb from "../assets/images/3d/johann-v1.glb";

function Model({ url }) {
  const { scene } = useGLTF(url);
  // Optional: Center and scale the model here or let OrbitControls frame it
  return (
    <primitive
      object={scene}
      scale={5.3}
      position={[0, 0, 0]}
    />
  );
}

const Johann3DModel = () => {
  return (
    <div className="w-full h-[400px] sm:h-[450px] md:h-[600px] cursor-grab active:cursor-grabbing relative z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
        />
        <Suspense fallback={null}>
          <Model url={johannGlb} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.2}
        />
      </Canvas>
    </div>
  );
};

export default Johann3DModel;
