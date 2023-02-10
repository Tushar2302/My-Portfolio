import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/Heroimg'
import Footer from '../components/Footer'
import Work from '../components/work'
import About from '../components/aboutContent'
import Form from '../components/form'
import { hover } from '@testing-library/user-event/dist/hover'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg />
      <div className='contact' style={{color: "aliceblue",textAlign: 'center',paddingTop:'3rem',fontWeight:'400',fontSize:'x-large',textDecoration:'solid'}}>About Me</div>
      <About/>
      <div className='contact' style={{color: "aliceblue",textAlign: 'center',paddingTop:'3rem',paddingBottom:'3rem',fontWeight:'400',fontSize:'x-large',textDecoration:'solid'}}>Projects</div>
      <Work/>
      <div className='contact' style={{color: "aliceblue",textAlign: 'center',paddingTop:'3rem',fontWeight:'400',fontSize:'x-large',textDecoration:'solid'}}>Lets Have a Chat</div>
      <Form/>
      <Footer />
    </div>
  )
}

export default Home
