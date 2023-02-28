import '../../assets/css/css_universal/Buttons_bar.css'
import { Link } from 'react-router-dom';
import { ButtonAcessibilidade } from './ButtonAcessibilidade';

export const ButtonsBar = () => {
    return (
        <div className="buttons-bar-div" >
            <div className="buttons-bar-ilha">
                <span className="buttons-bar-ilha-button-acessibilidade"> <ButtonAcessibilidade /></span>
                <Link to={'/manual'} className="buttons-bar-click-link"><button className="buttons-bar-click" role="button">Manual</button></Link>
                <Link to={'/montagem'} className="buttons-bar-click-link"><button className="buttons-bar-click" role="button">Montagem</button></Link>
                <Link to={'/informacoes'} className="buttons-bar-click-link"><button className="buttons-bar-click" role="button">informações</button></Link>
            </div>
        </div>
    )
}