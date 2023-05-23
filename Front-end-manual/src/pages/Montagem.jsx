import React, { useEffect, useState } from 'react';
import { BoxMontagem } from '../components/screen-montagem/BoxMontagem';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';
import { useParams } from 'react-router-dom';

const Montagem = () => {
    const { id } = useParams()
    const [montagem, setMontagem] = useState('')

    const apiMontage = async() =>{
        const montage = (await fetch(`http://localhost:3000/api/montagem/${id}`).then(res => res.json()))
        if (montage){
            localStorage.setItem('montagem', JSON.stringify(montage))
            setMontagem(montage)
        }
    }

    const apiProdutoInfo = async() => {
        // fazer try catch aqui e fazer condição no render, se der erro renderizar pra página de erro
        const product_info = (await fetch(`http://localhost:3000/api/produto_info/${id}`).then(res => res.json()))
        if (product_info){
            localStorage.setItem('produtoInfo', JSON.stringify(product_info[0]))
        }
    }

    useEffect(() => {
        let dadosM = localStorage.getItem('montagem')
        if (dadosM != null && dadosM != undefined && dadosM != 'undefined'){
            let infoMontagem = JSON.parse(dadosM)
            if (infoMontagem[0] && infoMontagem[0].montage.fkProd == id){
                setMontagem(infoMontagem)
            }
            else{
                localStorage.removeItem('montagem')
                apiMontage()
            }
        }
        else{
            apiMontage()
        }

        let dadosPI = localStorage.getItem('produtoInfo')
        if (dadosPI != null && dadosPI != undefined && dadosPI != 'undefined'){
            let infoProdutoInfo = JSON.parse(dadosPI)
            if (infoProdutoInfo.fkProd != id){
                localStorage.removeItem('produtoInfo')
                apiProdutoInfo()
            }
        }
        else{
            apiProdutoInfo()
        }
    }, [])

    return (
        <>
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div"/>
            <BoxMontagem montagem={montagem}/>
            <ButtonsBar />
        </>
    );
}
export default Montagem;