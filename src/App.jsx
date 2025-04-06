import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PastTrips from './components/PastTrips';
import FAQ from './components/FAQ';
import Terms from './components/Terms';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import { BASE_URL } from './config/constants';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (    
      <ThemeProvider>
        <Router>
          <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/past-trips" element={<PastTrips />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
              </Routes>
            </main>
            <Footer />
            <SpeedInsights />
            <Analytics /> 
          </div>
        </Router>
      </ThemeProvider>
  );
};

export default App; 