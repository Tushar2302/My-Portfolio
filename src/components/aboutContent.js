import "./aboutContent.css";
import React from 'react'
import { Link } from "react-router-dom";
import developerimg1 from "../Assets/aboutimg1.jpeg"
import developerimg2 from "../Assets/aboutimage7.jpg"
import back from "../Assets/back2.jpg"
import resume from "../Assets/resumef.pdf"

const AboutContent = () => {
  return (
    <div className="empty">
      <h1 className="abouthead">About Me</h1>
     
      
      <div className="about">       
        <div className="left">
          <h1 className="heading"> Who Am I?</h1>
          <p1 className="headpara">
            A keen learner,
            </p1>
            <p1 className="headpara">
            a universe of atoms.
            </p1>
            <p1 className="headpara">
            atoms of curiosity.
            </p1>
          <p>
            I am a BTech student from Rajiv Gandhi Institute of Technology,Mumbai.
            I am dedicated,hardworking, and proactive coder with a strong background in Compitative Programming, Web Development,Java full stack Development and Team Management.

          </p>
          <div className="about-btns">
            <Link to="/contact"
              className="btn">Contact</Link>
            <a className="btn" href={resume} download="Resume"
            >Resume</a>


          </div>

        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={developerimg1}
                className="img" alt="true"></img>
            </div>
            <div className="img-stack bottom">
              <img src={developerimg2}
                className="img" alt="true"></img>
              </div>
          </div>
        </div>
      </div>
      <div className="skills">
      <h1>Skills</h1>
      <ol className="list">
        <li className="item">
          <h2>Front-End</h2>
          <span>HTML,CSS,ReactJS,NPM </span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>Java, Spring,MYSQL,MONGODB,NodeJS </span>
        </li>
        <li className="item">
          <h2>Languages</h2>
          <span>Java,Python ,C,C++, Basic Javascript </span>
        </li>
      </ol>
    </div>
    </div>
    
  )
}

export default AboutContent
