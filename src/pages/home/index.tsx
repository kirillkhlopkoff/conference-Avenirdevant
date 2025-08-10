import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TicketsSection from './components/TicketsSection';
import SocialSection from './components/SocialSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TicketsSection />
      <SocialSection />
    </>
  );
};

export default HomePage;
