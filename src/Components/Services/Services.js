import React from 'react';
import "./Services.css";
import Humble from "../../Img/humble.png";
import Heartemoji from "../../Img/heartemoji.png";
import Glasses from "../../Img/glasses.png" 
import Card from "../Card/Card"
import Resume from "./Resume.pdf"


const Services = () => {
  return (
    <div className='services'>
        <div className='awesome'>
            <span> My Awesome</span>
            <span> Services</span>
            <spane> Lorem Ipsum is simply dummy text of the printing and typesetting industry   <br/>
            ispum is simply dummy text of printing</spane>
            <a href={Resume} download>
            <button className='button s-button'> Download CV</button> </a>
            <div className='blur s-blur1' style={{background:"#abf1ff94"}}></div>


        </div>
        <div className='cards'>
            <div style={{left:"14rem"}}>
                <Card
                emoji ={Heartemoji}
                heading ={"Design"} 
                detail = {"Figma, sketch, photoshop, Adobe, Adobe xd"}/>
            </div>

            <div style={{top:"12rem", left:"-4rem"}}>
                <Card
                emoji ={Glasses}
                heading ={"Developer"} 
                detail = {"Html, css, JavaScript, React"}/>
            </div>

            <div style={{top:"19rem", left:"12rem"}}>
                <Card
                emoji ={Humble}
                heading ={"UI/UX"} 
                detail = {"LOREM ipsum dummy text are usually section where"}/>
            </div>
            <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>


        </div>
      
    </div>
  )
}

export default Services
