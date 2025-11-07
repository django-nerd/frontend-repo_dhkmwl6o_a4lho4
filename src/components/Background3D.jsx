import React from 'react';
import Spline from '@splinetool/react-spline';

// Generic background wrapper for 3D scenes
// Note: Replace scene URLs with your preferred pet-themed Spline scenes.
const Background3D = ({ scene }) => {
  return (
    <div className="absolute inset-0">
      <Spline scene={scene} style={{ width: '100%', height: '100%' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />
    </div>
  );
};

export default Background3D;
