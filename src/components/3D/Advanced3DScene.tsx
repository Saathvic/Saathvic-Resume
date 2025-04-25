
import React, { useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { toast } from "@/hooks/use-toast";

// Import refactored components
import Scene from './components/Scene';
import StaticFallback from './components/StaticFallback';
import ErrorBoundary from './components/ErrorBoundary';

const Advanced3DScene: React.FC = () => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [supportsWebGL, setSupportsWebGL] = useState(true);

  useEffect(() => {
    // Check if WebGL is supported
    try {
      const canvas = document.createElement('canvas');
      const supports = !!(
        window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setSupportsWebGL(supports);
      if (!supports) {
        setHasError(true);
        toast({
          title: "WebGL Not Supported",
          description: "Your browser doesn't support 3D rendering. Some visual elements may be limited.",
          variant: "destructive"
        });
      }
    } catch (e) {
      setHasError(true);
      setSupportsWebGL(false);
      console.error("WebGL detection failed:", e);
    }
    
    // Set loading to false after a minimum time to prevent flashing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Fixed type error by creating a proper error handler function
  const handleCanvasError = (error: any) => {
    console.error("Three.js rendering failed:", error);
    setHasError(true);
  };

  if (!supportsWebGL || hasError) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-[400px] rounded-xl overflow-hidden"
      >
        <StaticFallback />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-[400px] rounded-xl overflow-hidden backdrop-blur-sm bg-[#121218]/50 border border-white/10"
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4 mx-auto"></div>
            <p className="gradient-text">Loading 3D scene...</p>
          </div>
        </div>
      ) : (
        <Suspense fallback={
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4 mx-auto"></div>
              <p className="gradient-text">Loading 3D scene...</p>
            </div>
          </div>
        }>
          <ErrorBoundary fallback={<StaticFallback />}>
            <Canvas 
              dpr={[1, 2]} 
              shadows
              gl={{ 
                alpha: true,
                antialias: true,
                powerPreference: 'high-performance',
                failIfMajorPerformanceCaveat: false
              }}
              onCreated={({ gl }) => {
                gl.setClearColor('#121218');
              }}
              onError={handleCanvasError}
            >
              <Scene />
            </Canvas>
          </ErrorBoundary>
        </Suspense>
      )}
    </motion.div>
  );
};

export default Advanced3DScene;
