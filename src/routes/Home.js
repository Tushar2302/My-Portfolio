import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/Heroimg'
import Footer from '../components/Footer'

import { hover } from '@testing-library/user-event/dist/hover'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
      
      <Footer />
    </div>
  )
}

export default Home
