import {Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import '../../assets/css/css-informacoes/Carouselinformacoes.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';
import CardInformacoes from './CardInformacoes';


export const Carouselinformacoes = (props) => {

    return (
        <div className='Carousel-informacoes-div' >
            <Swiper
                slidesPerView={2}
                direction={'vertical'}
                spaceBetween={15}
                slidesPerGroup={2}
                loop={false}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 40000,
                    disableOnInteraction: false,
                  }}
                navigation={false}
                modules={[Navigation, Pagination, Scrollbar, A11y, Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide className="swiper-slide-1"><CardInformacoes texto={'Bivolt 127v - 220v.Pode ficar ligado até 18 horas.'} icone={'bateria'} /></SwiperSlide>
                <SwiperSlide className="swiper-slide-1"><CardInformacoes texto={'Olá como vai?'} icone={'engrenagem'} /></SwiperSlide>
                <SwiperSlide className="swiper-slide-1"><CardInformacoes texto={'1 ano de garantia, quando produtos ou peças apresentarem defeitos provenientes de falha.'} icone={'certificado'} /></SwiperSlide>
                <SwiperSlide className="swiper-slide-1"><CardInformacoes texto={'Luz de LED, para trabalhar em áreas menos iluminadas.'} /></SwiperSlide>

            </Swiper>
        </div>
    )
}