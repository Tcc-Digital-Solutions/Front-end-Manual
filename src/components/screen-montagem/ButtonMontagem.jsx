import '../../assets/css/css-montagem/ButtonMontagem.css'
import config from '../../assets/img/config.png'
import { useState ,useEffect} from 'react'
import { Boxproduto } from '../universal/Boxproduto'

export const ButtonMontagem = () => {
    const { innerWidth: width, innerHeight: height } = window;
    const [visible, setVisible] = useState("ButtonMontagem-box")
    const [pressed, setPressed] = useState(false)

    const setMenuVisible = () => {
        pressed ? setVisible("ButtonMontagem-box-fechar") : setVisible("ButtonMontagem-box")
        setPressed(!pressed)
    }

    useEffect(() => {
        if (innerWidth < 1151){
            setVisible('ButtonMontagem-box-fechar')
        }
    },[])


    return (
        <div className="ButtonMontagem-div" >
            <button className='ButtonMontagem-button' onClick={() => setMenuVisible()}><img src={config} alt="" width={30} /></button>
            <span className={visible}>
                <Boxproduto nome='DESCRIÇÃO DE MONTAGEM' montaSet='components-box-produtos' informSet='components-box-produtos-hide'/>
            </span>
        </div>
    )
}
