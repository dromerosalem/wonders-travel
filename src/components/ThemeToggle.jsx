import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        p-2 rounded-full transition-all duration-300 relative
        ${isDarkMode
          ? 'bg-[#FFD700]/10 hover:bg-[#FFD700]/20' // Dark mode unchanged
          : 'bg-black/50 hover:bg-black/60'  // Semi-transparent black background
        }
      `}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <FaMoon className="w-5 h-5 text-[#FFD700]" /> // Full opacity moon
      ) : (
        <FaSun className="w-5 h-5 text-[#FFD700]" /> // Full opacity sun
      )}
    </button>
  );
};

export default ThemeToggle; 