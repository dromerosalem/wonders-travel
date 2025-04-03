import React from 'react';

const Button = ({ children, large = false, className = '' }) => {
  return (
    <button
      className={`
        bg-[#F7C948] 
        text-[#0F1C2D] 
        font-medium 
        rounded-full 
        hover:bg-[#F7C948]/90 
        transition-colors 
        duration-200
        ${large ? 'px-8 py-3 text-lg' : 'px-6 py-2 text-sm'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button; 