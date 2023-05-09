import '../../assets/css/css_universal/Screen-espera.css'
import '../../assets/css/css_universal/dropdown.css'
import bosch from '../../assets/img/loguinho.png'
import errorImg from '../../assets/img/ERROR.png'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Introducao } from './Introducao'
import { Speaker } from "../universal/Speaker";
import useSWR from 'swr';
// react load

export const ScreenEspera = () => {
    const [animado, setAnimado] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams();
    
    // const buscar_id = (busca, id) =>{
    //     const fetcher = (...args) => fetch(...args, { method: 'GET' }).then(res => res.json())
    //     const { data, error, isLoading } = useSWR(`http://localhost:3000/api/${busca}/${id}`, fetcher)
    //     if ( error ) return <div>falhou ao carregar</div>
    //     if ( isLoading ) return <div>carregando...</div>// mostrar nossa página de carregamento
    //     console.log(data)
    // }


        if (!animado) { 
            if (!id) {
                console.log('não passe id')
                const data =  fetch('http://localhost:3000/api/produtos/',{
                    method: 'GET',
                    headers: {"Content-Type": "application/json"}  
                })
                navigate('/home')
            }
            else if (id) {
                console.log("passei id")
                const data =  fetch(`http://localhost:3000/api/produto/${id}`,{
                    method: 'GET',
                    headers: {"Content-Type": "application/json"}  
                })
                navigate('/informacoes/' + id)
            }
        }
    setTimeout(() => {
        setAnimado(false)
    }, 2000); // fazer de acordo com a busca na api
    
    return (
        <div className="screnn-espera-div" >
            <img className={animado ? 'screnn-espera-img animar' : ' screnn-espera-img- '} src={bosch} alt="" />
            <div className={!animado ? 'screnn-espera-button- para' : 'screnn-espera-button'}>
                <span className="screnn-espera-text">
                    <Speaker>
                        <p>Nenhum código de produto encontrado na URL</p>
                        <p> Click em continuar para selecionar produto </p>
                    </Speaker>
                </span>
                <img className='screen-espera-img-error' src={errorImg} alt="" />
                <Introducao />
            </div>
        </div>
    )
}