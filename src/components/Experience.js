import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { FaCloudSun, FaSchool } from 'react-icons/fa';
import { FaGraduationCap,FaDesktop } from 'react-icons/fa';
import "./Experience.css";
const Experience = () => {
  return (
    
    <div className='experience'>
      <VerticalTimeline lineColor='white'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='June 2023- July 2023'
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<FaDesktop/>}
        >
            <h3 className='vertical-timeline-element--title'>
                Suven Consultants and Technology Pvt Ltd.
            </h3>
            <p className='para'>Devops Training and Internship.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='Feb 2023 - April 2023' color="blue"
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<FaDesktop/>}
        >
            <h3 className='vertical-timeline-element--title'>
                TCR Innovation.
            </h3>
            <p className='para'>Java and SQL Development Internship.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2020-2024'
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<FaGraduationCap/>}
        >
            <h3 className='vertical-timeline-element--title'>
                Rajiv Gandhi Institute of Technology,Mumbai.
            </h3>
            <p className='para'>Electronics and Communication with honors in AI-ML.</p>
            <p className='para'>CGPA till now-  8.86/10</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2018-2020'
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<FaSchool/>}
        >
            <h3 className='vertical-timeline-element--title'>
                Marol Education Academy, Mumbai-400059
            </h3>
            <p className='para'>12th Passed with  76.92%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2008-2018'
        iconStyle={{background:"#3e497a",color:"#fff"}}
        icon={<FaSchool/>}
        >
            <h3 className='vertical-timeline-element--title'>
                Indian Education Society,Mumbai
            </h3>
            <p className='para'> Passed 10th with 87%</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )

}
export default Experience
