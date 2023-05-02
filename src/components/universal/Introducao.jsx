import '../../styles/css_universal/Introducao.module.css'
import { HubTeste } from './HubTeste';


export const Introducao = (props) => {

    return (
        <div className="Introducao-div" >
            <button className='Introducao-button' onClick={() => proosScreen()}>Continuar</button>
            <HubTeste/>
        </div>
    )
}
