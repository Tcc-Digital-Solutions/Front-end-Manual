import React, { useEffect, useState } from 'react';
import '../../assets/css/css_universal/Boxproduto.css';

export const Boxproduto = (props) => {
    const [inform] =  useState(props.informSet)
    const [monta] =  useState(props.montaSet)
    const [conteudo, setConteudo] = useState([])
    const [descricao, setDescricao] = useState([])

    useEffect(() =>{
        if (props.content != undefined){
            setConteudo(props.content.split('<br/>'))
            console.log(conteudo)
        }
        if (props.description != undefined){
            setDescricao(props.description.split('<br/>'))
            console.log(descricao)
        }

    })
// tá indo mas se coloca o  [] pra parar o loop infinito do useefect ele para de funcionar
    return (
        <div className='boxproduto-div' >
            {console.log('teste conteudo: ', conteudo)}
            {console.log('teste descricao: ', descricao)}
            <span className='boxproduto-text'>
                <p>{props.nome}</p>
            </span>
            <span className='boxproduto-item'>
                <ul className={inform}>
                {conteudo.map((c, index) =>(
                        <li className='texto-box-produtos' key={index}>{c}</li>
                        ))}
                </ul>
                {descricao.map((d, index) => (
                    <ul className={monta}>
                        <li className='texto-box-produtos' key={index}>{d}</li>
                        // esse tá passando vazio, precisa passar pro localstorage?
                    </ul>
                ))}
            </span>
        </div>
    )
}