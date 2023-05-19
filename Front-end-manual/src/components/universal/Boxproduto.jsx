import React, { useEffect, useState } from 'react';
import '../../assets/css/css_universal/Boxproduto.css';

export const Boxproduto = (props) => {
    const [inform] =  useState(props.informSet)
    const [monta] =  useState(props.montaSet)
    const [conteudo, setConteudo] = useState([])
    const [descricao, setDescricao] = useState([])

    useEffect(() =>{
        const produtoInfo = localStorage.getItem('produtoInfo')
        if (produtoInfo != undefined && produtoInfo != null){
            const prodInfoJSON = JSON.parse(produtoInfo)
            setDescricao(prodInfoJSON.description.split('<br/>'))
        }

        if (props.content != undefined && props.content != null){
            setConteudo(props.content.split('<br/>'))
        }
    }, [props.content, localStorage.getItem('produtoInfo')])
    
    return (
        <div className='boxproduto-div' >
            <span className='boxproduto-text'>
                <p>{props.nome}</p>
            </span>
            <span className='boxproduto-item'>
                <ul className={inform}>
                {conteudo.map((c, index) =>(
                        <li className='texto-box-produtos' key={index}>{c}</li>
                        ))}
                </ul>
                <ul className={monta}>
                    {descricao.map((d, index) => (
                        <li className='texto-box-produtos' key={index}>{d}</li>
                    ))}
                </ul>
            </span>
        </div>
    )
}