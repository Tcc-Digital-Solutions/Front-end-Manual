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
        const product_info = (await fetch(`http://localhost:3000/api/produto_info/${id}`).then(res => res.json()))
        if (product_info){
            localStorage.setItem('produtoInfo', JSON.stringify(product_info[0]))
            setProdInfo(product_info[0])
        }
    }
    const apiCards = async() =>{
        const cards = (await fetch('http://localhost:3000/api/cards').then(res => res.json()))
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
    return (
        <>
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div"/>
            <BoxInformacoes prodInfo={prodInfo} card={card} prod={prod}/>
            {/* se não achar as informações principais não renderizar essa página e sim uma de erro(); */}
            {/* colocar o link real do icone e não o icone de hospedagem do nosso site na vercel */}
            {/* tá puxando o card do lugar errado ele não tá pegando do id certo? */}
            {/* no box produto tá faltando passar as coisas pra montagem */}
{/* 
            o button youtube tá pra cá, precisa resolver esse problema de passar pra la e ca pra fazer o fetch dele,
            pegar o fetch dele como join na tabela product info ou product */}
            <ButtonsBar />
        </>
    );
}
export default Informaçoes;