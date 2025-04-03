import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaStar } from 'react-icons/fa';

const SocialLink = ({ icon: Icon, label, href, color }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 px-6 py-4 rounded-xl bg-[#0F1C2D]/30 border border-[#F7C948]/10 
        hover:border-[#F7C948]/30 transition-all duration-300 group backdrop-blur-sm`}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className={`text-2xl ${color}`}>
        <Icon />
      </div>
      <div className="text-left">
        <p className="text-[#FFF8E7] font-medium">{label}</p>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  return (
    <section className="py-24 px-4 bg-[#0F1C2D]" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-wider text-[#F7C948] mb-4">
            FIND US
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#FFF8E7] mb-6">
            WE ARE HERE
          </h3>
          <p className="text-[#FFF8E7]/80 max-w-2xl mx-auto text-lg mb-12">
            Send us an e-mail or DM us on Instagram to answer any questions you might have
          </p>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16 max-w-2xl mx-auto">
          <SocialLink
            icon={FaWhatsapp}
            label="Chat on WhatsApp"
            href="https://wa.me/34665252386"
            color="text-green-400"
          />
          <SocialLink
            icon={FaInstagram}
            label="Follow on Instagram"
            href="https://www.instagram.com/wonders.travel.ig/"
            color="text-pink-500"
          />
          <SocialLink
            icon={FaEnvelope}
            label="info@wonders.travel"
            href="mailto:info@wonders.travel"
            color="text-[#F7C948]"
          />
          <SocialLink
            icon={FaStar}
            label="Read our reviews on Trustpilot"
            href="https://uk.trustpilot.com/review/wonders.travel"
            color="text-[#00b67a]"
          />
        </div>

        {/* Podcast Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-[#F7C948] mb-4">
              Listen to Our Podcast
            </h4>
            <p className="text-[#FFF8E7]/80">
              Discover travel stories, tips, and insights from our adventures
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl border border-[#F7C948]/10">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/show/35oSc6bn1GSVujYb3WyRGF?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Wonders.Travel Podcast"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 