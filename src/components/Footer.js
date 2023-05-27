import "./FooterStyles.css"

import React from 'react'
import { FaGithub, FaHome,FaLinkedin,FaMailBulk, FaTwitter} from "react-icons/fa"
import { URL } from "react-router-dom"
import leetcode from "../Assets/litcode.png"


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={
                    {color:"#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Marol,Mumbai-400059.</p>
                        <p>India.</p>
                    </div>
            </div>
            <div className="email">
                <h4>
                <FaMailBulk size={20} style={
                {color:"#fff", marginRight: "2rem"}} />
                tushar123789pawar@gmail.com
                </h4>
            
            </div>
        </div>
        <div className="right"  >
            <h4>Social Links:</h4>
            <p>
                Let's Connect.
            </p>
            <div className="social">
              <a href="https://www.linkedin.com/in/thetusharpawar/">
            <FaLinkedin 
                size={30} style={
                {color:"#fff", 
                marginRight: "1rem"}} />
                </a>
                <a href="https://github.com/Tushar2302">
                <FaGithub 
                size={30} style={
                {color:"#fff", 
                marginRight: "1rem"}} />
                </a>
              <a className="leetcode" href="https://leetcode.com/Tushar91625/" size={30} style={
                {color:"#fff",marginRight:"1rem"}
              }>
                <img src={leetcode} className="leeimg" alt="true"/>
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
