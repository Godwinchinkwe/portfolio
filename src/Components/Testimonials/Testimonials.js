import React from 'react'
import "./Testimonials.css"
import { Swiper, SwiperSlide } from "swiper/react"
import profilePic1 from "../../Img/profile1.jpg"
import profilePic2 from "../../Img/profile2.jpg"
import profilePic3 from "../../Img/profile3.jpg"
import profilePic4 from "../../Img/profile4.jpg"
import profilePic5 from "../../Img/profile5.jpg"
import profilePic6 from "../../Img/profile6.jpg"
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';



const Testimonials = () => {
   const clients=[
        {
            img: profilePic1,
            review:
            "Lorem ipsum dolor sit amen cosectetur adipiscing elit. Ex officilis molestian quod tempora landreawe namesta dispoebdui extraodinary malnutricious conjusrtino lurer anamachinakerty jevv yeej why tin jenkiosion  sad"
        },
        {
            img: profilePic2,
            review:
            "Lorem ipsum dolor sit amen cosectetur adipiscing elit. Ex officilis molestian quod tempora landreawe namesta dispoebdui extraodinary malnutricious conjusrtino lurer anamachinakerty jevv yeej why tin jenkiosion  sad"
        },
        {
            img: profilePic3,
            review:
            "Lorem ipsum dolor sit amen cosectetur adipiscing elit. Ex officilis molestian quod tempora landreawe namesta dispoebdui extraodinary malnutricious conjusrtino lurer anamachinakerty jevv yeej why tin jenkiosion  sad"
        },
        {
            img: profilePic4,
            review:
            "Lorem ipsum dolor sit amen cosectetur adipiscing elit. Ex officilis molestian quod tempora landreawe namesta dispoebdui extraodinary malnutricious conjusrtino lurer anamachinakerty jevv yeej why tin jenkiosion  sad"
        },
        {
            img: profilePic5,
            review:
            "Lorem ipsum dolor sit amen cosectetur adipiscing elit. Ex officilis molestian quod tempora landreawe namesta dispoebdui extraodinary malnutricious conjusrtino lurer anamachinakerty jevv yeej why tin jenkiosion  sad"
        },
        {
            img: profilePic6,
            review:
            "Lorem ipsum dolor sit amen cosectetur adipiscing elit. Ex officilis molestian quod tempora landreawe namesta dispoebdui extraodinary malnutricious conjusrtino lurer anamachinakerty jevv yeej why tin jenkiosion  sad"
        }

    ]

    



  return (
    <div className='t-wrapper'>
        <div className='t-header'>
            <span className='testy1' >Clients always get</span>
            <span className='testy'> Exceptional Work</span>
            <span className='testy1'> from me. . .</span>
            <div className='blur t-blurl' style={{background: "var(--purplr)"}}></div>
            <div className='blur t-blurl' style={{background: "skyblue"}}></div>
        </div>
    
    <Swiper
    modules={[ Pagination]}
    slidePerView={1}
    pagination={{clickable:true}}>
        {clients.map((client, index )=>{
           return (

                <SwiperSlide key={index}>
                    <div className='testimonial'>
                    <img src={client.img} alt=""/>
                    <span>{client.review}</span>

                    </div>
                    

                </SwiperSlide>
            )
           })}

    </Swiper>
    </div>
  )
}

export default Testimonials
