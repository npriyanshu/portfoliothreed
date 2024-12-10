"use client";

import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import ReactDOMServer from "react-dom/server";


export const ImageScreen = ({ component }: { component: React.ReactNode }) => {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!component) return;

    // Create a canvas and render the component to it
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Render the React component to a string and then draw it on the canvas
    const reactMarkup = ReactDOMServer.renderToStaticMarkup(component);
    const img = new Image();
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(reactMarkup)}`;

    img.onload = () => {
      context.drawImage(img, 0, 0);
      const newTexture = new THREE.CanvasTexture(canvas);
      setTexture(newTexture);
    };

    // Cleanup
    return () => {
      if (texture) {
        texture.dispose();
      }
    };
  }, [component]);

  return (
    <>
      {/* <canvas ref={canvasRef} width={256} height={128} style={{ display: "none" }} /> */}
      <mesh position={[0, 5, 0]} scale={[3, 4, 0]}>
        <planeGeometry />
        {texture && (
          <meshBasicMaterial map={texture} 
        //   toneMapped={false} 
        //   side={THREE.DoubleSide} 
          />
        )}
      </mesh>
    </>
  );
};
