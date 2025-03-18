
import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="flex items-end h-8 gap-[2px]">
      <div className="equalizer-bar h-4 animate-wave1"></div>
      <div className="equalizer-bar h-2 animate-wave2"></div>
      <div className="equalizer-bar h-6 animate-wave3"></div>
      <div className="equalizer-bar h-3 animate-wave4"></div>
      <div className="equalizer-bar h-5 animate-wave5"></div>
    </div>
  );
};

export default AnimatedLogo;
