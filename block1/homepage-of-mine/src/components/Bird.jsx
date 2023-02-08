import React, { Suspense, useContext, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useEnvironment } from "@react-three/drei";
import { NestBird } from "./nestBird";
import { Environment } from "@react-three/drei";
import { Box } from "@mui/system";
import Hdrfile from "../assets/pexels-pixabay-220769.hdr";

export const Bird = () => {
  return (
    <Box sx={{ width: "100%", height: "40vh" }}>
      <Canvas>
        <Suspense fallback={null}>
          <Environment files={Hdrfile} background={true} />
          <ambientLight intensity={0.6} />
          <directionalLight intensity={0.5} />
          <NestBird position={[0, -1.5, 0]} />
          <pointLight position={[0, 1.5, 0]} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={10}
          />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default Bird;
