import '../../assets/css/css_universal/AltoContraste.css'
import imgsunMoon from '../../assets/img/sun-moon.svg'
import { useState } from 'react';


export const AltoContraste = (props) => {
    const [visible, setVisible] = useState("AltoContraste-box-fechar")
    const [pressed, setPressed] = useState(false)

    console.log(props.text)


    const setMenuVisible = () => {
        pressed ? setVisible("AltoContraste-box-fechar") : setVisible("AltoContraste-box")
        setPressed(!pressed)
    }
    

    return (
        <div className="AltoContraste-div">
            <span className={visible}>
                foyfsyusfpyicsyifsy
            </span>
            <button className='AltoContraste-button'  onClick={() => setMenuVisible()}><img src={imgsunMoon} style={{ width:'30px'}} alt="" /></button>
        </div>
    )
}