import React from 'react'
import "./Hero.css"
import geee from "../../Img/geee.png"
import Typewriter from "typewriter-effect"

const Hero = () => {

    

  return (
    <div class="hero_main">
        <div class="hero_wrap">
            <div class="hero_left">
                <h2>Hi, I am <br/>
               Godwin Chinkwe</h2><br/>

                <div>
                    I am a 
                    <span class="looop">
                        <Typewriter
                        options={{
                            strings : [ "Affiliate Markrter", "Seo Manager" , "Business Man" , "programmer" , "Youtuber" , "Designer", "FrontEnd Developer" ],
                            loop: true,
                            autoStart:true,
                            typeSpeed: 100,
                            backSpeed: 80,
                            backDelay:1500,
                        }}/>
                    </span>
                </div>
                
                <br/>
                <p>  
                 Of course! I'd be happy to learn more about you. 
                 Please feel free to share information about yourself, 
                 such as your name, age, interests, hobbies, profession, 
                 or anything else you'd like to share. This will help me 
                 provide more personalized information or answer any 
                 questions you might have about yourself.</p> <br/>

                 <button class="butt"> Check Resume </button>
            </div>

            <div class="hero_right">
                <img class="geefoto"src={geee} alt="" />
            </div>

        </div>
      
    </div>
  )
}

export default Hero
