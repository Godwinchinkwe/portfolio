import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';
import "./Experience.css"

const Experience = () => {
  return (
    <div className='experience'>
      <h1> My Experience </h1> <br/>
      <VerticalTimeline lineColor='red'>
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

export default Experience
