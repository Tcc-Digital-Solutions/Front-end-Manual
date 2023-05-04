import '../../styles/css-crud/BoxPesquisaCrud.module.css'
import lupaImg from '../../../public/img/search.svg'

const BoxPesquisaCrud = () => {
    return (
        <div className="box-pesquisa-crud-div" >
            <span className="box-pesquisa-crud-span">
                <input className="box-pesquisa-crud-input" type="text" />
                <img src={lupaImg} style={{ width:'20px'}} alt="" />
            </span>
        </div>
    )
}
export default BoxPesquisaCrud