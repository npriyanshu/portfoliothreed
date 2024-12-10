
"use client";

import Scene from "../components/three-components/renderer"; // Adjust the path as per your project structure
import useCameraStore from "@/store/cameraContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollPage from "@/components/ScrollPage";

export default function Home() {


  // const camera = useCameraStore((state) => state.camera);

  // useGSAP(() => {
  //   console.log("camera : ",camera)
  //   if(camera){
  //     gsap.to(camera.position, {
  //       delay:5,
  //       duration:6,
  //       x: 7,
  //       y: 7,
  //       z: 7,
  //       ease: "power1.inOut",
  //       onUpdate: ()=>{
  //         console.log(camera.position)
  //       }
  //     });
  //   }
  
  // }, [camera]);

  return (
    <main className="flex flex-col overflow-x-hidden relative justify-center">
      {/* 3D Scene */}


    {/* [1.6515026013786438, 2.7202130110625253, 7.053132230145923] */}
    <div className="h-screen w-screen">
      <div className="w-full h-full flex-grow fixed top-0 left-0 z-1">
        <Scene />
      </div>
    </div>

    <ScrollPage />


    </main>
  );
}
