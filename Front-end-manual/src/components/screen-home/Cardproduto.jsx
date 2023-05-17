import '../../assets/css/css-home/Cardproduto.css'
import ferramenta from '../../assets/img/51-6YMcxPHL._AC_SX425_.jpg'
import { useNavigate } from "react-router-dom";


export const Cardproduto = ( props ) => {
    const navigate = useNavigate()
    const manual = () => {
        // # passar 0 id da furadeira que está sendo clicada
        navigate(`/informacoes/${id}`)
    }
    return (
        <div className="Cardproduto-div" >
            {props.prodsInfo && props.prodsInfo.map((p, index) => (
                <span className='Cardproduto-div-02'>
                    <img className='img-card' src={ferramenta} alt="" />
                    <span className='Cardproduto-div-03'>
                        <span className='Cardproduto-div-text' key={index}>{p.name}</span>
                        <button onClick={manual} className='Cardproduto-button'>Manual</button>                    
                    </span>
                </span>
            ))}
        </div>
    )
}
// tava certo desde o começo, o problema é essa atualização da Pagination, atualizava olugar errado
// e ele só chegava aqui e não tinha o objeto do jeito que era pra tar...