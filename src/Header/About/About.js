import React from 'react'
import "./About.css"
import geee from "../../Img/geee.png"
import 'animate.css';
// import ParticlesBackground from '../../Components/Config/ParticlesBackground';



const About = () => {
  return (
    <div class='main-about'>
    {/* <div class='particlesheader'> */}
      {/* <ParticlesBackground/> */}
      <div class='about-wrap'>
        <div class='about-left animate__animated animate__backInLeft animate__delay 2s;'>
          <h1>About ME</h1> <br/>
          <p>
          Godwin Resume HTML Template is brought to you by Tooplate website. You can feel free to edit and use this page for your small site. You are allowed to use this HTML template for any kind of purpose.

However, please do not re-distribute the downloadable template ZIP file on any template collection website. This is strongly prohibited. Please contact Tooplate for more information
          </p>
        </div>


        <div class='about-right animate__animated animate__backInRight animate__delay 3s;'>
          {/* <div class="about-right1"></div>
          <div class="about-right2"></div>
          <div class="about-right3"></div>
          <div class="about-right4"></div> */}

          <img class="gwclass" src={geee} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default About
