import React from 'react'
import "./Works.css"
import Upwork from "../../Img/Upwork.png"
import Fiverr from "../../Img/fiverr.png"
import Amazon from "../../Img/amazon.png"
import Facebook from "../../Img/Facebook.png"
import Shopify from "../../Img/Shopify.png"
const Works = () => {
  return (
    <div className='works'>
        <div className='awesome'>
            <span> Works for All these</span>
            <span> Brand & Clients</span>
            <spane>
               Lorem Ipsum is simply dummy text of the yummy dummy 
              <br/>
              printing and typesetting industry  
               <br/>
            ispum is simply dummy text of printing
            </spane>
            <button className='button s-button'> Hire me </button>
            <div className='blur s-blur1' style={{background:"#abf1ff94"}}></div>


        </div>
        <div className='w-right'>
          <div className='w-mainCircle'>
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

          </div>
          <div className='w-backCircle blueCircle'></div>
          <div className='w-backCircle yellowCircle'></div>


        </div>
    </div>
  )
}

export default Works
