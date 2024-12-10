"use client";

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

interface ModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}



export function BarbarianModel(props:ModelProps) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets3d/barbarian.glb')
  const { actions } = useAnimations(animations, group)

  

  useEffect(() => {
    // Play the first action in the actions array
    if (actions && Object.keys(actions).length > 0) {
      const action = actions[Object.keys(actions)[0]]; // Get the first action
      action?.play(); // Play the action   
    
    }
    }, [actions]); //

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Mesh1_Mesh1018"
            geometry={nodes.Mesh1_Mesh1018.geometry}
            material={materials['Material.001']}
            skeleton={nodes.Mesh1_Mesh1018.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/assets3d/barbarian.glb')
