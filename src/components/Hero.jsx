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
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div 
          className={`w-64 sm:w-80 mx-auto mb-12 transition-all duration-[1200ms] ${
            isDarkMode ? 'opacity-100' : 'opacity-90'
          }`}
        >
          <img
            src={`${BASE_URL}/images/logo.png`}
            alt="Wonders.Travel - Your gateway to extraordinary destinations"
            className="w-full h-auto"
          />
        </div>
        
        <h1 
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-6 transition-all duration-[1200ms] ${
            isDarkMode ? 'text-[#FFF8E7]' : 'text-white'
          }`}
        >
          Adventures that tie bonds for life
        </h1>
        
        <p 
          className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto transition-all duration-[1200ms] ${
            isDarkMode ? 'text-[#FFF8E7]/90' : 'text-white/90'
          }`}
        >
          Travel the Wonders of the World with a pre-selected like-minded small group of people just like you
        </p>

        <button
          onClick={scrollToMethod}
          className={`px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 
            ${isDarkMode 
              ? 'bg-[#FFD700] text-[#0F1C2D] hover:bg-[#FFD700]/90' 
              : 'bg-[#FFD700] text-[#0F1C2D] hover:bg-[#FFD700]/90'
            } hover:shadow-lg`}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero; 