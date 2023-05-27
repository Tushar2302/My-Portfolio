import "./aboutContent.css";
import React from 'react'
import { Link } from "react-router-dom";
import developerimg1 from "../Assets/aboutimg1.jpeg"
import developerimg2 from "../Assets/img1.jpeg"
import resume from "../Assets/resume2.pdf"

const AboutContent = () => {
  return (
    <div className="empty">
      <div className="about">
        <div className="left">
          <h1 className="heading"> Who Am I?</h1>
          <p>
            I am a BTech student from Ragiv Gandhi Institute of Technology,Mumbai.
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
              <img src={developerimg2}
                className="img" alt="true"></img>
            </div>
            <div className="img-stack bottom">
              <img src={developerimg1}
                className="img" alt="true"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
