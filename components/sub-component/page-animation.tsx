import useCameraStore from '@/store/cameraContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PageAnimation = () => {
  const pageoneRef = useRef(null);
  const camera = useCameraStore((state) => state.camera);

  useGSAP(() => {
    if (camera && pageoneRef.current) {
      // Create a timeline synchronized with scroll
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: pageoneRef.current,
          start: "top 0%",  // Start when the top of the div reaches the top of the viewport
          end: "bottom -100%",  // End when the bottom of the div reaches the top of the viewport
          scrub: true,  // Smoothly synchronize with scrolling
          markers: true,
          pin: true, // Pin the element during the scroll
        },
      });

      // Define the animation sequence with intermediate points
      timeline
        .to(camera.position, { x: 1.312, y: 1.711, z: 7.854 })  // Intermediate point 1
        .to(camera.position, { x: 1.327, y: 2.817, z: 7.084 })  // Intermediate point 2
        .to(camera.position, { x: 1.074, y: 2.475, z: 6.061 })  // Intermediate point 3
        .to(camera.position, { x: 0.637, y: 3.173, z: 5.079 })  // Intermediate point 4
        .to(camera.position, { x: 0.690, y: 3.794, z: 5.662 }); // Final point
    }
  }, [camera]);

  return <div ref={pageoneRef} className="h-screen w-screen bg-green-500 opacity-25"></div>;
};

export default PageAnimation;
