import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaSpinner } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`border-b ${isDarkMode ? 'border-[#F7C948]/10' : 'border-gray-300'}`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <h3 className={`text-lg font-medium pr-8 ${
          isDarkMode ? 'text-[#FFF8E7]' : 'text-gray-800'
        } group-hover:text-[#F7C948] transition-colors duration-300`}>{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`${
            isDarkMode 
              ? 'text-[#F7C948]' 
              : 'text-[#0F1C2D] bg-[#FFD700] p-1.5 rounded-full'
          } transition-colors duration-300`}
        >
          <FaChevronDown className={`${isDarkMode ? 'w-4 h-4' : 'w-3 h-3'}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className={`pb-6 leading-relaxed ${
              isDarkMode ? 'text-[#FFF8E7]/80' : 'text-gray-700'
            }`}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ContactForm = () => {
  const { isDarkMode } = useTheme();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically send the form data to your backend
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder="NAME"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          required
          className={`w-full px-6 py-4 rounded-full focus:outline-none transition-colors ${
            isDarkMode 
              ? 'bg-[#0F1C2D]/30 border border-[#F7C948]/10 text-[#FFF8E7] placeholder-[#FFF8E7]/50 focus:border-[#F7C948]/30' 
              : 'bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:border-[#F7C948] shadow-sm'
          }`}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <input
          type="email"
          placeholder="EMAIL"
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          required
          className={`w-full px-6 py-4 rounded-full focus:outline-none transition-colors ${
            isDarkMode 
              ? 'bg-[#0F1C2D]/30 border border-[#F7C948]/10 text-[#FFF8E7] placeholder-[#FFF8E7]/50 focus:border-[#F7C948]/30' 
              : 'bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:border-[#F7C948] shadow-sm'
          }`}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <textarea
          placeholder="MESSAGE"
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          required
          rows={6}
          className={`w-full px-6 py-4 rounded-3xl focus:outline-none transition-colors resize-none ${
            isDarkMode 
              ? 'bg-[#0F1C2D]/30 border border-[#F7C948]/10 text-[#FFF8E7] placeholder-[#FFF8E7]/50 focus:border-[#F7C948]/30' 
              : 'bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:border-[#F7C948] shadow-sm'
          }`}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-12 py-3 rounded-full font-medium transition-all duration-300 
            ${isDarkMode 
              ? 'bg-[#F7C948] text-[#0F1C2D]' 
              : 'bg-[#0F1C2D] text-white hover:bg-[#0F1C2D]/90'
            } 
            hover:transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2`}
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin" />
              Sending...
            </>
          ) : (
            'SUBMIT'
          )}
        </button>
      </motion.div>
    </form>
  );
};

const FAQ = () => {
  const { isDarkMode } = useTheme();
  const faqs = [
    {
      question: "What is included in the fee?",
      answer: "The fee includes accommodation, at least two meals a day, and activities and transport during the whole trip. Flights are not included in the fee, you should book your flight at your best convenience to the destination."
    },
    {
      question: "Should I pay a deposit?",
      answer: "We will not ask you for a deposit; however, once you are selected you will have 7 days grace period to pay the fee."
    },
    {
      question: "How many people will I travel with?",
      answer: "Normally this depends on our destination, but our cohorts are between 10 to 15 people."
    },
    {
      question: "Do I need insurance?",
      answer: "Insurance is a must when traveling with us. This should be covered by you, although we will provide you with some alternatives. IMPORTANT to keep in mind that you need a passport with at least 6 months of validity in advance for most of our trips, and this should be stated as well in the insurance."
    },
    {
      question: "What happens if the event gets cancelled?",
      answer: "This normally is unlikely to happen but it might be due to external reasons that we cannot control (e.g. COVID). In this scenario, we will try to find an alternative or send you the money back."
    },
    {
      question: "Do I need any vaccine?",
      answer: "It will depend on your vaccination card. It is recommended to visit your doctor and consult with them about your particular case. Either way, although most likely there should be no issue, it is important to always bear in mind that it is best to be preventive."
    },
    {
      question: "Will a WhatsApp group be created for all the participants?",
      answer: "Yes, once the first participants are confirmed we will proceed to create a group communication channel (like WhatsApp)."
    }
  ];

  return (
    <section className={`py-24 px-4 ${isDarkMode ? 'bg-[#0F1C2D]' : 'bg-gray-100'} transition-colors duration-300`} id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-sm uppercase tracking-wider mb-4 ${
            isDarkMode ? 'text-[#F7C948]' : 'text-[#F7C948] font-bold'
          }`}>
            WANNA KNOW MORE?
          </h2>
          <h3 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-[#FFF8E7]' : 'text-gray-900'
          }`}>
            Frequently Asked Questions
          </h3>
          <p className={`max-w-2xl mx-auto text-lg ${
            isDarkMode ? 'text-[#FFF8E7]/80' : 'text-gray-700'
          }`}>
            Find answers to common questions about our travel experiences
          </p>
        </motion.div>

        <div className="mb-20">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h4 className="text-2xl font-bold text-[#F7C948] mb-4">
            Still have questions?
          </h4>
          <p className="text-[#FFF8E7]/80">
            Fill out the form below and we will keep you posted!
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </section>
  );
};

export default FAQ; 