import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaStar } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors duration-300`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-[#FFD700]">
              Wonders.Travel
            </Link>
            <p className={`mt-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Join us on extraordinary adventures around the world. Experience unique cultures,
              create unforgettable memories, and discover the wonders of our planet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`mb-4 text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className={`${isDarkMode ? 'hover:text-[#FFD700]' : 'text-gray-600 hover:text-[#FFD700]'}`}>Home</Link>
              </li>
              <li>
                <Link to="/past-trips" className={`${isDarkMode ? 'hover:text-[#FFD700]' : 'text-gray-600 hover:text-[#FFD700]'}`}>Past Trips</Link>
              </li>
              <li>
                <Link to="/faq" className={`${isDarkMode ? 'hover:text-[#FFD700]' : 'text-gray-600 hover:text-[#FFD700]'}`}>FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className={`mb-4 text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className={`${isDarkMode ? 'hover:text-[#FFD700]' : 'text-gray-600 hover:text-[#FFD700]'}`}>Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy" className={`${isDarkMode ? 'hover:text-[#FFD700]' : 'text-gray-600 hover:text-[#FFD700]'}`}>Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies" className={`${isDarkMode ? 'hover:text-[#FFD700]' : 'text-gray-600 hover:text-[#FFD700]'}`}>Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className={`mt-8 flex flex-col items-center border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} pt-8`}>
          <div className="mb-4 flex space-x-6">
            <a
              href="https://www.instagram.com/wonders.travel.ig/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-[#FFD700]`}
              aria-label="Follow us on Instagram"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.youtube.com/@Wonders.Travel.Aftermovies"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-[#FFD700]`}
              aria-label="Subscribe to our YouTube channel"
            >
              <FaYoutube className="h-6 w-6" />
            </a>
            <a
              href="https://uk.trustpilot.com/review/wonders.travel"
              target="_blank"
              rel="noopener noreferrer"
              className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-[#FFD700]`}
              aria-label="Read our reviews on Trustpilot"
            >
              <FaStar className="h-6 w-6" />
            </a>
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © {currentYear} Wonders.Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 