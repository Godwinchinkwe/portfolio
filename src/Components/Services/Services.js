import React from 'react';
import "./Services.css";
import Humble from "../../Img/humble.png";
import Heartemoji from "../../Img/heartemoji.png";
import Glasses from "../../Img/glasses.png" 
import Card from "../Card/Card"
import Resume from "./Resume.pdf"
import { motion } from "framer-motion";
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Services = () => {

    const transition = {
        duration: 1, type: "spring", };
        const theme = useContext(themeContext);
        const darkMode = theme.state.darkMode; 

  return (
    <div className='services' id="Services">
        <div className='s-awesome'>
            <span style ={{color:darkMode?"blue":""}}> My Awesome</span>
            <span > Services</span>
            <span style ={{color:darkMode?"white":""}} > Lorem Ipsum is simply dummy text of the printing and typesetting industry   <br/>
            ispum is simply dummy text of printing</span>
            <a href={Resume} download>
            <button className='button s-button'> Download CV</button> </a>
            <div className='blur s-blur1' style={{background:"#abf1ff94"}}></div>


        </div>
        <motion.div className='cards'>
            <motion.div 
             initial={{ left: "25rem" }}
             whileInView={{ left: "20rem" }}
             transition={transition}
             style={{left:"20rem"}}>
                <Card
                emoji ={Heartemoji}
                heading ={"Design"} 
                detail = {"Figma, sketch, photoshop,"}/>
            </motion.div>


            <motion.div
            initial={{ left: "-4rem", top: "8rem" }}
            whileInView={{ left: "7rem", top:"0rem" }}
            transition={transition}
            style={{top:"8rem", left:"7rem"}}>
                <Card
                emoji ={Glasses}
                heading ={"Developer"} 
                detail = {"Html, css, JavaScript, React"}/>
            </motion.div>


            <motion.div 
             initial={{ top: "16rem", left: "25rem" }}
             whileInView={{ left: "13rem", top:"15rem" }}
             transition={transition}
            style={{top:"6rem", left:"15rem"}}>
                <Card
                emoji ={Humble}
                heading ={"UI/UX"} 
                detail = {"LOREM ipsum dummy text are usually section where"}/>
            </motion.div>


            <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>


        </motion.div>
      
    </div>
  )
}

export default Services
