"use client";

import React, { useState, useRef, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Html, OrbitControls, Text } from "@react-three/drei";
import { MedievalModel } from "../../models/Medivel"; // Import your Model component
import { ArcherModel } from "@/models/archer";
import { BarbarianModel } from "@/models/barbarian";
import { SkyModel } from "@/models/sky";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// import VideoScreen from "@/models/videoScreen";
// import { ImageScreen } from "../compotoimage";
import { GiantModel } from "@/models/giant";
import useCameraStore from "@/store/cameraContext";



// Component to log and update camera position
const CameraLogger = ({ orbitControlsRef }: { orbitControlsRef:React.MutableRefObject<any>}) => {
  const { camera } = useThree();

  const setCamera = useCameraStore((state) => state.setCamera);

  useEffect(() => {
    setCamera(camera);
  }, [camera, setCamera]);

  useGSAP(() => {
    gsap.from(camera.position, {
      x: 5.3461715577169455,
      y: 8.70656755978578,
      z: 25.67879407235485,
      duration: 2,
      ease: "expo.inout",
      onStart: () => {
        // When animation starts, increase maxDistance of OrbitControls
        if (orbitControlsRef.current) {
          orbitControlsRef.current.maxDistance = 100;
        }
      },
      // onUpdate: ()=>{
      //   console.log([camera.position.x,camera.position.y,camera.position.z])
      // },
      onComplete: () => {
        // When animation completes, reset maxDistance to 10
        if (orbitControlsRef.current) {
          orbitControlsRef.current.maxDistance = 10;
        }
      },
    });
  }, []);

 useFrame(()=>{
  console.log([camera.position.x,camera.position.y,camera.position.z])
 })

  return null; // This component doesn't render anything visible
};

export default function Scene() {
  const orbitControlsRef = useRef<any>(null); // Create a ref for OrbitControls here


  return (
    <Canvas
      style={{ height: "100vh", width: "100%" }} // Fullscreen canvas
      camera={{ position: [2.278518334510173, 1.9439998476176608, 9.5420381026444] }} // Use the updated camera position
    >
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.5} />

      {/* Directional light for shadows */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <SkyModel scale={[1, 1, 1]} />
      {/* Model Components */}
      <MedievalModel />
      <BarbarianModel 
        position={[1.7992677275231548, 1.0292126280550882, 8.235007126649275]}
        scale={[0.4, 0.3, 0.4]}
      />
      <ArcherModel
        position={[1.8950791476439948, 3.995210263033108, 2.4193989733890436]} 
        rotation={[0, -1, 0]}
        scale={[0.4, 0.3, 0.4]}
      />

      <GiantModel scale={[0.5,0.5,0.5]} position={[0.39362744596847143, 3.0028927900694115, 4.51814774249811]} />


      
      {/* <VideoScreen videoSrc={'video_20211015_111536.mp4'} /> */}


      <OrbitControls 
        ref={orbitControlsRef} // Pass the ref to OrbitControls
        minPolarAngle={Math.PI / 6} // 45 degrees
        maxPolarAngle={Math.PI / 2.2} // 90 degrees
        minDistance={5}
        maxDistance={10} // Default maxDistance
        enableZoom={false}
        enableRotate={false}
      />


      {/* Camera Logger */}
      <CameraLogger orbitControlsRef={orbitControlsRef} />
    </Canvas>
  );
}

