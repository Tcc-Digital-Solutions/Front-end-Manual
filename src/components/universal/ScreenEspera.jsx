import '../../assets/css/css_universal/Screen-espera.css'
import '../../assets/css/css_universal/dropdown.css'
import bosch from '../../assets/img/loguinho.png'
import errorImg from '../../assets/img/ERROR.png'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Introducao } from './Introducao'
import { Speaker } from "../universal/Speaker";

export const ScreenEspera = () => {
    const [animado, setAnimado] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams();


    if (!animado) {
        // window.location.href="https://witty-dune-0fc167910.3.azurestaticapps.net/"; 
        navigate("informacoes/" + id)
    };


    setTimeout(() => {
        setAnimado(false)
        console.log(animado)
    }, 3000);

    return (
        <div className="screnn-espera-div" >
            <img className={animado ? 'screnn-espera-img animar' : ' screnn-espera-img- '} src={bosch} alt="" />
        </div>
    )
}
