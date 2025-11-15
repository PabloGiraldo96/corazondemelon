'use client'

import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import * as THREE from 'three'

export function Heart() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  // Load texture for the heart
  const texture = useLoader(TextureLoader, '/66cb1147-ae8a-48bc-89d9-932978bc41fb.jpeg')

  const heartShape = new THREE.Shape()
  
  // Draw a heart shape
  const x = 0, y = 0
  heartShape.moveTo(x + 0.5, y + 0.5)
  heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y)
  heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7)
  heartShape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9)
  heartShape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7)
  heartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y)
  heartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5)

  const extrudeSettings = {
    depth: 0.4,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1
  }

  const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings)
  
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(0.6, 0.6)

  // Create material with texture
  const material = new THREE.MeshStandardMaterial({ 
    map: texture,
    side: THREE.DoubleSide,
    metalness: 0.002,
    roughness: 0.002
  })

  // Animation: spinning and floating
  useFrame((state) => {
    if (meshRef.current) {
      // Rotate the heart
      meshRef.current.rotation.x += 0.010
      meshRef.current.rotation.y += 0.001

    
      // Float up and down
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry} material={material} scale={1.3} />
  )
}
