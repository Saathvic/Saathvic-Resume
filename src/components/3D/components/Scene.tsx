import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Stars } from '@react-three/drei';
// Removed problematic imports causing errors
import { Vector2 } from 'three';

import AdvancedMesh from './AdvancedMesh';
import MovingLight from './MovingLight';
import FloatingElements from './FloatingElements';
import Advanced3DText from './Advanced3DText';
import ReflectiveFloor from './ReflectiveFloor';
import ParticleSystem from './ParticleSystem';

const Scene: React.FC = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    camera.position.set(0, 0, 5);
  }, [camera]);
  
  return (
    <>
      <color attach="background" args={['#121218']} />
      <fog attach="fog" args={['#121218', 5, 20]} />
      
      <ambientLight intensity={0.3} />
      <MovingLight />
      
      <AdvancedMesh position={[1.5, 0, 0]} color="#bd4be9" shape="sphere" />
      <AdvancedMesh position={[-1.5, 0.5, 1]} color="#4361ee" shape="box" />
      <AdvancedMesh position={[0, -1, 0.5]} color="#ff53c9" shape="octahedron" />
      <AdvancedMesh position={[0.8, 1, -0.5]} color="#00e5ff" shape="torus" />
      
      <FloatingElements />
      <Advanced3DText />
      <ReflectiveFloor />
      <ParticleSystem />
      <Stars radius={100} depth={50} count={5000} factor={4} fade={true} />
      
      <Environment preset="night" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      {/* Removed EffectComposer and related effects that were causing errors */}
    </>
  );
};

export default Scene;
