import '../../assets/css/css_universal/Screen-espera.css'
import '../../assets/css/css_universal/dropdown.css'
import bosch from '../../assets/img/loguinho.png'
import errorImg from '../../assets/img/ERROR.png'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Introducao } from './Introducao'
import { Speaker } from "../universal/Speaker";
import { useSWR } from "swr";

export const ScreenEspera = () => {

    const fetcher = (...args) => fetch(...args, { method: 'GET' }).then(res => res.json())
    const { data, error, loading } = useSWR('http://localhost:3000/api/produtos/{}')

    const [animado, setAnimado] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams();

    if (!animado) { 
        if (!id) {
            navigate('/home')
            // window.location.reload(false);
        }
        if (id) {

            navigate('/informacoes/' + id)
        }

    };

    setTimeout(() => {
        setAnimado(false)
        console.log(animado)
    }, 3000);

    return (
        <div className="screnn-espera-div" >
            <img className={animado ? 'screnn-espera-img animar' : ' screnn-espera-img- '} src={bosch} alt="" />
            <div className={!animado ? 'screnn-espera-button- para' : 'screnn-espera-button'}>
                <span className="screnn-espera-text">
                    <Speaker>
                        <p>Nenhum código de produto encontrado na Url</p>
                        <p> Click em continuar  para selecionar produto </p>
                    </Speaker>
                </span>
                <img className='screen-espera-img-error' src={errorImg} alt="" />
                <Introducao />
            </div>
        </div>
    )
}