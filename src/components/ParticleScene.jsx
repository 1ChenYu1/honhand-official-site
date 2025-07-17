import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

function Particles() {
  const mesh = useRef()
  const count = 400
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const t = i / count * Math.PI * 4
    positions[i * 3] = Math.sin(t) * 80 + Math.random() * 10
    positions[i * 3 + 1] = Math.cos(t) * 80 + Math.random() * 10
    positions[i * 3 + 2] = (i - count / 2) * 1.5 + Math.random() * 8
  }
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.12
    }
  })
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#00e4ff" size={3} sizeAttenuation transparent opacity={0.8} />
    </points>
  )
}

export default function ParticleScene() {
  return (
    <Canvas camera={{ position: [0, 0, 200], fov: 60 }} style={{ width: '100%', height: '100%' }}>
      <ambientLight intensity={0.7} />
      <Particles />
    </Canvas>
  )
} 