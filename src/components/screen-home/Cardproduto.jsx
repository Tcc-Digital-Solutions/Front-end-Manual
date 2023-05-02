import '../../assets/css/css-home/Cardproduto.css'
import ferramenta from '../../assets/img/51-6YMcxPHL._AC_SX425_.jpg'
import { useNavigate } from "react-router-dom";


export const Cardproduto = (props) => {
    const navigate = useNavigate()

    const manual = () => {
        navigate('/informacoes/67765')
    }

    return (
        <div className="Cardproduto-div" >
            <span className='Cardproduto-div-02'>
                <img className='img-card' src={ferramenta} alt="" />
                <span className='Cardproduto-div-03'>
                    <span className='Cardproduto-div-text'>GSB 13 RE PROFESSIONAL</span>
                    <button onClick={manual} className='Cardproduto-button'>Manual</button>                    
                </span>
            </span>
        </div>
    )
}