import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';
import "../Experience/Experience.css"
const Education = () => {
  return (
    <div>
      <br/>
      <h1> Education</h1>
       <br/>
      <VerticalTimeline lineColor='green'>
        <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "grey", color:"green"}}
        icon={<BsPersonWorkspace/>}>
          <h3> My school high school, Abia state</h3>
          <p>High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "grey", color:"green"}}
        icon={<MdSchool/>}>
          <h3> My school high school, Abia state</h3>
          <p>High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "grey", color:"green"}}
        icon={<MdSchool/>}>
          <h3> My school high school, Abia state</h3>
          <p>High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "grey", color:"green"}}
        icon={<MdSchool/>}>
          <h3> My school high school, Abia state</h3>
          <p>High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education' date="2010 -2014"
        iconStyle={{background: "grey", color:"green"}}
        icon={<MdSchool/>}>
          <h3> My school high school, Abia state</h3>
          <p>High School Diploma </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Education
