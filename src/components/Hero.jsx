import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../config/constants';
import { useTheme } from '../context/ThemeContext';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const [bgLoaded, setBgLoaded] = useState(false);
  
  // Preload both images
  useEffect(() => {
    const darkImage = new Image();
    const lightImage = new Image();
    darkImage.src = `${BASE_URL}/images/hero-bg.png`;
    lightImage.src = `${BASE_URL}/images/hero-bg-light.png`;
    
    Promise.all([
      new Promise(resolve => darkImage.onload = resolve),
      new Promise(resolve => lightImage.onload = resolve)
    ]).then(() => setBgLoaded(true));
  }, []);

  const scrollToMethod = () => {
    const methodSection = document.getElementById('method');
    if (methodSection) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = methodSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        {/* Base Layer (Dark Image) */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${BASE_URL}/images/hero-bg.png)`,
          }}
        />

        {/* Light Image Layer with Opacity Transition */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[1200ms]"
          style={{ 
            backgroundImage: `url(${BASE_URL}/images/hero-bg-light.png)`,
            opacity: isDarkMode ? 0 : 1,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />

        {/* Brightness Overlay */}
        <div 
          className="absolute inset-0 transition-all duration-[1200ms] mix-blend-soft-light"
          style={{ 
            backgroundColor: '#FFFFFF',
            opacity: isDarkMode ? 0 : 0.3,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />

        {/* Color Temperature Overlay */}
        <div 
          className="absolute inset-0 transition-all duration-[1200ms]"
          style={{ 
            background: isDarkMode 
              ? 'linear-gradient(to bottom, rgba(15, 28, 45, 0.5), rgba(15, 28, 45, 0.5))'
              : 'linear-gradient(to bottom, rgba(255, 225, 125, 0.1), rgba(255, 225, 125, 0.1))',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />

        {/* Time of Day Light Effect */}
        <div 
          className="absolute inset-0 transition-all duration-[1200ms]"
          style={{ 
            background: isDarkMode
              ? 'radial-gradient(circle at 50% 50%, rgba(15, 28, 45, 0), rgba(15, 28, 45, 0.8))'
              : 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))',
            opacity: isDarkMode ? 1 : 0,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      </div>

      {/* Content with enhanced transitions */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img 
            src={`${BASE_URL}/images/logo.png`}
            alt="Wonders.Travel Logo"
            className="w-72 h-72 mx-auto"
          />
        </div>

        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
          isDarkMode
            ? 'text-white'
            : 'text-[#0F1C2D]'
        } transition-colors duration-300`}>
          Adventures that tie<br />bonds for life
        </h1>
        
        <p className={`text-xl md:text-2xl mb-8 ${
          isDarkMode
            ? 'text-gray-200'
            : 'text-[#1A2B3D]'
        } transition-colors duration-300`}>
          Travel the Wonders of the World with a pre-selected like-minded<br />
          small group of people just like you
        </p>

        <button
          onClick={scrollToMethod}
          className="bg-[#FFD700] text-[#0F1C2D] px-8 py-3 rounded-lg font-medium 
            transition-all duration-300 hover:bg-[#FFD700]/90 hover:shadow-lg"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero; 