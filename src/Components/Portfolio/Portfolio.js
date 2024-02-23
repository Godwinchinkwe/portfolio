import React from 'react'
import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import ecommerce from "../../Img/ecommerce.png"
import Musicapp from "../../Img/musicapp.png"
import Sidebar from "../../Img/sidebar.png"


const Portfolio = () => {
  return (
    <div className='portfolio'>
        <span>Recent Project </span>
        <span>Portfolio </span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grapCursor={true}
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
