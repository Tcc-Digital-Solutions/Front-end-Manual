import '../../styles/css_universal/Introducao.module.css'
import HubTeste from './HubTeste';


const Introducao = (props) => {

    return (
        <div className="Introducao-div" >
            <button className='Introducao-button' onClick={() => proosScreen()}>Continuar</button>
            <HubTeste/>
        </div>
    )
}
export default Introducao
