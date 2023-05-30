import '../../assets/css/css-home/Cardproduto.css'
import { useNavigate } from "react-router-dom";

export const Cardproduto = ( props ) => {
    const navigate = useNavigate()
    const manual = () => {
        navigate(`/informacoes/${props.fkProd}`)
    }
    return (
        <>
            <div className="Cardproduto-div" >
                <span className='Cardproduto-div-02'>
                    {/* e a legenda dessa imagem? */}
                    <img className='img-card' src={props.foto} alt="" />
                    <span className='Cardproduto-div-03'>
                        <span className='Cardproduto-div-text'>{props.nome}</span>
                        <button onClick={manual} className='Cardproduto-button'>Manual</button>                    
                    </span>
                </span>
            </div>
        </>
    )
}
// tava certo desde o começo, o problema é essa atualização da Pagination, atualizava olugar errado
// e ele só chegava aqui e não tinha o objeto do jeito que era pra tar...