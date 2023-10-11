import React from 'react'
import "./Header.css"
import { NavLink } from "react-router-dom";

function Nav() {

  let activeStyle = {
    textDecoration: "underline",
    fontSize:"15px",
    color:"green",
    fontWeight:"700" 
  };

  return (
    <div class="navmain">

<NavLink to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p> About</p></NavLink>
        
        <NavLink to="Skills/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p> SKills</p></NavLink>

        <NavLink to="Experience/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p> Experience</p></NavLink>

        <NavLink to="Project/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p>Project</p></NavLink>

        <NavLink to="Education/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}>
        <p> Education</p></NavLink>
      
    </div>
  )
}

export default Nav
