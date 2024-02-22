import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className='n-left'>
        <div className='n-name'>Godwin</div>
        <span>toggle</span>
      </div>
      <div className='n-right'></div>
      <div className='n-list'>
        <ul style={{listStyleType:"none"}}>
            <li>Home</li>
            <li>Service</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
        </ul>
      </div>
      <button className='button n-button'> Contact</button>
    </div>
  )
}

export default Navbar