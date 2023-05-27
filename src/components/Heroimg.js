import "./HeroimgStyles.css";
import React from 'react'
//import backImg from "../Assets/background-portf.jpg"
import { Link } from "react-router-dom";
import  {Typewriter}  from "react-simple-typewriter";
import myimg from "../Assets/aboutimg1.jpeg";
import resume from "../Assets/resume2.pdf"


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <div className="background-portf"/>
        </div>
      <div className="content">
        
      <div className="circle">
        <img src={myimg}
           className="circleimg" alt="true"/>
           <h1 className="myName" >Tushar Pawar</h1>
           </div>
        {/*<h1>
          
          <span style={{color: '#e0ffff'}}>
            <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
            words={['Full Stack Developer','Java Developer','React.Js Developer','Devops enthusiast']}
            />
          </span>
  </h1>
        */}
  <div className="brief">
    <p> A logical and Creative thinker,I love solving problems.
    </p>
    <p>
      Web and Java Developer.
    </p>
    <p>Devops enthusiast.</p>
  </div>
  <div className="home_buttons" style={{paddingTop:"35px"}}>
  <a className="btn" href={resume} download="Resume"
            >Resume</a>
            <Link to="/contact"
            className="btn btn-light">Contact</Link>
            
  </div>
      </div>
    </div>
  )
};

export default HeroImg
