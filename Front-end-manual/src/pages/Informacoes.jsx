import React, { useEffect, useState } from 'react';
import { BoxInformacoes } from '../components/screen-informacoes/BoxInformacoes';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';
import { useParams } from 'react-router-dom';
import { components } from 'react-select';

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

    const apiVideos = async() =>{
        const videos = (await fetch(`http://localhost:3000/api/videos/${id}`).then(res => res.json()))
        console.log(JSON.stringify(videos))
        if (videos){
            localStorage.setItem('videos', JSON.stringify(videos))
        }
    }

    const apiMontage = async() =>{
        const montage = (await fetch(`http://localhost:3000/api/montagem/${id}`).then(res => res.json()))
        if (montage){
            localStorage.setItem('montagem', JSON.stringify(montage))
            console.log(JSON.stringify(montage))
        }
    }

    useEffect(() => {
        let dadosPI = localStorage.getItem('produtoInfo')
        let dadosCD = localStorage.getItem('cards')
        let dadosP = localStorage.getItem('produto')
        let dadosV = localStorage.getItem('videos')
        let dadosM = localStorage.getItem('montagem')
        // fazer separado os ifs ? ** não esqueça dos subtitles pra pessoas cegas
        if (dadosPI != null && dadosCD != null && dadosP != null && dadosV != null && dadosM != null){
            if (dadosPI != undefined && dadosCD != undefined && dadosP != undefined && dadosV != undefined && dadosM != undefined){
                let infoProdutoInfo = JSON.parse(dadosPI)
                let infoCards = JSON.parse(dadosCD)
                let infoProduto = JSON.parse(dadosP)
                let infoVideos = JSON.parse(dadosV)
                let infoMontagem = JSON.parse(dadosM)

                if (infoProdutoInfo.fkProd == id && infoCards.fkProd == id && infoProduto.codeId == id && infoVideos.fkProd == id && infoMontagem.fkProd == id){
                    setProdInfo(infoProdutoInfo)
                    setCards(infoCards)
                    setProd(infoProduto)
                    setVideo(infoVideos)
                }
                else{
                    localStorage.removeItem('produto')
                    localStorage.removeItem('produtoInfo')
                    localStorage.removeItem('cards')
                    localStorage.removeItem('videos')
                    localStorage.removeItem('montagem')
                    apiProdutoInfo()
                    apiCards()
                    apiProduto()
                    apiVideos()
                    apiMontage()
                }
            }
            // quando troca de página essa regra não é efetiva, ele chega a puxar tudo denovo na api*****
            // deveria fazer a mesma coisa que quando atualiza e manter os fetchs que já haviam sido feitos
        }
        else{
            apiProdutoInfo()
            apiCards()
            apiProduto()
            apiVideos()
            apiMontage()
        }
    }, [])
    console.log(prodInfo)
    return(
        <>
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div"/>
            <BoxInformacoes prodInfo={prodInfo} card={card} prod={prod}/>
            <ButtonsBar />
             {/* Quando o id for mudado limpar os localstorage né? pq o dado pode não atualizar*/}
        </>
    )
}
// renderizar aqui a pagina de erro que nosso site já possui
export default Informaçoes;