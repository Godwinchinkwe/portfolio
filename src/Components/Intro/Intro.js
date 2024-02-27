import React from 'react'
import "./Intro.css"
import github from "../../Img/github.png"
import instagram from "../../Img/instagram.jpg"
import linkedln from "../../Img/linkedln.png"
import Vector1 from "../../Img/Vector1.png"
import Vector2 from "../../Img/Vector2.png"
import Gm from "../../Img/Gm.png"
import glassesimoji from "../../Img/glassesimoji.png"
import crown from "../../Img/crown.png"
import thumbsup from "../../Img/thumbsup.png" 
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context';
import { useContext } from 'react';
// import { motion } from "framer-motion"



const Intro = () => {

  // const transition = { duration : 2, type : "spring"} 

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 


  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span style ={{color:darkMode?"white":""}}> Hy! I Am </span>
                <span> Godwin Chinkwe </span>
                <span  style ={{color:darkMode?"white":""}}> Frontend Developer with high level of 
                    experience in web designing and development, proudcting the Quality work </span>
            </div>
            <button className='button i-button'> Hire Me</button>
             <div className='i-icons'>
                <img src={github} alt=""/>
                <img src={instagram} alt=""/>
                <img src={linkedln} alt=""/>
             </div>

        </div>
        <div className='i-right'>
          <img src={Vector1} alt=""/>
          <img src={Vector2} alt=""/>
          <img src={Gm} alt=""/>
          <img src={glassesimoji} alt=""/>

          <div style={{top:"-4%", left:"68%"}}>
            <FloatingDiv image={crown} txt1="web" txt2="Developer"/>
          </div>
          <div style={{top:"18rem", left:"0rem"}}>
            <FloatingDiv image={thumbsup} txt1="Best Dessign" txt2="Award"/>
          </div>
          <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
          <div className='blur' style={{background:"c1f5ff", top:"17rem", width:"21rem", height:"11rem", left:"-9rem" }}></div>
        </div>
    </div>
  )
}

export default Intro
