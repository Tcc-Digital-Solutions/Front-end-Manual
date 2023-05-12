import React, { useEffect, useState } from 'react';
import { BoxInformacoes } from '../components/screen-informacoes/BoxInformacoes';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';
import { useParams } from 'react-router-dom';

const Informaçoes = () =>{
    const { id } = useParams()
    const [prod, setProd] = useState('')
    
    const apiProduto = async() => {
        const data = (await fetch(`http://localhost:3000/api/produto/${id}`).then(res => res.json()))
        if(data){
            localStorage.setItem('produto', JSON.stringify(data))
            setProd(data)
        }
        // aplicar local storage e dps ver como remover e quando
        // ele não tá puxando o dado quando carrega a primeira vez e quando salva o arquivo tbm
        // tratar pra quando nãoo achar o id ir para uma página de produto não encontrado
        // falta adicionar no banco as novas divs do site, descrição de montagem e conteúdo da embalagem
    }
    useEffect(() => {
            let dadosLS = localStorage.getItem('produto')
            console.log(dadosLS)
            if (dadosLS != null){
                let infoProduto = JSON.parse(dadosLS)
                if (infoProduto.idProd == id){
                    setProd(infoProduto.name)
                }
                else{
                    localStorage.removeItem('produto')
                    apiProduto()
                }
            }
            else{
                apiProduto()
            }
    }, [])
    return (
        <>
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div"/>
            <BoxInformacoes prod={prod} />
            <ButtonsBar />
        </>
    );
}
export default Informaçoes;