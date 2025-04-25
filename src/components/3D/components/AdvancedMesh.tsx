
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import { Vector3 } from 'three';

interface AdvancedMeshProps {
  position: [number, number, number];
  color: string;
  shape?: "sphere" | "box" | "torus" | "octahedron";
  size?: number;
  speed?: number;
}

const AdvancedMesh: React.FC<AdvancedMeshProps> = ({ 
  position, 
  color, 
  shape = "sphere", 
  size = 0.5, 
  speed = 1 
}) => {
  const meshRef = useRef(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4 * speed) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2 * speed) * 0.2;
      // Subtle floating animation
      meshRef.current.position.y += Math.sin(state.clock.getElapsedTime() * speed) * 0.002;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      {shape === "sphere" && <sphereGeometry args={[size, 32, 32]} />}
      {shape === "box" && <boxGeometry args={[size, size, size]} />}
      {shape === "torus" && <torusGeometry args={[size, size/3, 16, 32]} />}
      {shape === "octahedron" && <octahedronGeometry args={[size]} />}
      
      <MeshDistortMaterial 
        color={color} 
        speed={2} 
        distort={0.3} 
        envMapIntensity={1} 
        clearcoat={1} 
        clearcoatRoughness={0.1} 
        metalness={0.9}
      />
    </mesh>
  );
};

export default AdvancedMesh;
