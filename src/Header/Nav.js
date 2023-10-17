import React from 'react'
import "./Header.css"
import { NavLink } from "react-router-dom";

function Nav() {

  let activeStyle = {
    textDecoration: "underline",
    fontSize:"19px",
    color:"gold",
    fontWeight:"800" 
  };


  return (
    <div class="navmain">

<NavLink to="Skills/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> Skills</p></NavLink>
        
        <NavLink to="About/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> About</p></NavLink>

        <NavLink to="Experience/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> Experience</p></NavLink>

        <NavLink to="Project/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text">Project</p></NavLink>

        <NavLink to="Education/" className="nav_text1"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p class="nav_text"> Education</p></NavLink>
      
    </div>
  )
}

export default Nav
