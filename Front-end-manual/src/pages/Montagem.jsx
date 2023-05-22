import React, { useEffect, useState } from 'react';
import { BoxMontagem } from '../components/screen-montagem/BoxMontagem';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { Navbar } from '../components/universal/Navbar';
import { useParams } from 'react-router-dom';

const Montagem = () => {
    const { id } = useParams()
    const [montagem, setMontagem] = useState('')
    const apiMontage = async() =>{
        const montage = (await fetch(`http://localhost:3000/api/montagem/${id}`).then(res => res.json()))
        if (montage){
            localStorage.setItem('montagem', JSON.stringify(montage))
            setMontagem(montage)
        }
    }
    useEffect(() => {
        let dadosM = localStorage.getItem('montagem')
        if (dadosM != null && dadosM != undefined && dadosM != 'undefined'){
            let infoMontagem = JSON.parse(dadosM)
            
            if (infoMontagem[0] && infoMontagem[0].montage.fkProd == id){
                setMontagem(infoMontagem)
            }
            else{
                localStorage.removeItem('montagem')
                apiMontage()
                }
            }
        else{
            apiMontage()
        }
    }, [])

    return (
        <>
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div"/>
            <BoxMontagem montagem={montagem}/>
            <ButtonsBar />
        </>
    );
}
export default Montagem;