import '../../assets/css/css_universal/ButtonAcessibilidade.css'
import Acessibilidade from '../../assets/img/acessibilidade.png'


export const ButtonAcessibilidade = () => {

    return (
        <div className="button-acessibilidade-div" >
            <button className="button-acessibilidade-button"><img className='button-acessibilidade-img' src={Acessibilidade} alt="" /></button>
        </div>
    )
}