import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HighlightedProject from '../components/HighlightedProject';
import Navbar from '../components/Navbar';
import VideoProjectsForUniversity from '../components/VideoProjectsForUniversity';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HighlightedProject />
      <VideoProjectsForUniversity />
      <Footer />
    </div>
  );
};

export default Home;