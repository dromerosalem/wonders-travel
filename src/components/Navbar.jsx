import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import { BASE_URL } from '../config/constants';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  // Menu items with their types (section or page)
  const menuItems = [
    { path: '/', label: 'Home', type: 'page' },
    { path: '#destinations', label: 'Destinations', type: 'section' },
    { path: '/about', label: 'About', type: 'page' },
    { path: '/past-trips', label: 'Past Trips', type: 'page' },
    { path: '/faq', label: 'FAQ', type: 'page' },
    { path: '#contact', label: 'Contact', type: 'section' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavigation = (path, type) => {
    if (type === 'section') {
      // For sections, first navigate to home if not there
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.querySelector(path);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        // If already on home page, just scroll with a small delay
        // This ensures the scroll works even with the mobile menu animation
        setTimeout(() => {
          const element = document.querySelector(path);
          if (element) {
            const headerOffset = 80; // Height of the fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 10);
      }
    } else {
      // For pages, use regular navigation
      navigate(path);
    }
    setIsOpen(false);
  };

  const handleDestinationsClick = () => {
    // First close the mobile menu
    setIsOpen(false);

    // Small delay to ensure menu closing animation completes
    setTimeout(() => {
      // Find the destinations section
      const destinationsSection = document.getElementById('destinations');
      if (destinationsSection) {
        const headerOffset = 80;
        const elementPosition = destinationsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        // If we're not on the home page, navigate to home page with destinations hash
        window.location.href = '/#destinations';
      }
    }, 300); // Adjust timing based on your menu transition duration
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isDarkMode ? 'bg-[#0F1C2D]' : 'bg-white'
    }`}>
      {/* Desktop Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={`${BASE_URL}/images/wt-logo.png`}
              alt="Wonders.Travel Logo" 
              className="h-12 w-auto"
            />
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled
                ? 'text-accent' // When scrolled, always gold
                : isDarkMode
                  ? 'text-accent' // When not scrolled and dark mode, gold
                  : 'text-[#0F1C2D]' // When not scrolled and light mode, dark blue
            }`}>
              Wonders.Travel
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path, item.type)}
                className="text-base font-medium text-text-secondary hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <button
              onClick={() => handleNavigation('#destinations', 'section')}
              className="bg-[#FFD700] text-[#0F1C2D] px-8 py-3 rounded-lg hover:bg-[#FFD700]/90 transition-all duration-300 font-medium hover:shadow-lg"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode 
                  ? 'hover:bg-[#1A2B3D] text-[#FFD700]' 
                  : 'hover:bg-gray-100 text-[#0F1C2D]'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`
        fixed top-0 right-0 bottom-0 w-[280px] transition-transform duration-300 ease-in-out transform lg:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        ${isDarkMode ? 'bg-[#0F1C2D]' : 'bg-white'}
        shadow-xl
      `}>
        {/* Mobile Menu Header */}
        <div className={`flex items-center justify-between p-4 border-b ${
          isDarkMode ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex items-center gap-2">
            <img 
              src={`${BASE_URL}/images/wt-logo.png`}
              alt="Wonders.Travel Logo" 
              className="h-8 w-8 object-contain"
            />
            <span className={`text-lg font-bold ${
              isDarkMode ? 'text-[#FFD700]' : 'text-[#0F1C2D]'
            }`}>
              Wonders.Travel
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'text-[#FFD700] hover:bg-[#1A2B3D]' 
                : 'text-[#0F1C2D] hover:bg-gray-100'
            }`}
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-[calc(100%-72px)]">
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors ${
                    isDarkMode 
                      ? 'text-gray-200 hover:bg-[#1A2B3D] hover:text-[#FFD700]' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-[#0F1C2D]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className={`p-4 border-t ${
            isDarkMode ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <button
              onClick={handleDestinationsClick}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium bg-[#FFD700] text-[#0F1C2D] hover:bg-[#FFD700]/90 transition-all duration-300 w-full"
            >
              <span>Explore Destinations</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 