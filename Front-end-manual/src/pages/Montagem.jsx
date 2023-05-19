import React, { Component, useEffect, useState } from 'react';
import { BoxMontagem } from '../components/screen-montagem/BoxMontagem';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';

const Montagem = () =>{
    const [description, setDescrition] = useState()

    useEffect(() => {
        const produtoInfo = localStorage.getItem('produtoInfo')
        if (produtoInfo != undefined && produtoInfo != null){
            const prodInfoJSON = JSON.parse(produtoInfo)
            setDescrition(prodInfoJSON.description.split('<br/>'))
        }
        
    },[localStorage.getItem('produtoInfo')])
    // console.log('descricao', description.description)
    return (
        <>
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div"/>
            <BoxMontagem />
            <ButtonsBar />
        </>
    );
}

export default Montagem;