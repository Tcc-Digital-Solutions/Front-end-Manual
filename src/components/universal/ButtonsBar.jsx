import '../../assets/css/css_universal/Buttons_bar.css'
import Acessibilidade from '../../assets/img/acessibilidade.png'
import { Link } from 'react-router-dom';

export const ButtonsBar = () => {
    return (
        <div className="buttons-bar-div" >
            <div className="buttons-bar-ilha">
                <img className='buttons-bar-acessibilidade-img' src={Acessibilidade} alt="" />
                <Link to={'/manual'} class="buttons-bar-click-link"><button class="buttons-bar-click" role="button">Manual</button></Link>  
                <Link to={'/montagem'} class="buttons-bar-click-link"><button class="buttons-bar-click" role="button">Montagem</button></Link>  
                <Link to={'/informacoes'} class="buttons-bar-click-link"><button class="buttons-bar-click" role="button">informações</button></Link>  
            </div>
        </div>
    )
}