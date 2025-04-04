import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaClock, FaGlobe } from 'react-icons/fa';
import { BASE_URL } from '../config/constants';
import { useTheme } from '../context/ThemeContext';

const CountdownTimer = ({ targetDate }) => {
  const { isDarkMode } = useTheme();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HOURS' },
    { value: timeLeft.minutes, label: 'MIN' },
    { value: timeLeft.seconds, label: 'SEC' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4">
      {timeBlocks.map((block, index) => (
        <React.Fragment key={block.label}>
          <div className="text-center">
            <div className={`rounded-lg p-2 md:p-4 min-w-[60px] md:min-w-[80px] ${
              isDarkMode ? 'bg-[#1A2B3D]' : 'bg-white shadow-md border border-gray-200'
            }`}>
              <div className="text-2xl md:text-3xl font-bold text-[#FFD700]">
                {String(block.value).padStart(2, '0')}
              </div>
              <div className={`text-xs md:text-sm uppercase mt-1 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-700 font-medium'
              }`}>{block.label}</div>
            </div>
          </div>
          {index < timeBlocks.length - 1 && (
            <div className="text-[#FFD700] text-xl md:text-3xl font-bold self-start mt-4">:</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const TripHighlight = ({ icon: Icon, label, isDarkMode }) => (
  <div className="flex items-center gap-2">
    <Icon className="text-[#FFD700] w-4 h-4" />
    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{label}</span>
  </div>
);

const TripCard = ({ title, subtitle, date, image, status, link, duration, groupSize, location }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${
        isDarkMode 
          ? 'bg-gradient-to-br from-[#1A2B3D] to-[#0F1C2D]' 
          : 'bg-white'
      } rounded-lg overflow-hidden shadow-xl border ${
        isDarkMode ? 'border-[#FFD700]/10' : 'border-gray-200 hover:border-[#FFD700]/50'
      } transition-all duration-300 hover:shadow-2xl h-full`}
    >
      <div className="flex flex-col h-full">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={image} 
            alt={`${title} - ${subtitle}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
          <div className="absolute top-4 left-4 bg-[#FFD700] text-[#0F1C2D] px-4 py-1 rounded-full text-sm font-medium">
            {status}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-4 mb-4">
            <TripHighlight icon={FaMapMarkerAlt} label={location} />
            <TripHighlight icon={FaClock} label={duration} />
            <TripHighlight icon={FaUsers} label={groupSize} />
          </div>

          <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-[#FFD700]' : 'text-[#0F1C2D]'} mb-2`}>
            {title}
          </h2>
          <h3 className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            {subtitle}
          </h3>
          
          <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
            <FaCalendarAlt className="text-[#FFD700]" />
            <span>{new Date(date).toLocaleDateString('en-US', { 
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}</span>
          </div>

          <div className="mt-auto">
            <CountdownTimer targetDate={date} />
            
            <div className="mt-6">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#FFD700] text-[#0F1C2D] px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#FFD700]/90 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                <FaGlobe className="w-4 h-4" />
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Destinations = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <section className={`py-20 ${isDarkMode ? 'bg-[#0F1C2D]' : 'bg-gray-50'} transition-colors duration-300`} id="destinations">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Upcoming Adventures
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto"></div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg mt-6 max-w-2xl mx-auto`}>
            Join our exclusive group trips to the world's most fascinating destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TripCard
            title="MOROCCO 2025"
            subtitle="BACK TO THE ORIGINS (Vol. 2): Discovering the Sahara Desert"
            date="2025-05-17"
            image={`${BASE_URL}/images/morocco.jpg`}
            status="APPLICATIONS STARTING SOON!"
            link="https://morocco2025.wonders.travel/"
            duration="10 Days"
            groupSize="12-15 People"
            location="Sahara Desert, Morocco"
          />
          <TripCard
            title="EGYPT 2025"
            subtitle="JOURNEY TO THE ANCIENTS: Unveiling the Mysteries of the Nile"
            date="2025-12-05"
            image={`${BASE_URL}/images/egypt.jpg`}
            status="STAY TUNED!"
            link="https://egypt.wonders.travel/"
            duration="12 Days"
            groupSize="10-12 People"
            location="Cairo & Nile River, Egypt"
          />
        </div>
      </div>
    </section>
  );
};

export default Destinations; 