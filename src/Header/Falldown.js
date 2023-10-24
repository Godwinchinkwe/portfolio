import React from 'react'
import {useNavigate} from "react-router-dom"
import 'animate.css';

const Falldown = (prop) => {
  const navigate = useNavigate();
  const {props} = prop  
  
  return (
    <div className='maindrop animate__animated animate__bounceInDown animate__delay 2s;'>
    <div className='dropwrap'>
        <p className='fd' onClick={() => {props(); navigate('Skills/')}} >Skills</p>
        <p className='fd' onClick={() => {props(); navigate('About/')}}>About</p>
        <p className='fd' onClick={() => {props(); navigate('Experience/')}}>Experience</p>
        <p className='fd' onClick={() => {props(); navigate('Project/')}}>Project</p>
        <p className='fd' onClick={() => {props(); navigate('Education/')}}>Education</p>

        <a className='fd' target="_blank" rel="noreferrer" href="https://github.com/Godwinchinkwe">
        <p  >Gitbub Profile</p></a>


 
    </div>
    
  
</div>
  )
}

export default Falldown
