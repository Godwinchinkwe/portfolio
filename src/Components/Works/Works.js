import React from 'react'
import "./Works.css"
import Upwork from "../../Img/Upwork.png"
import Fiverr from "../../Img/fiverr.png"
import Amazon from "../../Img/amazon.png"
import Facebook from "../../Img/Facebook.png"
import Shopify from "../../Img/Shopify.png"
import { motion } from "framer-motion"



const Works = () => {

  const transition = { duration:3.5, type:"spring"} 

  return (
    <div className='works' id="Experience">
        <div className='awesome'>
            <span> Works for All these</span>
            <span> Brand & Clients</span>
            <span>
               Lorem Ipsum is simply dummy text of the yummy dummy 
              <br/>
              printing and typesetting industry  
               <br/>
            ispum is simply dummy text of printing
            </span>
            <button className='button s-button'> Hire me </button>
            <div className='blur s-blur1' style={{background:"#abf1ff94"}}></div>


        </div>
        <div className='w-right'>
          
          <motion.div
          
          initial={{rotate:45}}
          whileInView={{ rotate: 0 }}
          viewport={{margin:"-40px"}}
          transition={transition}

          className='w-mainCircle'>
            <div className="w-secCircle">
              <img src={Fiverr} alt=""/>
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt=""/>
            </div>
            <div className="w-secCircle">
              <img src={Shopify} alt=""/>
            </div>
            <div className="w-secCircle">
              <img src={Upwork} alt=""/>
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt=""/>
            </div>

          </motion.div>
          <div className='w-backCircle blueCircle'></div>
          <div className='w-backCircle yellowCircle'></div>


        </div>
    </div>
  )
}

export default Works
