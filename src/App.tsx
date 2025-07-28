import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Protocols from './components/Protocols';
import AgricultureIoT from './components/AgricultureIoT';
import WeatherWaterQuality from './components/WeatherWaterQuality';
import SensorPlacementDemo from './components/SensorPlacementDemo';
import AIOptimization from './components/AIOptimization';
import InteractiveDemo from './components/InteractiveDemo';
import Testimonials from './components/Testimonials';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <Features />
      <Protocols />
      <AgricultureIoT />
      <WeatherWaterQuality />
      <SensorPlacementDemo />
      <AIOptimization />
      <InteractiveDemo />
      <Testimonials />
      <Comparison />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;