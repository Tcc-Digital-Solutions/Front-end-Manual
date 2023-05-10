import React, { useEffect } from 'react';
import { BoxInformacoes } from '../components/screen-informacoes/BoxInformacoes';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';
import { useParams } from 'react-router-dom';

const Informaçoes = () =>{
    const { id } = useParams();

    useEffect(() => {
        (async function (){
            const data = await (await fetch(`http://localhost:3000/api/produto/${id}`)).json()
            console.log(data)
        })()
    })
    return (
        <>
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div"/>
            <BoxInformacoes />
            <ButtonsBar />
        </>
    );
}
export default Informaçoes;