import React from 'react';
import { BASE_URL } from '../config/constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BASE_URL}/images/hero-bg.png)` }}
      >
        <div className="absolute inset-0 bg-[#0F1C2D]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="w-64 sm:w-80 mx-auto mb-12">
          <img
            src={`${BASE_URL}/images/logo.png`}
            alt="Wonders.Travel - Your gateway to extraordinary destinations"
            className="w-full h-auto"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFF8E7] tracking-wide mb-6">
          Adventures that tie bonds for life
        </h1>
        
        <p className="text-lg sm:text-xl text-[#FFF8E7]/90 mb-12 max-w-2xl mx-auto">
          Travel the Wonders of the World with a pre-selected like-minded small group of people just like you
        </p>

        <button className="bg-[#F7C948] text-[#0F1C2D] px-8 py-3 text-lg rounded-full font-medium hover:bg-[#F7C948]/90 transition-colors duration-200">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero; 