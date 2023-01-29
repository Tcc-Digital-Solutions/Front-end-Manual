import '../../assets/css/css_universal/Screnn-espera.css'
import '../../assets/css/css_universal/dropdown.css'
import bosch from '../../assets/img/loguinho.png'
import { useState } from 'react';
import {Introducao} from './Introducao'

export const ScreenEspera = () => {
    const [animado, setAnimado] = useState(true)
    const userLocale = navigator?.languages?.length ? navigator.languages[0] : navigator.language;

    setTimeout(() => {
        setAnimado(false)
        console.log(animado)
    }, 5000);

    return (
        <div className="screnn-espera-div" >
            <img className={animado ? 'screnn-espera-img animar' : ' screnn-espera-img'} src={bosch} alt="" />
            <div className={!animado ? 'dropdown' : 'dropdown hide'}>
                <Introducao cod='5645445'/>
            </div>
        </div>
    )
}