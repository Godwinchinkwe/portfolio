import React from 'react'
import "./Hero.css"
import geee from "../../Img/geee.png"
import Typewriter from "typewriter-effect"
import 'animate.css';
import Skills from "../../Header/Skills/Skills"
import Experience from "../../Header/Experience/Experience"
const Hero = () => {

    
  return (
    <>
    <div class="hero_main">
        <div class="hero_wrap">
            <div class="hero_left">
                <h2 class=" animate__animated animate__backInDown animate__delay 2s; ">Hi, I am <br/>
               Godwin Chinkwe</h2><br/>
               
                <div>
                    I am a 
                    <span class="looop ">
                        <Typewriter options={{
                            strings : [ "Affiliate Marketer", "Seo Manager" , "Business Tycoon" , "Programmer" , "Youtuber" , "Designer", "FrontEnd Developer","Wordpress Developer"],
                            loop: true,
                            autoStart:true,
                            typeSpeed: 100,
                            backSpeed: 80,
                            backDelay:1500,
                        }}/>
                    </span>
                </div>
                
                <br/>
                <p class="animate__animated animate__backInLeft animate__delay 2s;" >  
                 Of course! I'd be happy to learn more about you. 
                 Please feel free to share information about yourself, 
                 such as your name, age, interests, hobbies, profession, 
                 or anything else you'd like to share. This will help me 
                 provide more personalized information or answer any 
                 questions you might have about yourself.</p> <br/>

                 <button class="butt animate__animated animate__backInUp animate__delay 2s;"> Check Resume </button>
            </div>

            <div class="hero_right animate__animated animate__backInRight animate__delay 2s;">
                <img class="geefoto" src={geee} alt="" />
                
            </div>

        </div>
        
      
    </div>
    <Skills/>
    <Experience/>
    </>
  )
}

export default Hero;