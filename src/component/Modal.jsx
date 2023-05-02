import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

import { motion } from "framer-motion";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

export default function Modal() {
  return (

    <motion.div
      animate={{
        y: [0, 24, 0],
   
      }}
      transition={{
        duration: 10.5,
        
        repeat: Infinity,
        repeatType: "loop",
      }}
      
    >
      <Canvas
        style={{
          height: "90vh",
          width: "50vw",
        
        }}

        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>

        <Preload all />
      </Canvas>
    </motion.div>
  );
}

const Earth = () => {
  const earth = useGLTF("/scene.glb");

  return (
    <primitive
      object={earth.scene}
      scale={0.5}
      position-y={-1}
      rotation-y={0}
    />
  );
};
