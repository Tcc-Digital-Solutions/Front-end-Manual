import React, { useEffect, useState } from 'react';
import { Autoplay, Pagination, Navigation,Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Speaker } from '../universal/Speaker'
import '../../assets/css/css-montagem/BoxMontagem.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ButtonMontagem } from './ButtonMontagem';


export const BoxMontagem = (props) => {

    const [imagemMaximizada, setImagemMaximizada] = useState('')
    const [subtitleMaximizada, setSubtitleMaximizada] = useState('')
    const { innerWidth: width, innerHeight: height } = window;
    const [classd,setClassd] = useState('direction-div')
    const [slip, setSlip] = useState(3)
    const [swip, setSwip] = useState(1)
    
    useEffect(() => {
        if (innerHeight < 800){
            setSlip(2)
        }
        if (innerHeight == 820 ){
            setSwip(3)
        }
        if(innerWidth == 768){
            setClassd('direction-div-iped')
            setSwip(3)
        }
        if (innerWidth == 600){
            setSwip(1)
        }
        // props.montagem[0] && props.montagem[0].subtitlemontage.subititleImg
        setImagemMaximizada(props.montagem[0] && props.montagem[0].montage.img_guide)
        setSubtitleMaximizada('Imagem Principal da Ferramenta')
    }, [props.montagem[0] && props.montagem[0].montage.img_guide])

    return (

        <div className="BoxMontagem-div" >
            <div className='montagem-components'>
                <div className='img-principal-div'>
                    <ButtonMontagem/>
                </div>
                <div className='img-fixa-montagem-div'>
                    <img className='img-fixa-montagem' src={imagemMaximizada} alt={subtitleMaximizada}/>
                </div>
                <div className={classd}>
                    <div className='box-imgs-montagem-div'>
                        <div className='div-imgs-montagem' >
                            <div className='swiper-web'>
                                <Swiper
                            
                                    direction={'vertical'}
                                    spaceBetween={15}
                                    slidesPerView={slip}
                                    loop={false}
                                    loopFillGroupWithBlank={true}
                                    navigation={true}
                                    modules={[Autoplay,Pagination, Navigation, A11y]}
                                    className="swiper-montagem"
                                   
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                // passar o tradutor interno na imagem 1
                                >
                                    <SwiperSlide><span className='montagem-span'><img className='imgs-montagem' src={props.montagem[0] && props.montagem[0].montage.img_guide} onClick={() => (setImagemMaximizada(props.montagem[0] && props.montagem[0].montage.img_guide), setSubtitleMaximizada('Imagem principal da ferramenta'))} alt={'Imagem principal da ferramenta'} /></span></SwiperSlide>
                                    {props.montagem && props.montagem.map((m, index) => (
                                        <SwiperSlide key={index}><span className='montagem-span'><img className='imgs-montagem' src={m.imgmontage.img} onClick={() => (setSubtitleMaximizada(m.subtitlemontage.subititleImg), setImagemMaximizada(m.imgmontage.img))} alt={m.subtitlemontage.subititleImg}/></span></SwiperSlide>
                                        ))}
                                </Swiper>
                            </div>


                            <div className='swiper-mobile'>
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={0}
                                    slidesPerView={swip}
                                    navigation={true}
                                    
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                    >
                                    <SwiperSlide><img className='imgs-montagem' src={props.montagem[0] && props.montagem[0].montage.img_guide} onClick={() => (setImagemMaximizada(props.montagem[0] && props.montagem[0].montage.img_guide), setSubtitleMaximizada('Imagem principal da ferramenta'))} alt={'Imagem principal da ferramenta'} /></SwiperSlide>
                                    {props.montagem && props.montagem.map((m, index) => (
                                        <SwiperSlide key={index}><img className='imgs-montagem' src={m.imgmontage.img} onClick={() => (setSubtitleMaximizada(m.subtitlemontage.subititleImg), setImagemMaximizada(m.imgmontage.img))} alt={m.subtitlemontage.subititleImg}/></SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

