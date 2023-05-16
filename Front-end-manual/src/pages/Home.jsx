import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/universal/Navbar';
import { data } from 'jquery';

const Home = () =>{
    // aplicar local storage e dps ver como remover e quando ***
    // const [produtos, setProdutos] = useState('')
    // const apiProdutos = async() =>{
    //     const data = (await fetch('http://localhost:3000/api/produto_info').then(res => res.json()))
    //     localStorage.setItem('produto_info', JSON.stringify(data))
    //     console.log(data)
    //     setProdutos(data)
    // }
    // const [fezFetch, setFezFetch] = useState(false)
    // // talvez essa logiquinha não seja aplicável aqui porque ele nnão compararia o id da url, ver se vai ser home?
    // // e a ultima rota guardada no storage foi home? *****

    // useEffect(() =>{
    //     let dadosLS = localStorage.getItem('produto_info')
    //     console.log(dadosLS)
    //     if (dadosLS != null){
    //         let infoProdutos = JSON.parse(dadosLS)
    //         if (data === infoProdutos){
    //             setProdutos(data)
    //         }
    //         else{
    //             apiProdutos()
    //         }
    //     }
    //     else{
    //         apiProdutos()
    //         setFezFetch(true)

    //     // }
    // }, [])

    return (
        <>
            <Navbar menu='active-home' visible='button-menu-box' box='box-produtos-result' menuTrue='true' search="navbarsearch-div" nave="navbar-div" allProdutos={produtos} fezFetch={fezFetch}/>
        </>
    );
}
export default Home;
// Só tá buscando na api quando salva esse arquivo