import {Swiper, SwiperSlide } from "swiper/react";
import '../../assets/css/css-home/Carousel.css'
import { Autoplay, Pagination, Navigation,Scrollbar, A11y } from "swiper";
import {useEffect, useState } from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Cardproduto } from "./Cardproduto";

export const Carousel = ( props ) => {
    // const { innerWidth: width, innerHeight: height } = window;

    return (
        <div className='Carousel_react-div' >
            <span className='Carousel_react-02'>
                <Swiper 
                    slidesPerView={3}
                    spaceBetween={0}
                    direction="horizontal"
                    loop={false}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Autoplay,Pagination, Navigation]}
                    className="swiper-home"
                >
                    {props.prodsInfo && props.prodsInfo.map((p, index) => (
                        // {console.log('pesquisa:', props.pesquisa)}
                        // if (toString(props.pesquisa) != ' '){
                            // if (toString(p.name).toUpperCase() == toString(props.pesquisa).toUpperCase()){
                                // {console.log('Entrei aqui')}
                                // <SwiperSlide className="swiper-slide-card"><Cardproduto nome={p.name} foto={p.product.img_prod} fkProd={p.fkProd} key={index}/></SwiperSlide>
                            // }
                        // }
                        // else{
                            <SwiperSlide className="swiper-slide-card"><Cardproduto nome={p.name} foto={p.product.img_prod} fkProd={p.fkProd} key={index}/></SwiperSlide>
                        // }
                    ))}
                </Swiper>                 
            </span>

        </div>
    )
}