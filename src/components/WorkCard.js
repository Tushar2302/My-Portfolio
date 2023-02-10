import "./WorkCardStyles.css";
import React from 'react'
import pro1 from "../Assets/amazon_homepage.png"
import { Link, NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image"/>
    
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
      <p>{props.text}</p>
      </div>  
      <div className="pro-btns">
        <a href={props.video} classsName="btn">
          <button className="one-btn">Video</button>
        </a>

      <a href={props.source} classsName="btn">
        <button className="one-btn">SourceCode</button>
      </a>
    </div>
    <a href={props.live} >
    <h3 className="live-link">{props.live}</h3>
    </a>
    </div>
  
  )
}

export default WorkCard
