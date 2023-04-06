import '../../assets/css/css_universal/Buttons_bar.css'
import {useNavigate } from 'react-router-dom';



export const ButtonsBar = () => {

    const navigate = useNavigate()


    return (
        <div className="buttons-bar-div" >
            <div className="buttons-bar-ilha">
               <button onClick={() => navigate('/manual')} className="buttons-bar-click" role="button">Manual</button>
                <button onClick={() => navigate('/montagem')} className="buttons-bar-click" role="button">Montagem</button>
                <button onClick={() => navigate('/informacoes')} className="buttons-bar-click" role="button">informações</button>
            </div>
        </div>
    )
}