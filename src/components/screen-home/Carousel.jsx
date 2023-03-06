import {Swiper, SwiperSlide } from "swiper/react";
import '../../assets/css/css-home/Carousel.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import teste from '../../assets/img/jhgfd 1.png'
import teste2 from '../../assets/img/BANNER 03_ INTERCAMBIALIDADE_18v.png'
import teste3 from '../../assets/img/BANNER 02_ MEDIÇÃO.png'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Carousel = (props) => {

    return (
        <div className='Carousel_react-div' >
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                modules={[Autoplay,Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className="swiper-slide-1"><img className="Carousel-img" src={teste} alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide-1"><img className="Carousel-img" src={teste2} alt="" /></SwiperSlide>
                <SwiperSlide className="swiper-slide-1"><img className="Carousel-img" src={teste3} alt="" /></SwiperSlide>

            </Swiper>
        </div>
    )
}