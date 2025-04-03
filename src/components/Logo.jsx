import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/images/logo.png"
        alt="Wonders.Travel - Your gateway to extraordinary destinations"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Logo; 