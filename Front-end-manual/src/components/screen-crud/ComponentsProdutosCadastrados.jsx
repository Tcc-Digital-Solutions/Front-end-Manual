import '../../assets/css/css-crud/componentsProdutosCadastrados.css'
import { BoxEditProduto } from './BoxEditProduto'
import { BoxPesquisaCrud } from './BoxPesquisaCrud'
import useSWR from 'swr'

export const ComponentsProdutosCadastrados = () => {
    const fetcher  = (...args) => fetch(...args, { method: 'GET' }).then(res => res.json())
    const { data, error, isLoading } = useSWR('http://localhost:3000/api/produtos', fetcher)

    if ( error ) return <div>falhou ao carregar</div>
    if ( isLoading ) return <div>carregando...</div> /* mostrar nossa página de carregamento */

    return (
        <div className="components-Produtos-Cadastrados-div" >
            <BoxPesquisaCrud/>
            <span className="components-Produtos-Cadastrados-div-produto">
                { data.map((p) => (
                    <BoxEditProduto produtoname={p.name}/>
                ))}
            </span>
        </div>
    )
}