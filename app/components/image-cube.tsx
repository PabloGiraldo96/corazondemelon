'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Heart } from './cube'

export function ImageCube() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 70 }}
      className="h-full w-full"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <Heart />
      <OrbitControls enableZoom={true} />
    </Canvas>
  )
}
