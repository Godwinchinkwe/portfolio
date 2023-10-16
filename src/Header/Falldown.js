import React from 'react'
import {useNavigate} from "react-router-dom"

const Falldown = (prop) => {
  const navigate = useNavigate();
  const {props} = prop  
  
  return (
    <div className='maindrop'>
    <div className='dropwrap'>
        <p className='fd' onClick={() => {props(); navigate('Skills/')}} >Skills</p>
        <p className='fd' onClick={() => {props(); navigate('About/')}}>About</p>
        <p className='fd' onClick={() => {props(); navigate('Experience/')}}>Experience</p>
        <p className='fd' onClick={() => {props(); navigate('Project/')}}>Project</p>
        <p className='fd' onClick={() => {props(); navigate('Education/')}}>Education</p>
    </div>
</div>
  )
}

export default Falldown
