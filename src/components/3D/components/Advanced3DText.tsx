
import React from 'react';
import { Float, Text3D } from '@react-three/drei';

const Advanced3DText: React.FC = () => {
  return (
    <group position={[0, 0, -2]}>
      <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.7}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[-2.6, 0, 0]}
        >
          AI
          <meshPhysicalMaterial 
            color="#bd4be9" 
            emissive="#bd4be9"
            emissiveIntensity={0.4}
            clearcoat={1}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Float>
      
      <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.7}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[0.5, 0, 0]}
        >
          VR
          <meshPhysicalMaterial 
            color="#4361ee" 
            emissive="#4361ee"
            emissiveIntensity={0.4}
            clearcoat={1}
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Float>
    </group>
  );
};

export default Advanced3DText;
