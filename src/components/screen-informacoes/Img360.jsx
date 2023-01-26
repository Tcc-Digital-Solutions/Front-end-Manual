import '../../assets/css/css-informacoes/img360.css'
import ferramentaImg from '../../assets/img/06019G80E3-Bosch-GDR-120-LI-GSR-120-LI-Maleta-2 (1) 1.png'
import foco360img from '../../assets/img/360-graus 1.png'

export const Img360 = () => {
    return (
        <div className="img360-div" >
            <span className="img360-produto-name">Parafusadeira GSR 120-LI</span>
            <div className="img360-img-div">
                <img src={ferramentaImg} alt="" />
                <img className='img360-foto-360' src={foco360img} alt="" />
            </div>
            
        </div>
    )
}