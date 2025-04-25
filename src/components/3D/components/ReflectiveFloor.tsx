
import React from 'react';
import { MeshReflectorMaterial } from '@react-three/drei';

const ReflectiveFloor: React.FC = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={15}
        depthScale={1}
        minDepthThreshold={0.85}
        color="#050505"
        metalness={0.6}
        roughness={1}
        mirror={0.8}
      />
    </mesh>
  );
};

export default ReflectiveFloor;
