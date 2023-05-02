import '../../styles/css-home/BoxCategoria.module.css'
import moldeImg1 from '../../../public/img/f12-furadeiras-menu.png'


export const BoxCategoria = (props) => {
    return (
        <div className="box-categoria-select-div" >
            <button className="box-categoria-select-button">
                <img className="box-categoria-select-img" src={moldeImg1} alt="" />
                <span className="box-categoria-select-text">{props.categoria}</span>
            </button>
        </div>
    )
}