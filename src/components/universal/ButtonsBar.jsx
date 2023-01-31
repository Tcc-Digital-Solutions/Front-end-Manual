import '../../assets/css/css_universal/Buttons_bar.css'
import { Link } from 'react-router-dom';
import { ButtonAcessibilidade } from './ButtonAcessibilidade';

export const ButtonsBar = () => {
    return (
        <div className="buttons-bar-div" >
            <div className="buttons-bar-ilha">
                <span className="buttons-bar-ilha-button-acessibilidade"> <ButtonAcessibilidade /></span>
                <Link to={'/manual'} class="buttons-bar-click-link"><button class="buttons-bar-click" role="button">Manual</button></Link>
                <Link to={'/montagem'} class="buttons-bar-click-link"><button class="buttons-bar-click" role="button">Montagem</button></Link>
                <Link to={'/informacoes'} class="buttons-bar-click-link"><button class="buttons-bar-click" role="button">informações</button></Link>
            </div>
        </div>
    )
}