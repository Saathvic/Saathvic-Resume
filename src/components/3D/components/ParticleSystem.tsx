
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

interface ParticleSystemProps {
  count?: number;
  color?: string;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ 
  count = 100, 
  color = "#8a2be2" 
}) => {
  const particles = useRef(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);
  
  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });
  
  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color={color} sizeAttenuation transparent opacity={0.8} />
    </points>
  );
};

export default ParticleSystem;
