import '../../assets/css/css_universal/ButtonExperience.css'
import fecharImg from '../../assets/img/close.svg'
import { useState } from 'react'
// import furadeira from '../../assets/audio/SOM - FURADEIRA... (320 kbps).mp3'

export const ButtonExperience = (props) => {
    const [visible, setVisible] = useState("ButtonExperience-box-fechar")
    const [pressed, setPressed] = useState(false)

    const setMenuVisible = () => {
        pressed ? setVisible("ButtonExperience-box-fechar") : setVisible("ButtonExperience-box")
        setPressed(!pressed)
    }
    return (
        <div className="ButtonExperience-div" >
            <button className='ButtonExperience-button' onClick={() => setMenuVisible()}>Experiência Sonora</button>
            <span className={visible}>
                <button className="ButtonExperience-button-x" id='button-lado' onClick={() => setMenuVisible()}><img className="ButtonExperience-button-x-img" src={fecharImg} alt="" /></button>
                <div className="ButtonExperience-button-scroll">
                    <span className="ButtonExperience-text">Som Reproduzido pela ferramenta ligada em uso</span>
                    <audio id="myAudio" controls src={props.somProduto}>
                        {/* <source src={props.somProduto} type="audio/mpeg"/> */}
                        {console.log('aaaaa', props.somProduto)}
                    </audio>
                </div>
            </span>
        </div>
    )
}
