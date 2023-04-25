
import React, { Component } from 'react';
import '../../assets/css/css-informacoes/Boxproduto.css';

export const Boxproduto = (props) => {

    return (
        <div className='boxproduto-div' >
            <span className='boxproduto-text'>
                <p>CONTEÚDO DA EMBALAGEM</p>
            </span>
            <span className='boxproduto-item'>
                <ul className='components-box-produtos'>
                    <li className='texto-box-produtos'>1 Furadeira GSB 13 RE</li>
                    <li className='texto-box-produtos'>1 manual de instruções</li>
                    <li className='texto-box-produtos'>1 Limitador de profundidade</li>
                    <li className='texto-box-produtos'>1 Chave de mandril</li>
                    <li className='texto-box-produtos'>Mala de transporte</li>
                    <li className='texto-box-produtos'>1 Punho auxiliar</li>
                </ul>
            </span>
        </div>

    )
}