import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/pricingCard';
import Work from '../components/work';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS." text="Some of My Most Recent Work"/>
      <Work/>
      <PricingCard/>
      <Footer/>
      
    </div>
  );
};

export default Project
