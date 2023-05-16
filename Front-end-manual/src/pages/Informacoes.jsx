import React, { useEffect, useState } from 'react';
import { BoxInformacoes } from '../components/screen-informacoes/BoxInformacoes';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';
import { useParams } from 'react-router-dom';

const Informaçoes = () =>{
    const { id } = useParams()
    const [prod, setProd] = useState('')
    const [card, setCards] = useState('')
    
    const apiProdutoInfo = async() => {
        const product_info = (await fetch(`http://localhost:3000/api/produto_info/${id}`).then(res => res.json()))
        if(product_info){
            localStorage.setItem('produto', JSON.stringify(product_info))
            setProd(product_info[0])
        }
    }
    const apiCards = async() =>{
        const cards = (await fetch('http://localhost:3000/api/cards').then(res => res.json()))
        if (cards){
            localStorage.setItem('cards', JSON.stringify(cards))
            setCards(cards)
        }
    }
    // aplicar local storage e dps ver como remover e quando
    // ele não tá puxando o dado quando carrega a primeira vez e quando salva o arquivo tbm
    // tratar pra quando nãoo achar o id ir para uma página de produto não encontrado

    useEffect(() => {
        let dadosPI = localStorage.getItem('produto')
        let dadosCD = localStorage.getItem('cards')
        if (dadosPI != null && dadosCD != null ){
            let infoProduto = JSON.parse(dadosPI)
            let infoCards = JSON.parse(dadosCD)

            if (infoProduto.fkProd == id && infoCards.fkProd == id){
                setProd(infoProduto[0])
                setCards(infoCards)
            }
            else{
                localStorage.removeItem('produto')
                localStorage.removeItem('cards')
                apiProdutoInfo()
                apiCards()
            }
        }
        else{
            apiProdutoInfo()
            apiCards()
        }
    }, [])
    return (
        <>
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div"/>
            <BoxInformacoes prod={prod} card={card}/>
            <ButtonsBar />
        </>
    );
}
export default Informaçoes;