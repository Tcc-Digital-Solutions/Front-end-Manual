import '../../assets/css/css_universal/ButtonAcessibilidade.css'
import Acessibilidade from '../../assets/img/acessibilidade.png'
import { useState } from 'react'

export const ButtonAcessibilidade = () => {

    const [visible, setVisible] = useState("button-acessibilidade-box-fechar")
    const [pressed, setPressed] = useState(false)

    const setMenuVisible = () => {
        pressed ? setVisible("button-acessibilidade-box-fechar") : setVisible("button-acessibilidade-box")
        setPressed(!pressed)
    }

    return (
        <div className="button-acessibilidade-div" >
            <button className="button-acessibilidade-button" onClick={() => setMenuVisible()} onBlur={() => setMenuVisible(false)}><img className='button-acessibilidade-img' src={Acessibilidade} alt="" /></button>
            <span  className={visible}>
                <span className="button-acessibilidade-text">Acessibilidades</span>
                <span className="button-acessibilidade-button-div">
                    <button  className="button-acessibilidade-button-active">Leitor de texto</button>
                    <button   className="button-acessibilidade-button-active">Alto contraste</button>                    
                </span>

            </span>
        </div>
    )
}