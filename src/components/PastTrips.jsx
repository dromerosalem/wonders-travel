import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaStar, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../config/constants';

const TripHighlight = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-1.5">
    <Icon className="text-[#FFD700] text-sm" />
    <span className="text-sm text-gray-300">{label}</span>
  </div>
);

const Button = ({ href, variant = 'primary', children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex h-11 flex-1 items-center justify-center rounded-lg text-base font-medium transition-all duration-300 ${
      variant === 'primary'
        ? 'bg-[#FFD700] text-gray-900 hover:bg-[#FFD700]/90'
        : 'border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10'
    } hover:shadow-lg hover:shadow-[#FFD700]/20`}
  >
    {children}
  </a>
);

const PastTripCard = ({ trip }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-sm"
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
        <h3 className="text-xl font-bold text-white group-hover:text-[#FFD700] transition-colors duration-300">
          {trip.title}
        </h3>
        <p className="text-gray-300">{trip.subtitle}</p>
        
        <div className="mt-4 grid grid-cols-2 gap-3">
          <TripHighlight icon={FaClock} label={trip.duration} />
          <TripHighlight icon={FaUsers} label={trip.groupSize} />
          <TripHighlight icon={FaStar} label={trip.rating} />
          {trip.category && (
            <div className="rounded-full border border-[#FFD700]/30 px-2 py-0.5 text-center text-xs text-[#FFD700]">
              {trip.category}
            </div>
          )}
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

const PastTrips = () => {
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
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white">Past Adventures</h2>
          <div className="mx-auto h-1 w-24 bg-[#FFD700]" />
          <p className="mt-6 text-lg text-gray-300">
            Relive our past adventures and get inspired for your next journey
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip, index) => (
            <PastTripCard key={index} trip={trip} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <Link
            to="/"
            onClick={() => {
              const destinationsSection = document.getElementById('destinations');
              if (destinationsSection) {
                destinationsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-block rounded-lg bg-[#FFD700] px-6 py-3 text-base font-medium text-gray-900 transition-all duration-300 hover:bg-[#FFD700]/90 hover:shadow-lg hover:shadow-[#FFD700]/20"
          >
            View Upcoming Trips
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PastTrips; 