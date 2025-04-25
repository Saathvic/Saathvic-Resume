
import React from 'react';
import { Float, Trail } from '@react-three/drei';
import { MeshWobbleMaterial } from '@react-three/drei';

const FloatingElements: React.FC = () => {
  return (
    <group>
      <Trail
        width={1}
        color="#8352FD"
        length={8}
        decay={1}
        attenuation={(width) => width * width}
      >
        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <mesh position={[2, 1, -2]}>
            <octahedronGeometry args={[0.6]} />
            <MeshWobbleMaterial color="#8352FD" factor={0.4} speed={2} />
          </mesh>
        </Float>
      </Trail>
      
      <Trail
        width={1}
        color="#4361ee"
        length={6}
        decay={1}
        attenuation={(width) => width * width}
      >
        <Float speed={1.5} rotationIntensity={1.8} floatIntensity={1.8}>
          <mesh position={[-2, -1, -1]}>
            <torusGeometry args={[0.5, 0.2, 16, 32]} />
            <MeshWobbleMaterial color="#4361ee" factor={0.3} speed={1.5} />
          </mesh>
        </Float>
      </Trail>
    </group>
  );
};

export default FloatingElements;
