import "./WorkCardStyles.css";
import React from 'react'

import WorkCard from "./WorkCard";
import WorkCardData from "./workCardData";

const Work = () => {
  return (
    <div className="work-container">
      <div className="project-container">
        {WorkCardData.map((val,ind) =>{
            return(
                <WorkCard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                video={val.video}
                source={val.source}
                live={val.live}
                />
            )
        })}
      </div>
    </div>
  )
}

export default Work
