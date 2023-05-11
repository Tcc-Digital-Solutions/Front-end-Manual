import '../../assets/css/css_universal/Screen-espera.css'
import '../../assets/css/css_universal/dropdown.css'
import bosch from '../../assets/img/loguinho.png'
import errorImg from '../../assets/img/ERROR.png'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Introducao } from './Introducao'
import { Speaker } from "../universal/Speaker";

export const ScreenEspera = () => {
    const [animado, setAnimado] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams();

    if (!animado) { 
        if (!id) {
            // const data = await fetch('http://localhost:3000/api/produtos').json()
            navigate('/home')
        }
        else if (id) {
            navigate('/informacoes/' + id)
        }
    }
        // *** quando pega direto de informações ele não faz a requisição, só se não tem nada na url
    setTimeout(() => {
        setAnimado(false)
    }, 2000); // fazer de acordo com a busca na api

    return (
        <div className="screnn-espera-div" >
            <img className={animado ? 'screnn-espera-img animar' : ' screnn-espera-img- '} src={bosch} alt="" />
            <div className={!animado ? 'screnn-espera-button- para' : 'screnn-espera-button'}>
                <span className="screnn-espera-text">
                    <Speaker>
                        <p>Nenhum código de produto encontrado na URL</p>
                        <p> Click em continuar para selecionar produto </p>
                    </Speaker>
                </span>
                <img className='screen-espera-img-error' src={errorImg} alt="" />
                <Introducao />
            </div>
        </div>
    )
}