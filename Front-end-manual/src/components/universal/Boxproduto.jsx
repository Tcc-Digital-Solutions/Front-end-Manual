import React, { useEffect, useState } from 'react';
import '../../assets/css/css_universal/Boxproduto.css';

export const Boxproduto = (props) => {
    const [inform] =  useState(props.informSet)
    const [monta] =  useState(props.montaSet)
    const [conteudo, setConteudo] = useState([])
    const [descricao, setDescricao] = useState([])
    const [descjson, setDescjson] = useState()
    if (typeof window !== 'undefined') {
        let valor = localStorage.getItem('produtoInfo')
        if (valor != null){
            setDescjson(JSON.parse(valor.description))
        }
    }

    useEffect(() =>{
        if (props.content != undefined){
            setConteudo(props.content.split('<br/>'))
        }
        // e for daquele id buscado***
        if (descjson != undefined && descjson != null){
            setDescricao(descjson.split('<br/>'))
        }
    }, [props.content, descjson])
    
    return (
        <div className='boxproduto-div' >
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
                        <li className='texto-box-produtos'>{d}</li>
                        {/* // esse tá passando vazio, precisa passar pro localstorage? */}
                    </ul>
                ))}
            </span>
        </div>
    )
}