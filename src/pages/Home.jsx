import React from 'react';
import Header from '../components/Header';
import Hero from '../sections/Hero';
import Platform from '../sections/Platform';
import CTASection from '../sections/CTASection';
import FAQ from '../sections/FAQ';
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
      <Header /> 
      <main>
        <Hero />
        <Platform />
        <CTASection />
        <FAQ /> 
      </main>
       <Footer /> 
    </div>
  );
};

export default Home;
