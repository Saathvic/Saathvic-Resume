
import React from 'react';

const StaticFallback: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center bg-[#121218]/90 rounded-xl">
    <div className="text-center p-6">
      <div className="mb-4 mx-auto w-24 h-24 rounded-full flex items-center justify-center bg-primary/20 border border-primary/30">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-primary"
        >
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.29 7 12 12 20.71 7"></polyline>
          <line x1="12" y1="22" x2="12" y2="12"></line>
        </svg>
      </div>
      <h3 className="text-xl font-bold mb-2 gradient-text">3D Technology</h3>
      <p className="text-white/70 max-w-xs mx-auto">
        Expertise in AR/VR and 3D immersive experiences for next-generation applications
      </p>
    </div>
  </div>
);

export default StaticFallback;
