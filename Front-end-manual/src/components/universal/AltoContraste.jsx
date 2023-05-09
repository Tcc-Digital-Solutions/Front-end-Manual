import '../../assets/css/css_universal/AltoContraste.css'
import '../../index.css';
import $ from 'jquery';
import React, { useState } from 'react';
import { VscCircleLargeFilled, VscColorMode } from "react-icons/vsc";
import imgsunMoon from '../../assets/img/sun-moon.svg'




export const AltoContraste = () => {
    const [visible, setVisible] = useState("AltoContraste-box-fechar")
    const [pressed, setPressed] = useState(false)
    const [escuro, setEscuro] = useState(false)
    const [tamanho, setTamanho]= useState(16)
    const [tamanho2, setTamanho2] =useState(18)
    const listaTamanhos = [16, 18, 22]
    

    const resetar = () => {
      setTamanho(listaTamanhos[0])
      setTamanho2(listaTamanhos[1])
      document.documentElement.style.setProperty('--tamanho-fonte1', tamanho + 'px');
      document.documentElement.style.setProperty('--tamanho-fonte2', tamanho2 + 'px');
    }

    const alterar = () => {
        setEscuro(!escuro)
        if($("body").hasClass("claro")){
          $("body").removeClass("claro").addClass("escuro");
          $("body").children().removeClass("claro").addClass("escuro");
          document.documentElement.style.setProperty('--cor-texto', '#fff');
          document.documentElement.style.setProperty('--cor-bg', '#000');
          document.documentElement.style.setProperty('--cor-manual','#000')
    
        } else {
          document.documentElement.style.setProperty('--cor-texto', '#000');
          document.documentElement.style.setProperty('--cor-bg', '#fff');
          document.documentElement.style.setProperty('--cor-manual','#fff')
    
          $("body").removeClass("escuro").addClass("claro");
          $("body").children().removeClass("escuro");
        }
      }
    
      const alterarGrey = () =>{
        if($("body").hasClass("grayscale")){
          $("body").removeClass("grayscale");
        } else {
          $("body").addClass("grayscale");
        }
      }

    const setMenuVisible = () => {
        pressed ? setVisible("AltoContraste-box-fechar") : setVisible("AltoContraste-box")
        setPressed(!pressed)
    }
     //Reseta o tamanho da fonte
     let originalFontSize = $('html').css('font-size');
     $("body").on("click", "#resetFont", () => {
      resetar()
      //  $('html').css('font-size', originalFontSize);
     });
     //Aumenta o Tamanho da Fonte
     $("body").on("click", "#increaseFont", () => {
      
      //tamanho inicia com 14
      setTamanho(tamanho+ 6);
      //apos o primeiro click vai valer 20, tamanho = 20

      //inicia com 16
      setTamanho2(tamanho2 + 6)
      //depois do calculo vale 22


      console.log(tamanho);
      // alert(tamanhoAtual)
      document.documentElement.style.setProperty('--tamanho-fonte1', tamanho + 'px');
      document.documentElement.style.setProperty('--tamanho-fonte2', tamanho2 + 'px');


      //  let currentFontSize = $('html').css('font-size');
      //  let currentFontSizeNum = parseFloat(currentFontSize, 10);
      //  let newFontSize = currentFontSizeNum*1.1;
      //  $('html').css('font-size', newFontSize);
       return false;
     });
     //Diminui o tamanho da fonte
     $("body").on("click", "#decreaseFont", () => {
       let currentFontSize = $('html').css('font-size');
       let currentFontSizeNum = parseFloat(currentFontSize, 10);
       let newFontSize = currentFontSizeNum*0.9;
       $('html').css('font-size', newFontSize);
       return false;
     });
    

    return (
        <div className="AltoContraste-div">
            <button className='AltoContraste-button'  onClick={() => setMenuVisible()}><img src={imgsunMoon} style={{ width:'24px'}} alt="" /></button>
            <span className={visible}>
                <div className="container py-2">
                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-primary bt-custom" id="contraste" onClick={() => alterar()} ><VscCircleLargeFilled color={!escuro? '#000': '#fff'}/></button>
                      <button className="btn btn-primary bt-custom" id="grayescale" onClick={() => alterarGrey() }><VscColorMode color={!escuro? '#000': '#fff'}/></button>
                      {/* <div class = 'btns-primaries'>
                        <button class="btn1 btn-primary" id="increaseFont">A+</button>
                        <button class="btn1 btn-primary" id="decreaseFont">A-</button>
                        <button class="btn1 btn-primary" id="resetFont">A</button>
                      </div> */}
                    </div>
                </div>
              </div>
            </span>
        </div>
    )
}

export default  AltoContraste;