import React, { useEffect, useState } from 'react';
import { BoxInformacoes } from '../components/screen-informacoes/BoxInformacoes';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';
import { useParams } from 'react-router-dom';

const Informaçoes = () =>{
    const { id } = useParams();
    const [nome, setNome] = useState('')

    const apiProduto = async() => {
        const data = (await fetch(`http://localhost:3000/api/produto/${id}`).then(res => res.json()))
            localStorage.setItem('produto', JSON.stringify(data))
            setNome(data['name'])
    }

    useEffect(() => {
        (async function (){
            //antes de consultar a api, verificar a localStorage
            //SE o ID na url (/1) é o mesmo do produto que está salvo na localStorage
            let dadosLS = localStorage.getItem('produto')
            console.log(dadosLS)
            if (dadosLS != null){
                let infoProduto = JSON.parse(dadosLS)
                if (infoProduto.idProd == id){
                    setNome(infoProduto.name)
                }
                else{
                    apiProduto()
                }
            }
            else{
                apiProduto()
            }
            
        })()
        // let prods = () => {
        //     return fetch(`http://localhost:3000/api/produto/${id}`)
        //     .then(res => {
        //         res.json()
        //     })
        // }
    }, [])
    // quando atualiza a página ele puxa duas vezes e quando salva o arquivo ele puxa uma só****** resolver lulu
    // aplicar local storage e dps ver como remover
    return (
        <>
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div"/>
            <BoxInformacoes nomeProduto={nome} />
            <ButtonsBar />
        </>
    );
}
export default Informaçoes;