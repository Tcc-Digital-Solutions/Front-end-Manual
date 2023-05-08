import React, { useState } from 'react';
import '../../assets/css/css_universal/Boxproduto.css';

export const Boxproduto = (props) => {
    const [inform] =  useState(props.informSet)
    const [monta] =  useState(props.montaSet)

    return (
        <div className='boxproduto-div' >
            <span className='boxproduto-text'>
                <p>{props.nome}</p>
            </span>
            <span className='boxproduto-item'>
                <ul className={inform}>
                    <li className='texto-box-produtos'>1 Furadeira GSB 13 RE</li>
                    <li className='texto-box-produtos'>1 manual de instruções</li>
                    <li className='texto-box-produtos'>1 Limitador de profundidade</li>
                    <li className='texto-box-produtos'>1 Chave de mandril</li>
                    <li className='texto-box-produtos'>Mala de transporte</li>
                    <li className='texto-box-produtos'>1 Punho auxiliar</li>
                </ul>
                <ul className={monta}>
                    <li className='texto-box-produtos'>1 - Furadeira GSB 13 RE</li>
                    <li className='texto-box-produtos'>2 - manual de instruções</li>
                    <li className='texto-box-produtos'>3 - Limitador de profundidade</li>
                    <li className='texto-box-produtos'>4 - Chave de mandril</li>
                    <li className='texto-box-produtos'>5 -Mala de transporte</li>
                    <li className='texto-box-produtos'>6 - Punho auxiliar</li>
                    <li className='texto-box-produtos'>7 - Furadeira GSB 13 RE</li>
                    <li className='texto-box-produtos'>8 - manual de instruções</li>
                    <li className='texto-box-produtos'>9 - Limitador de profundidade</li>
                    <li className='texto-box-produtos'>10 - Chave de mandril</li>
                    <li className='texto-box-produtos'>11 -Mala de transporte</li>
                    <li className='texto-box-produtos'>12 - Punho auxiliar</li>
                </ul>
            </span>
        </div>

    )
}