import {Swiper, SwiperSlide } from "swiper/react";
import '../../styles/css-home/Carousel.module.css'
import { Autoplay, Pagination, Navigation,Scrollbar, A11y } from "swiper";
import {useEffect, useState } from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Cardproduto } from "./Cardproduto";

export const Carousel = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const [slip, setSlip] = useState(3)

    useEffect(() => {
        if (innerWidth < 1000){
            setSlip(2)
        }
        if (innerWidth < 700){
            setSlip(1)
        }
    })

    return (
        <div className='Carousel_react-div' >
            <span className='Carousel_react-02'>
                <Swiper 
                    slidesPerView={slip}
                    spaceBetween={0}
                    direction="horizontal"
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Autoplay,Pagination, Navigation]}
                    className="swiper-home"
                >
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>
                    <SwiperSlide className="swiper-slide-card"><Cardproduto/></SwiperSlide>

                </Swiper>                 
            </span>

        </div>
    )
}