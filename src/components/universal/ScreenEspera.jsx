import '../../assets/css/css_universal/Screen-espera.css'
import '../../assets/css/css_universal/dropdown.css'
import bosch from '../../assets/img/loguinho.png'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const ScreenEspera = () => {
    const [animado, setAnimado] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams();


    if (!animado) {
        if (!id) {
            window.location.reload(false);
        }
        if (id) navigate('/informacoes/' + id)
    };

    setTimeout(() => {
        setAnimado(false)
        console.log(animado)
    }, 3000);

    return (
        <div className="screnn-espera-div" >
            <img className={animado ? 'screnn-espera-img animar' : ' screnn-espera-img'} src={bosch} alt="" />
        </div>
    )
}