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
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"



const Intro = () => {

  const transition = { duration : 2, type : "spring"} 

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode; 


  return (
    <div className='intro' id="Home">
        <div className='i-left'>
            <div className='i-name'>
                <span style ={{color:darkMode?"white":""}}> Hy! I Am </span>
                <span> Godwin Chinkwe </span>
                <span  style ={{color:darkMode?"white":""}}> I'm a <Typewriter options={{
                            strings : [ "Affiliate Marketer", "Seo Manager" , "Business Tycoon" , "Programmer" , "Youtuber" , "Designer", "FrontEnd Developer","Wordpress Developer", "Cool Website Developer", ],
                            loop: true,
                            autoStart:true,
                            typeSpeed: 100,
                            backSpeed: 80,
                            backDelay:1500,
                        }}/> </span>
            </div>
            <button className='button i-button'> Hire Me</button>
             <div className='i-iconz'>
                <img src={github}   alt=""/>
                <img src={instagram} width="70px" alt=""/>
                <img src={linkedln} width="70px" alt=""/>
             </div>

        </div>
        
        <div className='i-right'>
          <img src={Vector1} alt=""/>
          <img src={Vector2} alt=""/>
          <img src={Gm} alt=""/>

          <motion.img
          initial={{left: "-36%"}}
          whileInView={{left:"-24%"}}
          transition={transition}
           src={glassesimoji} alt=""/>


          <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{top:"-4%", left:"68%"}}>
            <FloatingDiv image={crown} txt1="web" txt2="Developer"/>
          </motion.div>

          <motion.div
           initial={{ left: "9rem", top: "18rem" }}
           whileInView={{ left: "0rem" }}
           transition={transition}
          style={{top:"18rem", left:"0rem"}}>
            <FloatingDiv image={thumbsup} txt1="Best Dessign" txt2="Award"/>
          </motion.div>

          <div className='blur' style={{background:"rgb(238 210 255)"}}></div>
          <div className='blur' style={{background:"c1f5ff", top:"17rem", width:"21rem", height:"11rem", left:"-9rem" }}></div>
        </div>
    </div>
  )
}

export default Intro
