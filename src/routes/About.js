import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutContent from '../components/aboutContent';
import Skills from '../components/Skills';
const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutContent/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default About
