import '../../assets/css/css-informacoes/BoxInformacoes.css';
import { Img360 } from '../screen-informacoes/Img360';
import { Carouselinformacoes } from './Carouselinformacoes';

export const BoxInformacoes = () => {
    return (

        <div className="container-informacoes">
            <div className="BoxInformacoes-div" >
                <Carouselinformacoes/>
                <Img360/>
                <Carouselinformacoes/>
            </div>
        </div>
    )
}