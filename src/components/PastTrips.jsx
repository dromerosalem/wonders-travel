import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaStar, FaClock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config/constants';
import { useTheme } from '../context/ThemeContext';

const TripHighlight = ({ icon: Icon, label }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="text-[#FFD700] text-sm" />
      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {label}
      </span>
    </div>
  );
};

const Button = ({ href, variant = 'primary', children }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-11 flex-1 items-center justify-center rounded-lg text-base font-medium transition-all duration-300 ${
        variant === 'primary'
          ? 'bg-[#FFD700] text-[#0F1C2D] hover:bg-[#FFD700]/90'
          : isDarkMode 
            ? 'border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10'
            : 'border border-[#0F1C2D] text-[#0F1C2D] hover:bg-[#0F1C2D]/5'
      } hover:shadow-lg`}
    >
      {children}
    </a>
  );
};

const TripLabel = ({ type }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
      isDarkMode 
        ? 'bg-[#FFD700]/10 text-[#FFD700]'
        : 'bg-[#0F1C2D]/10 text-[#0F1C2D]'
    }`}>
      {type}
    </span>
  );
};

const PastTripCard = ({ trip }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative overflow-hidden rounded-xl ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900/80 to-gray-900/60' 
          : 'bg-white shadow-lg border border-gray-200'
      } backdrop-blur-sm transition-colors duration-300`}
    >
      <div className="absolute right-4 top-4 z-10">
        <div className="rounded-full bg-[#FFD700]/90 px-3 py-1 text-xs font-medium text-gray-900">
          COMPLETED
        </div>
      </div>
      <div className="relative h-48 overflow-hidden">
        <img
          src={trip.image}
          alt={trip.title}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#FFD700]" />
              <span className="text-sm text-white">{trip.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#FFD700]" />
              <span className="text-sm text-white">{trip.date}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className={`text-xl font-bold transition-colors duration-300 ${
            isDarkMode 
              ? 'text-white group-hover:text-[#FFD700]' 
              : 'text-gray-800 group-hover:text-[#FFD700]'
          }`}>
            {trip.title}
          </h3>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {trip.subtitle}
          </p>
          
          <div className="mt-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <TripHighlight icon={FaClock} label={trip.duration} />
              <TripHighlight icon={FaUsers} label={trip.groupSize} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <FaStar className="text-[#FFD700] text-sm" />
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {trip.rating}
                </span>
              </div>
              <TripLabel type={trip.category} />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button href={trip.website}>Trip Details</Button>
          {trip.video && (
            <Button href={trip.video} variant="secondary">
              Watch Aftermovie
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const PastTrips = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleViewUpcomingTrips = () => {
    navigate('/');
    
    setTimeout(() => {
      const destinationsSection = document.getElementById('destinations');
      if (destinationsSection) {
        const headerOffset = 80;
        const elementPosition = destinationsSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const trips = [
    {
      title: 'Oktoberfest 2024',
      subtitle: 'Munich, Germany',
      date: 'September 21-28, 2024',
      location: 'Munich, Germany',
      website: 'https://wonders.travel/oktoberfest-2024',
      image: `${BASE_URL}/images/oktoberfest.jpg`,
      duration: '7 Days',
      groupSize: '20 People',
      rating: '4.9/5.0',
      category: 'Festival'
    },
    {
      title: 'AL-ÁNDALUS 2023',
      subtitle: 'BACK TO THE ORIGINS: Discovering the Sahara Desert',
      date: 'May 27 - June 3, 2023',
      location: 'Sahara Desert, Morocco',
      website: 'https://morocco.wonders.travel/',
      video: 'https://youtu.be/WHEYeKasvEM',
      image: `${BASE_URL}/images/morocco.jpg`,
      duration: '8 Days',
      groupSize: '15 People',
      rating: '4.8/5.0',
      category: 'Adventure'
    },
    {
      title: 'Pirates of the Caribbean 2022',
      subtitle: 'Cuba Adventure',
      date: 'December 15-22, 2022',
      location: 'Havana, Cuba',
      website: 'https://wonders.travel/cuba-2022',
      video: 'https://youtu.be/4QsseYevX3k',
      image: `${BASE_URL}/images/cuba.jpg`,
      duration: '8 Days',
      groupSize: '18 People',
      rating: '4.9/5.0',
      category: 'Cultural'
    }
  ];

  return (
    <section className={`min-h-screen flex items-center ${
      isDarkMode 
        ? 'bg-gradient-to-b from-gray-900 to-black' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    } py-20 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className={`mb-4 text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Past Adventures
          </h2>
          <div className="mx-auto h-1 w-24 bg-[#FFD700]" />
          <p className={`mt-6 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Relive our past adventures and get inspired for your next journey
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {trips.map((trip, index) => (
            <PastTripCard key={index} trip={trip} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <button
            onClick={handleViewUpcomingTrips}
            className="inline-block bg-[#FFD700] text-[#0F1C2D] px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#FFD700]/90 hover:shadow-lg"
          >
            View Upcoming Trips
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PastTrips; 