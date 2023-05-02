import '../../styles/css-crud/ButtonLogoff.module.css'
import logoffImg from '../../../public/img/logout.svg'

export const ButtonLogoff = () => {
    return (
        <div className="button-logoff-div" >
            <button className="button-logoff-button" ><img src={logoffImg} alt="" /></button>
        </div>
    )
}