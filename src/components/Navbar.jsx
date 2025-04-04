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

  return (
    <>
      {/* Fixed position wrapper for mobile menu and overlay */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Overlay for mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 pointer-events-auto"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-background shadow-xl pointer-events-auto"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-6 border-b border-accent/10">
                  <Link to="/" className="flex items-center space-x-2">
                    <img 
                      src={`${BASE_URL}/images/wt-logo.png`}
                      alt="Wonders.Travel Logo" 
                      className="h-12 w-auto"
                    />
                    <span className="text-2xl font-bold text-accent">Wonders.Travel</span>
                  </Link>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 overflow-y-auto py-8 px-6">
                  <div className="space-y-6">
                    {menuItems.map((item) => (
                      <motion.button
                        key={item.path}
                        onClick={() => handleNavigation(item.path, item.type)}
                        className="w-full text-left text-xl font-medium text-text-secondary hover:text-accent transition-colors duration-200 py-2"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-accent/10">
                  <div className="flex items-center justify-between mb-4">
                    <ThemeToggle />
                    <motion.button
                      onClick={() => handleNavigation('#destinations', 'section')}
                      className="w-full ml-4 bg-accent text-background px-6 py-4 rounded-full hover:bg-accent/90 transition-all duration-200 flex items-center justify-center space-x-2 font-medium shadow-lg hover:shadow-accent/20"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Explore Destinations</span>
                      <FaArrowRight />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-accent text-background px-6 py-2 rounded-full hover:bg-accent/90 transition-all duration-200 font-medium shadow-lg hover:shadow-accent/20"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-accent hover:text-accent/80 focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 