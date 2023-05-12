import '../../assets/css/css-home/Cardproduto.css'
import ferramenta from '../../assets/img/51-6YMcxPHL._AC_SX425_.jpg'
import { useNavigate } from "react-router-dom";


export const Cardproduto = ( props ) => {
    const navigate = useNavigate()
    const manual = () => {
        // # passar 0 id da furadeira que está sendo clicada
        navigate(`/informacoes/${id}`)
    }
    {console.log(props.allProdutos)}
    {console.log((typeof(props.allProdutos)))}
    // {console.log((props.allProdutos[0]['name']))}
    // {console.log((props.allProdutos[1]['name']))}
    return (
        <div className="Cardproduto-div" >
            {console.log('aq')}
            {console.log(props.fezFetch)}
            {/* {console.log(allProdutos)} */}
            {/* {props.allProdutos.map((prod, index) =>{ */}
                <span className='Cardproduto-div-02'>
                    <img className='img-card' src={ferramenta} alt="" />
                    {console.log('entrei')}
                    <span className='Cardproduto-div-03'>
                        <span className='Cardproduto-div-text'>Nome da Ferramenta</span>
                        <button onClick={manual} className='Cardproduto-button'>Manual</button>                    
                    </span>
                </span>
            {/* })} */}
            {/* // }):true} */}
        </div>
    )
}
// tava certo desde o começo, o problema é essa atualização da Pagination, atualizava olugar errado
// e ele só chegava aqui e não tinha o objeto do jeito que era pra tar...