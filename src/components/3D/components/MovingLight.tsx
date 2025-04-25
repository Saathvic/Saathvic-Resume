
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const MovingLight: React.FC = () => {
  const lightRef = useRef(null);
  
  useFrame(({ clock }) => {
    if (lightRef.current) {
      const t = clock.getElapsedTime() * 0.5;
      lightRef.current.position.x = Math.sin(t) * 5;
      lightRef.current.position.z = Math.cos(t) * 5;
    }
  });
  
  return (
    <spotLight
      ref={lightRef}
      position={[0, 5, 0]}
      angle={0.3}
      penumbra={0.8}
      intensity={2}
      color="#bd4be9"
      castShadow
    />
  );
};

export default MovingLight;
