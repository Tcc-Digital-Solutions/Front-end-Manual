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
    const [idioma, setIdioma] = useState('')
    
    // não precisa desses 3 fetchs, posso puxar tudo com releacionamento no prisma igual em montagem né?
    const apiProdutoInfo = async() => {
        // fazer try catch aqui e fazer condição no render, se der erro renderizar pra página de erro
        // fazer .catch retornar qual erro q deu, ver se isso não deve ser feito na horade charmar o método, tipo,
        // catch, setar alguma coisa no prouduto,se algumas coisas faltarem apenas dizer que não foi cadastrado
        const product_info = (await fetch(`http://localhost:3000/api/produto_info/${id}`).then(res => res.json()))
        console.log(product_info)
        if (product_info){
            localStorage.setItem('produtoInfo', JSON.stringify(product_info[0]))
            setProdInfo(product_info[0])
        }
    }
    const apiCards = async() =>{
        const cards = (await fetch(`http://localhost:3000/api/cards/${id}`).then(res => res.json()))
        console.log(cards)
        if (cards){
            localStorage.setItem('cards', JSON.stringify(cards))
            setCards(cards)
        }
    }
    // pra apresentação é melhor deixar as imagens aqui internamente?? e o caminho de acesso delas dentro do banco só?
    // pra não ter essa lentidao na hora de buscar a imagem
    // que tal puxar produto info e cards junto já que ambos possuem uma relação com a linguagem e na hora de verificar,
    // o localstorage pra fazer fetch denovo teria que comparar: o id na url é o mesmo? se nao, puxar o fetch de td... se sim, puxar o 
    // fetch apenas, sendo o mesmo id verificar se é a mesma linguagem, sendo a mesma lingugaem não mudar nada. Sendo o mesmo id mas
    // outra linguagem, teria que puxar apenas tabelas que possuem mudança devido a se texto como a cards e products info, agora,
    // produto não teria a necessidade de ser puxada novamente, as imagens e etc, continuariam as mesmas, ver esse caso em outras apis
   // pq, por exemplo, na montagem acho que só teria a necessidade de puxar denovo ao mudar a linguagem, a tabela 'Subtitle Montage'
    const apiProduto = async() =>{
        const product = (await fetch(`http://localhost:3000/api/produto/${id}`).then(res => res.json()))
        if (product){
            localStorage.setItem('produto', JSON.stringify(product))
            setProd(product)
        }
    }
    // ele não tá indo qnd clica no select e sim quando clica no display dele não só nas options
    const selectIdioma = document.querySelector('.select-idioma')
    console.log(selectIdioma)
    selectIdioma && selectIdioma.addEventListener('change', (event) => {
        setIdioma(localStorage.getItem('idioma'))
        // console.log(event.target.value)
    })

    // tem sempre que verificar nessas condições se o id da linguagem tbm continua sendo o mesmo
    // o fetch do video ficou bugado no front, pq tem 3 videos em pt-br e 2 em en-es pro mesmo prodiuto, 
    // apesar disso nn ser um problema acabou bugando o front, arrumar ***
    // isso só na parte mobile, que louco, compare e observe a parte desktop com a mobile
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

            if (infoCards[0].fkProd == id ){
                setCards(infoCards)
            }
            else{
                localStorage.removeItem('cards')
                apiCards()
            }
        }
        else{
            console.log('entrei aqui')
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
// cade os alts do s botoes?? da imagem da bosch, de cada comonnet, isso tem que estar feito pra fazer a tradução interna do i18next se não,
// isso não vai ajudar alguém cego
// renderizar aqui a pagina de erro que nosso site já possui ***
// outra coisa é que precisaficar atualizando a pagina quando um item é chamado diferente do swr que quando clica na página já chama...
export default Informaçoes;