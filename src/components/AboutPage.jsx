import React from 'react';
import About from './About';
import { useTheme } from '../context/ThemeContext';

const AboutPage = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`pt-20 ${isDarkMode ? 'bg-[#0F1C2D]' : 'bg-gray-50'} transition-colors duration-300`}>
      <About />    
    </div>
  );
};

export default AboutPage; 