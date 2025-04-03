import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-[#FFD700]/10 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <FaMoon className="w-5 h-5 text-[#FFD700]" />
      ) : (
        <FaSun className="w-5 h-5 text-[#FFD700]" />
      )}
    </button>
  );
};

export default ThemeToggle; 