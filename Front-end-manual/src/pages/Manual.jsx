import React, { Component, useEffect, useState } from 'react';
import { BoxManual } from '../components/screen-manual/BoxManual';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { ButtonYoutube } from '../components/universal/ButtonYoutube';
import { Navbar } from '../components/universal/Navbar';
import { useParams } from 'react-router-dom';

const Manual = () => {

    const { id } = useParams()
    const [manual, setManual] = useState('')
  
    const apiManual = async() =>{
      const manuals = (await fetch(`http://localhost:3000/api/manual/${id}`).then(res => res.json()))
      if (manuals){
        localStorage.setItem('manual', JSON.stringify(manuals[0]))
        setManual(manuals[0])
      }
    }
  
    useEffect(() => {
      let dadosManual = localStorage.getItem('manual')
      if (dadosManual != null && dadosManual != undefined && dadosManual != "undefined"){
        let infoManual = JSON.parse(dadosManual)
        if (infoManual.fkProd == id) {
          setManual(infoManual)
        }
        else{
          localStorage.removeItem('manual')
          apiManual()
        }
      }
      else{
        apiManual()
      }
    }, [localStorage.getItem('manual')])
    
    return (
        <>
            {/* {console.log('Olá: ', manual)} */}
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div-manual"/>
            <BoxManual manual={manual}/>
            <ButtonsBar />
            <ButtonYoutube />
        </>
    )
}
export default Manual;