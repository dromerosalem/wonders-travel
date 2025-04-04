import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaUsers, FaStar, FaHeart, FaShieldAlt, FaLaughBeam, FaCompass, FaFileAlt, FaCouch, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const MethodCard = ({ number, title, description, icon, isLast }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className={`${
        isDarkMode 
          ? 'bg-gradient-to-br from-[#1A2B3D] to-[#0F1C2D]' 
          : 'bg-white'
      } p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${
        isDarkMode ? 'border-[#FFD700]/10' : 'border-gray-200'
      }`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-[#FFD700] rounded-full flex items-center justify-center">
            <span className="text-[#0F1C2D] font-bold text-xl">{number}</span>
          </div>
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isDarkMode ? 'bg-[#FFD700]/10' : 'bg-[#FFD700]/5'
          }`}>
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-[#FFD700]">{title}</h3>
        </div>
        <p className={`text-lg leading-relaxed ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>{description}</p>
      </div>
      {!isLast && (
        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
          <FaArrowRight className="w-8 h-8 text-[#FFD700]" />
        </div>
      )}
    </motion.div>
  );
};

const About = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <>
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-[#0F1C2D]' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              About Wonders.travel
            </h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className={`${
                isDarkMode ? 'bg-[#1A2B3D]' : 'bg-white'
              } p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                isDarkMode ? 'border-[#FFD700]/10' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${
                    isDarkMode ? 'bg-[#FFD700]/10' : 'bg-[#FFD700]/5'
                  } rounded-full flex items-center justify-center`}>
                    <FaGlobe className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <h3 className={`text-2xl font-bold ${
                    isDarkMode ? 'text-[#FFD700]' : 'text-[#0F1C2D]'
                  }`}>
                    Our Uniqueness
                  </h3>
                </div>
                <p className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } text-lg leading-relaxed`}>
                  Wonders.travel is unique. Our values are professionalism, exclusivity, and fun.
                </p>
              </div>

              <div className={`${
                isDarkMode ? 'bg-[#1A2B3D]' : 'bg-white'
              } p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                isDarkMode ? 'border-[#FFD700]/10' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${
                    isDarkMode ? 'bg-[#FFD700]/10' : 'bg-[#FFD700]/5'
                  } rounded-full flex items-center justify-center`}>
                    <FaStar className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <h3 className={`text-2xl font-bold ${
                    isDarkMode ? 'text-[#FFD700]' : 'text-[#0F1C2D]'
                  }`}>
                    Our Mission
                  </h3>
                </div>
                <p className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } text-lg leading-relaxed`}>
                  Wonders.travel has the mission of organizing unique group trips, selecting travelers to offer unforgettable experiences.
                </p>
              </div>

              <div className={`${
                isDarkMode ? 'bg-[#1A2B3D]' : 'bg-white'
              } p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                isDarkMode ? 'border-[#FFD700]/10' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${
                    isDarkMode ? 'bg-[#FFD700]/10' : 'bg-[#FFD700]/5'
                  } rounded-full flex items-center justify-center`}>
                    <FaHeart className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <h3 className={`text-2xl font-bold ${
                    isDarkMode ? 'text-[#FFD700]' : 'text-[#0F1C2D]'
                  }`}>
                    Our Vision
                  </h3>
                </div>
                <p className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } text-lg leading-relaxed`}>
                  Our vision is to become the leading travel agency for group travel, specializing in the Wonders of the World.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Values and Unique Selling Points */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className={`${
                isDarkMode ? 'bg-[#1A2B3D]' : 'bg-white'
              } p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                isDarkMode ? 'border-[#FFD700]/10' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${
                    isDarkMode ? 'bg-[#FFD700]/10' : 'bg-[#FFD700]/5'
                  } rounded-full flex items-center justify-center`}>
                    <FaUsers className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <h3 className={`text-2xl font-bold ${
                    isDarkMode ? 'text-[#FFD700]' : 'text-[#0F1C2D]'
                  }`}>
                    Our Core Values
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className={`p-4 rounded-lg ${
                    isDarkMode 
                      ? 'bg-[#0F1C2D]' 
                      : 'bg-gray-50 border border-gray-200'
                  } transition-colors duration-300`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${
                        isDarkMode ? 'bg-[#FFD700]/10' : 'bg-[#FFD700]/5'
                      } rounded-full flex items-center justify-center`}>
                        <FaShieldAlt className={`w-6 h-6 ${isDarkMode ? 'text-[#FFD700]' : 'text-[#0F1C2D]'}`} />
                      </div>
                      <div>
                        <h4 className={`text-xl font-semibold ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>Professionalism</h4>
                        <p className={`${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>Excellence in every detail</p>
                      </div>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${
                    isDarkMode 
                      ? 'bg-[#0F1C2D]' 
                      : 'bg-gray-50 border border-gray-200'
                  } transition-colors duration-300`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${
                        isDarkMode ? 'bg-[#FFD700]/10' : 'bg-[#FFD700]/5'
                      } rounded-full flex items-center justify-center`}>
                        <FaStar className={`w-6 h-6 ${isDarkMode ? 'text-[#FFD700]' : 'text-[#0F1C2D]'}`} />
                      </div>
                      <div>
                        <h4 className={`text-xl font-semibold ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>Exclusivity</h4>
                        <p className={`${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>Unique experiences for select groups</p>
                      </div>
                    </div>
                  </div>
                  <div className={`p-4 rounded-lg ${
                    isDarkMode 
                      ? 'bg-[#0F1C2D]' 
                      : 'bg-gray-50 border border-gray-200'
                  } transition-colors duration-300`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${
                        isDarkMode ? 'bg-[#FFD700]/10' : 'bg-[#FFD700]/5'
                      } rounded-full flex items-center justify-center`}>
                        <FaLaughBeam className={`w-6 h-6 ${isDarkMode ? 'text-[#FFD700]' : 'text-[#0F1C2D]'}`} />
                      </div>
                      <div>
                        <h4 className={`text-xl font-semibold ${
                          isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>Fun</h4>
                        <p className={`${
                          isDarkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>Creating memorable moments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${
                isDarkMode ? 'bg-[#1A2B3D]' : 'bg-white'
              } p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                isDarkMode ? 'border-[#FFD700]/10' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${
                    isDarkMode ? 'bg-[#FFD700]/10' : 'bg-[#FFD700]/5'
                  } rounded-full flex items-center justify-center`}>
                    <FaGlobe className="w-6 h-6 text-[#FFD700]" />
                  </div>
                  <h3 className={`text-2xl font-bold ${
                    isDarkMode ? 'text-[#FFD700]' : 'text-[#0F1C2D]'
                  }`}>
                    Unique Experience
                  </h3>
                </div>
                <p className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } text-lg leading-relaxed`}>
                  At Wonders.travel we do not use to repeat trips, offering a once-in-a-lifetime experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Wonders.travel Method Section */}
      <section id="method" className={`py-20 ${isDarkMode ? 'bg-[#0F1C2D]' : 'bg-gray-50'} border-t ${isDarkMode ? 'border-[#1A2B3D]' : 'border-gray-200'} transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-[#0F1C2D]'
            }`}>
              The Wonders.travel Method
            </h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto"></div>
            <p className={`text-lg mt-6 max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Our three-step process ensures you're matched with the perfect group of like-minded travelers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <MethodCard
              number="1"
              title="Check where we go next"
              description="We bring together those travellers who share our passion for adventure and exploration"
              icon={<FaCompass className="w-6 h-6 text-[#FFD700]" />}
            />
            <MethodCard
              number="2"
              title="Fill out the application form"
              description="We're looking for like-minded people who are passionate about travelling and love to explore the world"
              icon={<FaFileAlt className="w-6 h-6 text-[#FFD700]" />}
            />
            <MethodCard
              number="3"
              title="Sit, enjoy, and relax"
              description="We will review all the applications and let you know as soon as possible so you can book your flight and join us"
              icon={<FaCouch className="w-6 h-6 text-[#FFD700]" />}
              isLast={true}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="#destinations"
              className="inline-block bg-[#FFD700] text-[#0F1C2D] px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-[#FFD700]/90 hover:transform hover:scale-105 hover:shadow-lg"
            >
              View Upcoming Trips
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About; 