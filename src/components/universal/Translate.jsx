import '../../assets/css/css_universal/Translate.css'
import '../../assets/css/css_universal/dropdown.css'
import translateImg from '../../assets/img/chat-language.svg'
import {  useState } from 'react';
import Select from 'react-select'
import { Speaker } from './Speaker';
import { AltoContraste } from './AltoContraste';

export const Translate = () => {
    const [selectedOption, setSelectedOption] = useState('pt-PT');
    const [state,setState] = useState(false)
    const [visible, setVisible] = useState("translate-box-fechar")
    const [pressed, setPressed] = useState(false)

    const options = [
        { value: 'pt-PT', label: 'Português' },
        { value: 'en-US', label: 'English' },
        { value: 'fr-FR', label: 'Français' },
        { value: 'es-ES', label: 'Español' },
        { value: 'de-DE', label: 'Germany' },
        { value: 'ru-RU', label: 'Russian' },
        { value: 'jp-JP', label: 'Japanese' },
        { value: 'zh-HK', label: 'China' },
        { value: 'it-IT', label: 'Italiano' }
    ]

    const setMenuVisible = () => {
        pressed ? setVisible("translate-box-fechar") : setVisible("translate-box") ,setState(true)
        setPressed(!pressed)
        teste()
    }
    const teste = () =>{
        if (setVisible == "translate-box-fechar"){
        setState(false)
      }
    }

    return (
        <div className="translate-div">
            <Speaker value={selectedOption.value}></Speaker>
            <span className="translate-div-separet">
                <span className={visible}>
                    <Select placeholder='Linguagem'
                    isClearable={false}
                    onChange={setSelectedOption}
                    isSearchable={true}
                    options={options}  /> 
                </span>                  
                <button className='translate-button'  onClick={() => setMenuVisible()}><img src={translateImg} style={{ width:'30px'}} alt="" /></button>
            </span>
            <AltoContraste/>
        </div>
    )
}