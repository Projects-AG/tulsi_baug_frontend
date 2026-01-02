import React from 'react';
import HeroSection from '../component/HeroSection';
import BestSelling from '../component/BestSelling';
import OffsetPrinting from '../component/OffsetPrinting';
import Features from '../component/Features';
import Testimonial from '../component/Testimonial';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Best Selling Products Section */}
      <BestSelling />
      
      {/* Offset Printing Section */}
      <OffsetPrinting />
      
       {/* Testimonials Section */}
      <Testimonial />
      
      {/* Features Section */}
      <Features />
      
     
    </div>
  );
};

export default Home;
