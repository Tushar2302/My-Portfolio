import React from 'react'
import Experience from '../components/Experience';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutContent from '../components/aboutContent';
import Skills from '../components/Skills';
const About = () => {
  return (
    <div>
      <Navbar/>
      <AboutContent/>
      <Experience/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default About
