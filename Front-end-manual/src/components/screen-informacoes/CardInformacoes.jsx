
import React, { Component } from 'react';
import '../../assets/css/css-informacoes/cardInformacoes.css';
import imgbateria from '../../assets/img/battery-loading.svg';
import imgsegurança from '../../assets/img/security.svg';
import imggarantia from '../../assets/img/warranty.svg';
import imgalerta from '../../assets/img/alert-error.svg';


function CardInformacoes(props) {
    return ( 
        <>
          <div className='card-interno'>
               <p className='card-texto'>{props.texto}</p>

               <i className='img-icones'>
                    <img src={props.icone} style={{width:'30px'}} />
               </i>
          </div>               
        </>
     );
}

export default CardInformacoes;