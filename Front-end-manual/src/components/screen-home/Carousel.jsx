import {Swiper, SwiperSlide } from "swiper/react";
import '../../assets/css/css-home/Carousel.css'
import { Autoplay, Pagination, Navigation,Scrollbar, A11y } from "swiper";
import {useEffect, useState } from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Cardproduto } from "./Cardproduto";

export const Carousel = ( props ) => {
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

    {console.log(props.allProdutos)}
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
                    <SwiperSlide className="swiper-slide-card"><Cardproduto allProdutos={props.allProdutos} fezFetch={props.fezFetch}/></SwiperSlide>

                </Swiper>                 
            </span>

        </div>
    )
}