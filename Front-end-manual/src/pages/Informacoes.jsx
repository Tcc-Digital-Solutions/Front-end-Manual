import React, { useEffect, useState } from 'react';
import { BoxInformacoes } from '../components/screen-informacoes/BoxInformacoes';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';
import { useParams } from 'react-router-dom';

const Informaçoes = () =>{
    const { id } = useParams()
    const [prodInfo, setProdInfo] = useState('')
    const [card, setCards] = useState('')
    const [prod, setProd] = useState('')
    
    const apiProdutoInfo = async() => {
        // fazer try catch aqui e fazer condição no render, se der erro renderizar pra página de erro
        const product_info = (await fetch(`http://localhost:3000/api/produto_info/${id}`).then(res => res.json()))
        if (product_info){
            localStorage.setItem('produtoInfo', JSON.stringify(product_info[0]))
            setProdInfo(product_info[0])
        }
    }
    const apiCards = async() =>{
        const cards = (await fetch(`http://localhost:3000/api/cards/${id}`).then(res => res.json()))
        if (cards){
            localStorage.setItem('cards', JSON.stringify(cards))
            setCards(cards)
        }
    }
    const apiProduto = async() =>{
        const product = (await fetch(`http://localhost:3000/api/produto/${id}`).then(res => res.json()))
        if (product){
            localStorage.setItem('produto', JSON.stringify(product))
            setProd(product)
        }
    }

    useEffect(() => {
        let dadosPI = localStorage.getItem('produtoInfo')
        if (dadosPI != null && dadosPI != undefined && dadosPI != "undefined"){
            let infoProdutoInfo = JSON.parse(dadosPI)
            if (infoProdutoInfo.fkProd == id ){
                setProdInfo(infoProdutoInfo)
            }
            else{
                localStorage.removeItem('produtoInfo')
                apiProdutoInfo()
            }
        }
        else{
            apiProdutoInfo()
        }

        let dadosCD = localStorage.getItem('cards')
        if (dadosCD != null && dadosCD != undefined && dadosCD != "undefined"){
            let infoCards = JSON.parse(dadosCD)
            if (infoCards.fkProd == id ){
                setCards(infoCards)
            }
            else{
                localStorage.removeItem('cards')
                apiCards()
            }
        }
        else{
            apiCards()
        }

        let dadosP = localStorage.getItem('produto')
        if (dadosP != null && dadosP != undefined && dadosP != "undefined"){
            let infoProduto = JSON.parse(dadosP)
            if (infoProduto.codeId == id ){
                setProd(infoProduto)
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

    return(
        <>
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div"/>
            {/* pra ele parar de pegar denovo toda vez que mudo de pagina puxar o card devo fazer a mesma condição do localstorage de prodInfo? */}
            <BoxInformacoes prodInfo={prodInfo} card={card} prod={prod}/>
            <ButtonsBar />
        </>
    )
}
// renderizar aqui a pagina de erro que nosso site já possui ***
// outra coisa é que precisaficar atualizando a pagina quando um item é chamado diferente do swr que quando clica na página já chama...
export default Informaçoes;