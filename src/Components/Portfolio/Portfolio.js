import React from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import ecommerce from "../../Img/ecommerce.png"
import Musicapp from "../../Img/musicapp.png"
import Sidebar from "../../Img/sidebar.png"
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Portfolio = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id="Portfolio">
        <span style ={{color:darkMode?"#1949b8":""}}>Recent Project </span>
        <span>Portfolio </span>

        <Swiper
        width={900}
        spaceBetween={30}
        slidesPerView={3}
        grapCursor={true}
        justify-Content ={"center"}
        className='portfolio-slider'>
          <SwiperSlide>
            <img src={Sidebar} alt=""/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Musicapp} alt=""/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={ecommerce} alt=""/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sidebar} alt=""/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={Musicapp} alt=""/>
          </SwiperSlide>

          <SwiperSlide>
            <img src={ecommerce} alt=""/>
          </SwiperSlide>
        </Swiper>
      
    </div>
  )
}

export default Portfolio
