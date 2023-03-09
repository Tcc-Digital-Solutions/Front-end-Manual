
import React, { Component } from 'react';
import '../../assets/css/css-informacoes/cardInformacoes.css';
import { FaLightbulb } from 'react-icons/fa';
import {BsBatteryCharging} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import {TbCertificate} from 'react-icons/tb'


function CardInformacoes({texto, icone}) {
    return ( 
        <>
            <div className='card'>
                    <p>{texto}</p>

                    <i>
                    {
                        icone == 'bateria' ? <BsBatteryCharging /> : icone == 'engrenagem' ? <FiSettings/> : icone == 'certificado' ? <TbCertificate/> : <FaLightbulb/>
                        

                    }
                    </i>                 
            </div>
        </>
     );
}

export default CardInformacoes;