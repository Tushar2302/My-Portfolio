import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/Heroimg'
import Footer from '../components/Footer'
import Work from '../components/work'
import Experience from '../components/Experience'
import About from '../components/aboutContent'
import Form from '../components/form'
import { hover } from '@testing-library/user-event/dist/hover'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
      <Experience/>
      <Footer />
    </div>
  )
}

export default Home
