import '../../assets/css/css_universal/Buttons_bar.css'
import { Link, useNavigate } from 'react-router-dom';
import { ButtonAcessibilidade } from './ButtonAcessibilidade';




export const ButtonsBar = () => {

    // const [exibir,setExibir] = useState(false);
    const navigate = useNavigate()

// const sleep = ms => new Promise(r => setTimeout(r, ms));
//     const teste = async() => {
//         await sleep(2000)
//         setExibir(true)
//     }
   
//     teste()

    return (
        <div className="buttons-bar-div" >
            <div className="buttons-bar-ilha">
                <span className="buttons-bar-ilha-button-acessibilidade"> <ButtonAcessibilidade /></span>
                {/* <Link to={'/manual'} className="buttons-bar-click-link"><button className="buttons-bar-click" role="button">Manual</button></Link> */}
               <button onClick={() => navigate('/manual')} className="buttons-bar-click" role="button">Manual</button>
                <button onClick={() => navigate('/montagem')} className="buttons-bar-click" role="button">Montagem</button>
                <button onClick={() => navigate('/informacoes')} className="buttons-bar-click" role="button">informações</button>
            </div>

            {/* {exibir?  */}
            {/* <VLibras forceOnload={true}  /> */}
            {/* :null} */}
        </div>
    )
}