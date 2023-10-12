import React from 'react'
import './Skills.css'
import Skillcard from './skillcard'
import js from "../../Img/js.jpg"

function Skills({props}) {
  return (
    <div class="skill_main">
      <div class="skill_wrap">
        <h1> Skills</h1> <br/>
        <p> Here are Some of my skills on which i have been working on for the past 2 years</p> <br/>
        <section class="skill_section">
          <Skillcard
          title="Frontend" img={js} />
          <Skillcard 
          title="Backend"/>
          <Skillcard 
          title="Android"/>
          <Skillcard
          title="Others" />
        </section>

      </div>
        
      
    </div>
  )
}

export default Skills
