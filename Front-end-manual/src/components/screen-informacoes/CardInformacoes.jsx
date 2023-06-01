
import React, { Component } from 'react';
import '../../assets/css/css-informacoes/cardInformacoes.css';

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