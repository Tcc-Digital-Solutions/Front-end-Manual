import '../../assets/css/css_universal/Translate.css'
import '../../assets/css/css_universal/dropdown.css'
import translateImg from '../../assets/img/translate.png'
import { useState } from 'react'

export const Translate = () => {
    const [visible, setVisible] = useState("button-youtube-box-fechar")
    const [pressed, setPressed] = useState(false)
    const userLocale = navigator?.languages?.length ? navigator.languages[0] : navigator.language;
    console.log(userLocale);
    console.log(navigator.languages);


    const setMenuVisible = () => {
        pressed ? setVisible("button-youtube-box-fechar") : setVisible("button-youtube-box")
        setPressed(!pressed)
    }


    const puxarIdioma = (idioma) => {
        // window.location.reload(false);
        console.log(idioma);
    }
    return (
        <div className="translate-div">
            <button className='translate-button' onClick={() => setMenuVisible()}><img src={translateImg} alt="" /></button>
            <span className={visible}>

            </span>
        </div>
    )
}