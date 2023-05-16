import { useEffect, useState } from 'react';
import '../../assets/css/css-informacoes/img360.css';
// import { Speaker } from '../universal/Speaker'

export const Img360 = (props) => {
    const basePath = "https://fastly-production.24c.in/webin/360";

    return (
        <div className="img360-div" >
            <span className="img360-produto-name">
                {props.prodInfo.name}
                {/* <Speaker buttonTrue='---'  text='Imagem 360 de todos Ângulos da ferramenta bosch ,A Furadeira de Impacto Bosch GSB 13 RE possui 650W de potência, é super leve e compacta! Vem com empunhadeira emborrachada para o agarre seguro e confortável. Além disso, possui interruptor de velocidade variável e botão trava para trabalhos contínuos.
                Interruptor com velocidade variável e botão-trava para trabalhos contínuos. Motor de alto desempenho de 650 W para atender a todas as necessidades dos usuários.Empunhadeira emborrachada: agarre seguro e confortável.
                Uso industrial com 2 anos de garantia.'/>         */}
            </span>
            <iframe className='img360-iframe' src={props.prod.img_360} width="100%" height="100%" scrolling="no" id="frame-spec"></iframe>
        </div>
    )
}