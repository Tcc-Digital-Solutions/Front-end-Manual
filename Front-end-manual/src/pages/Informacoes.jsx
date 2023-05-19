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
        let dadosCD = localStorage.getItem('cards')
        let dadosP = localStorage.getItem('produto')

        if (dadosPI != null && dadosCD != null && dadosP != null){
            if (dadosPI != undefined && dadosCD != undefined && dadosP != undefined){
                let infoProdutoInfo = JSON.parse(dadosPI)
                let infoCards = JSON.parse(dadosCD)
                let infoProduto = JSON.parse(dadosP)

                if (infoProdutoInfo.fkProd == id && infoCards.fkProd == id && infoProduto.codeId == id){
                    setProdInfo(infoProdutoInfo[0])
                    setCards(infoCards)
                    setProd(infoProduto)
                }
                else{
                    localStorage.removeItem('produto')
                    localStorage.removeItem('produtoInfo')
                    localStorage.removeItem('cards')
                    apiProdutoInfo()
                    apiCards()
                    apiProduto()
                }
            }
            // quando troca de página essa regra não é efetiva, ele chega a puxar tudo denovo na api*****
            // deveria fazer a mesma coisa que quando atualiza e manter os fetchs que já haviam sido feitos
        }
        else{
            // aqui não era pra chamar né? era só pra setar os valores
            
            apiProdutoInfo()
            apiCards()
            apiProduto()
        }
    }, [])
    return(
        <>
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div"/>
            <BoxInformacoes prodInfo={prodInfo} card={card} prod={prod}/>
            {/* o button youtube tá pra cá, precisa resolver esse problema de passar pra la e ca pra fazer o fetch dele, */}
            {/* pegar o fetch dele como join na tabela product info ou product */}
            <ButtonsBar />
        </>
    )
}
//renderizar aqui a pagina de erro que nosso site já possui
export default Informaçoes;