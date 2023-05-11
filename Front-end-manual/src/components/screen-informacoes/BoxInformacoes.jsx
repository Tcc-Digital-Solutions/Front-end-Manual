import '../../assets/css/css-informacoes/BoxInformacoes.css';
import { Img360 } from '../screen-informacoes/Img360';
import { ButtonAbout } from './ButtonAbout';
import { Carouselinformacoes } from './Carouselinformacoes';
import { ButtonExperience } from '../universal/ButtonExperience';

export const BoxInformacoes = ({nomeProduto}) => {
    return (

        <div className="container-informacoes">
            <div className="BoxInformacoes-div" >
                <span className='span-informacoes-page'>
                <ButtonAbout/>
                </span>  
                <Img360 nomeProduto={nomeProduto}/>
                <Carouselinformacoes/>
                <ButtonExperience/>
            </div>
        </div>
    )
}