import React from "react";
import SoundSpeak from "../../../public/img/audio-loudspeaker-public.svg";
import Descrição from '../../../public/img/descricao-de-audio.png'
import Artyom from "artyom.js";
import '../../styles/css_universal/Speaker.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Speaker({children,text, value ,buttonTrue}){
    const artyom = new Artyom();
    const notifyInfo = () => toast.info('Reproduzindo áudio', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    
    const notifyError = () => toast.error('Error Nenhum text Selecionado', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    
    const initializerSpeaker = () =>{
        if(value === undefined)
            value = "pt-PT"
        setTimeout(()=>{
            artyom.initialize({
                lang: value,
                continuous: false,
                soundex: true,
                debug: true,
            }).then((result) => {
                console.log("Artyom has been succesfully initialized");
            }).catch((err) => {
                console.error("Artyom couldn't be initialized: ", err);
            });
            setTimeout(()=>{
                var selection = window.getSelection().toString().trim();
                console.log(selection)
                if((text === "" || text === undefined) && selection === ""){
                    notifyError()
                }
                if((text === "" || text === undefined) && selection !== ""){
                    text = selection
                    notifyInfo()
                }
                console.log(text);
                speak(artyom,text);
                selection = ""
                text = ""
            }, 250);
        }, 250);
    }
    
    function speak(speaker, value){
        console.log(speaker);
        console.log(value);
        speaker.say(value,{
            onEnd: speaker.shutUp()
        });
    }
    return(
        <>
            <ToastContainer />
            <div id="text">
                {children}
            </div>
            <div className="div-audio">
                <button className="button-audio" alt="Clique para escutar" onClick={initializerSpeaker}>
                    { buttonTrue ? <img src={Descrição} style={{width:'30px'}} /> : <img src={SoundSpeak} style={{width:'30px'}} /> }
                </button>
            </div>
        </>
    );
}