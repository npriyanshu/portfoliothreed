"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const VideoScreen = ({ videoSrc }:{videoSrc:string}) => {
//   const videoRef = useRef(null);
  const textureRef = useRef(null);

  useEffect(() => {
    if (!videoSrc) {
      console.error("Please provide a videoSrc prop.");
      return;
    }

    // Create video element dynamically
    const video = document.createElement("video");
    video.src = videoSrc;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.play();
    // videoRef.current = video;

    // Create VideoTexture and assign it
    const videoTexture = new THREE.VideoTexture(video);
    videoTexture.minFilter = THREE.LinearFilter;
    videoTexture.magFilter = THREE.LinearFilter;
    
    // @ts-ignore
    textureRef.current = videoTexture;
    

    // Cleanup on unmount
    return () => {
      video.pause();
      video.src = ""; // Release resources
    };
  }, [videoSrc]);

  return (
    <mesh position={[3,5,2]} scale={[3,2,0]}>
      {/* Screen Geometry */}
      <planeGeometry  />
      {/* Screen Material */}
      {textureRef.current && (
        <meshBasicMaterial map={textureRef.current} toneMapped={false}
        //  side={THREE.DoubleSide}
          />
      )}
    </mesh>
  );
};

export default VideoScreen;
