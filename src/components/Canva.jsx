import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useState } from 'react';

export default function Canva() {
  const gltf = useLoader(GLTFLoader, '/template_example_04/phone.gltf');
  const [speed, setSpeed] = useState(5);
  const speedFast = () => {
    setSpeed(30);
  }
  const speedNormal = () => {
    setSpeed(5)
  }
  return (
    <div
      className="h-[400px] md:h-full w-full "
    >
      <Canvas>
        <mesh
          onPointerEnter={speedFast}
          onPointerLeave={speedNormal}
          scale={2.5}
          rotation={[0, 2, 0]}
          position={[0,-2.7,0]}
        >
        <ambientLight intensity={0.3} />
          <primitive object={gltf.scene} />
        </mesh>
        <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={speed} enableRotate={false} /> 
      </Canvas>

    </div>
  )
}

