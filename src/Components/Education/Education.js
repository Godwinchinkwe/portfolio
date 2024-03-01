import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';
import "./Education.css"
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Education = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className='educationside'>
      <br/>
      <h1 style={{color: darkMode?'#1949b8': ''}}className='edu'> Education</h1>
       {/* <br/> */}
      <VerticalTimeline lineColor='#fca61f'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "white", color:"#fca61f"}}
        icon={<BsPersonWorkspace/>}>
          <h3> My school high school, Abia state</h3>
          <p>High School Diploma </p>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
           <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "white", color:"#fca61f"}}
        icon={<MdSchool/>}>
          <h3> My school high school, Abia state</h3>
          <p>High School Diploma </p>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "white", color:"#fca61f"}}
        icon={<MdSchool/>}>
          <h3> My school high school, Abia state</h3>
          <p>High School Diploma </p>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
           <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "white", color:"#fca61f"}}
        icon={<MdSchool/>}>
          <h3> My school high school, Abia state</h3>
          <p>High School Diploma </p>
        </VerticalTimelineElement> */}

        {/* <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "white", color:"#fca61f"}}
        icon={<MdSchool/>}>
          <h3> My school high school, Abia state</h3>
          <p>High School Diploma </p>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  )
}

export default Education