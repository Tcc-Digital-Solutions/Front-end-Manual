import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../assets/css/css-montagem/BoxMontagem.css';
import ImgFixaMontagem from '../../assets/img/img-fixa-montagem.png';
import ImgMontagemA from '../../assets/img/img-furadeira-A.png';
import ImgMontagemB from '../../assets/img/img-furadeira-B.png';
import ImgMontagemC from '../../assets/img/img-furadeira-C.png';
import ImgMontagemD from '../../assets/img/img-furadeira-D.png';
import ImgMontagemE from '../../assets/img/img-furadeira-E.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const BoxMontagem = () => {

    const [imagemMaximizada, setImagemMaximizada] = useState(ImgFixaMontagem)

    useEffect(() => {
        console.log(imagemMaximizada)
    })

    return (

        <div className="BoxMontagem-div" >
            <div className='montagem-components'>
                <div className='img-principal-div'>
                    <img className='img-principal' src={ImgFixaMontagem} onClick={() => setImagemMaximizada(ImgFixaMontagem)} />
                </div>
                <div className='img-fixa-montagem-div'>
                    <img className='img-fixa-montagem' src={imagemMaximizada} />
                </div>
                <div className='direction-div'>
                    <div className='box-imgs-montagem-div'>
                        <div className='div-imgs-montagem' >
                            <div className='swiper-web'>
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Scrollbar]}
                                    direction={'vertical'}
                                    spaceBetween={0}
                                    slidesPerView={3}
                                    // navigation
                                    // pagination={{ clickable: true }}
                                    // scrollbar={{ hide:true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                >

                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemA} onClick={() => setImagemMaximizada(ImgMontagemA)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemB} onClick={() => setImagemMaximizada(ImgMontagemB)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemC} onClick={() => setImagemMaximizada(ImgMontagemC)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemD} onClick={() => setImagemMaximizada(ImgMontagemD)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemE} onClick={() => setImagemMaximizada(ImgMontagemE)} /></SwiperSlide>
                                </Swiper>
                            </div>


                            <div className='swiper-mobile'>
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    navigation
                                    // pagination={{ clickable: true }}
                                    // scrollbar={{ hide:true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                >

                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemA} onClick={() => setImagemMaximizada(ImgMontagemA)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemB} onClick={() => setImagemMaximizada(ImgMontagemB)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemC} onClick={() => setImagemMaximizada(ImgMontagemC)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemD} onClick={() => setImagemMaximizada(ImgMontagemD)} /></SwiperSlide>
                                    <SwiperSlide><img className='imgs-montagem' src={ImgMontagemE} onClick={() => setImagemMaximizada(ImgMontagemE)} /></SwiperSlide>
                                </Swiper>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

