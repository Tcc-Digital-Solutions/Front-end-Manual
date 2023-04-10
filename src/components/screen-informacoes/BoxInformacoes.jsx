import '../../assets/css/css-informacoes/BoxInformacoes.css';
import { Img360 } from '../screen-informacoes/Img360';
import { ButtonAbout } from './ButtonAbout';
import { Carouselinformacoes } from './Carouselinformacoes';

export const BoxInformacoes = () => {
    return (

        <div className="container-informacoes">
            <div className="BoxInformacoes-div" >
                <span style={{width: '320px',height: '479px'}}>
                <ButtonAbout/>
                </span>
                <Img360/>
                <Carouselinformacoes/>
            </div>
        </div>
    )
}