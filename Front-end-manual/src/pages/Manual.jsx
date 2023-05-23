import React, { useEffect, useState } from 'react';
import { BoxManual } from '../components/screen-manual/BoxManual';
import { ButtonsBar } from '../components/universal/ButtonsBar';
import { ButtonYoutube } from '../components/universal/ButtonYoutube';
import { Navbar } from '../components/universal/Navbar';
import { useParams } from 'react-router-dom';

const Manual = () => {
    const { id } = useParams()
    const [manual, setManual] = useState('')
    const [video, setVideo] = useState('')

    // diferente do da montagem aqui ele chama a api denovo mesmo quando já estava no localstorage, e a pagina de info tbm,
    // só a de montagem que puxa uma vez
  
    const apiManual = async() =>{
      const manuals = (await fetch(`http://localhost:3000/api/manual/${id}`).then(res => res.json()))
      if (manuals){
        localStorage.setItem('manual', JSON.stringify(manuals[0]))
        setManual(manuals[0])
      }
    }

    const apiVideos = async() =>{
      const videos = (await fetch(`http://localhost:3000/api/videos/${id}`).then(res => res.json()))
      if (videos){
          localStorage.setItem('videos', JSON.stringify(videos))
          setVideo(videos)
      }
    }

    // só na segunda atualização ele tá pegando o manual, dps ele dá erro
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

      let dadosVideo = localStorage.getItem('videos')
      if (dadosVideo != null && dadosVideo != undefined && dadosVideo != "undefined"){
        let infoVideo = JSON.parse(dadosVideo)
        if (infoVideo[0].fkProd == id) {
          setVideo(infoVideo)
        }
        else{
          localStorage.removeItem('videos')
          apiVideos()
        }
      }
      else{
        apiVideos()
      }
    }, [])
    
    return (
        <>
            <Navbar visible='button-menu-box-fechar' search='button-menu-box-fechar'  box='button-menu-box-fechar' nave="navbar-div-manual"/>
            <BoxManual manual={manual}/>
            <ButtonsBar />
            <ButtonYoutube video={video}/>
        </>
    )
}
export default Manual;