import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/universal/Navbar';
import { data } from 'jquery';

const Home = () =>{
    // aplicar local storage e dps ver como remover e quando ***
    // ver se o que tem na pagina de iformação tem aqui
    // fazer o restante do crud
    const [prodsInfo, setProdsInfo] = useState('')
    const [subcategorias, setSubcategorias] = useState('')
    
    const apiProdutosInfo = async() =>{
        const product_info = (await fetch('http://localhost:3000/api/produtos_info').then(res => res.json()))
        if (product_info){
            localStorage.setItem('produtosInfo', JSON.stringify(product_info))
            setProdsInfo(product_info)
        }
    }
    // const apiSubcategories= async() =>{
    //     const subcategories = (await fetch('http://localhost:3000/api/subcategories').then(res => res.json()))
    //     if (subcategories){
    //         localStorage.setItem('subcategories', JSON.stringify(subcategories))
    //         setSubcategorias(subcategories)
    //     }
    // }
    // talvez essa logiquinha não seja aplicável aqui porque ele nnão compararia o id da url, ver se vai ser home?
    // e a ultima rota guardada no storage foi home? *****, fazer a lógica pra ele mudar apenas se tiver alguma alteracao

    useEffect(() =>{
        // let dadosPIs = localStorage.getItem('produtosInfo')
        apiProdutosInfo()
        // apiSubcategories()
        // if (dadosPIs == null){
        //     // let infoProdutosInfo = JSON.parse(dadosPIs)
        //     // if (product_info === infoProdutosInfo){
        //     //     setProdsInfo(product_info)
        //     // }
        //     // else{
        //     //     localStorage.removeItem('produtosInfo')
        //         apiProdutosInfo()
        //     // }
        // }
        // else{
        //     apiProdutosInfo()
        // }
    }, [])

    return (
        <>
            <Navbar menu='active-home' visible='button-menu-box' box='box-produtos-result' menuTrue='true' search="navbarsearch-div" nave="navbar-div" prodsInfo={prodsInfo}/>
        </>
    );
}
export default Home;