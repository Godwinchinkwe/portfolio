import React from 'react'
import "./Skills.css"

function skillcard(props) {
  return (
    <div class="skill_card">
        <h1>{props.title}</h1>
        <img class="frontend" src={props.img} alt="logo" />
        {/* <img class="frontend" src={props.img} alt="logo" /> */}
      
    </div>
  )
}

export default skillcard
