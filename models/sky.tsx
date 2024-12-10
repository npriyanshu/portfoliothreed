import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export const SkyModel = (props:ModelProps) => {
    const skyRef = useRef();
    const sky = useGLTF('/assets3d/sky.glb')
    
  return (
    <mesh ref={skyRef} {...props}>
    <primitive object={sky.scene}/>
    </mesh>
  )
}


