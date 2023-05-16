import '../../assets/css/css-informacoes/BoxInformacoes.css';
import { Img360 } from '../screen-informacoes/Img360';
import { ButtonAbout } from './ButtonAbout';
import { Carouselinformacoes } from './Carouselinformacoes';
import { ButtonExperience } from '../universal/ButtonExperience';

export const BoxInformacoes = (props) => {
    return (
        <div className="container-informacoes">
            <div className="BoxInformacoes-div" >
                <span className='span-informacoes-page'>
                <ButtonAbout prodInfo={props.prodInfo}/>
                </span>  
                <Img360 prodInfo={props.prodInfo} prod={props.prod}/>
                <Carouselinformacoes card={props.card}/>
                <ButtonExperience somProduto={props.prod.audio} nome={props.prodInfo.name}/>
            </div>
        </div>
    )
}