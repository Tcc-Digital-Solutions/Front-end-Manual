import '../../assets/css/css_universal/Introducao.css'
import { useNavigate } from "react-router-dom";

export const Introducao = (props) => {
    const navigate = useNavigate();

    const proosScreen = () => {
        navigate("/home")

    }

    return (
        <div className="Introducao-div" >
            <button className='Introducao-button' onClick={() => proosScreen()}>Continuar</button>
        </div>
    )
}