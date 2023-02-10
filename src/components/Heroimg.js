import "./HeroimgStyles.css";
import React from 'react'
//import backImg from "../Assets/background-portf.jpg"
import { Link } from "react-router-dom";
import  {Typewriter}  from "react-simple-typewriter";



const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <div className="background-portf"/>
        </div>
      <div className="content">
        <p>HI, I'M A SOFTWARE Enthusiast.</p>

        <h1>
          
          <span style={{color: '#e0ffff'}}>
            <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['Full Stack Developer','Java Developer','React.Js Developer','Devops enthusiast']}
            />
          </span>
          </h1>
        <div>
            <Link to="/project"
            className="btn">Projects</Link>
            <Link to="/contact"
            className="btn btn-light">Contact</Link>
            
        </div>
      </div>
    </div>
  )
};

export default HeroImg
