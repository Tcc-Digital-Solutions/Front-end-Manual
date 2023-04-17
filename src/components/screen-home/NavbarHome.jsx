import '../../assets/css/css-home/NavbarHome.css'
import '../../assets/css/css_universal/Navbarsearch.css'
import {useEffect, useState } from 'react'
import fecharImg from '../../assets/img/close.svg'
import menuImg from '../../assets/img/menu-aberto.png'
import { Navbarsearch } from '../universal/Navbarsearch';
import lupa from '../../assets/img/search.svg'
import { Carousel } from './Carousel'


export const NavbarHome = (props) => {
    const[isHovering_0, setIsHoverring_0] = useState(false);
    const[isHovering_1, setIsHoverring_1] = useState(false);
    const[isHovering_2, setIsHoverring_2] = useState(false);
    const[isHovering_3, setIsHoverring_3] = useState(false);
    const[isHovering_4, setIsHoverring_4] = useState(false);

    const { innerWidth: width, innerHeight: height } = window;
    const [visible, setVisible] = useState(props.visible)
    const [visibleBox, setVisibleBox] = useState(props.box)
    const [visibleButton, setVisibleButton] = useState("button-menu-click-hide")
    const [visibleButtonX, setVisibleButtonX] = useState("button-youtube-button-x-hide")
    const [pressed, setPressed] = useState(false)

    const setMenuVisible = () => {
        pressed ? setVisible("button-menu-box-fechar") : setVisible("button-menu-box")
        setPressed(!pressed)
    }


    useEffect(() => {
        if (props.menu == 'true'){
            if (innerWidth < 1000){
                setVisibleButton('button-menu-click')
                setVisibleButtonX('button-youtube-button-x')
                console.log(innerWidth)
            }            
        }
    })
    

    const handleMouseOver = (props) => {
        if (props == 1){
            setIsHoverring_1(true);
            console.log(props)
        };
        if(props == 2){
            setIsHoverring_2(true); 
        };
        if(props == 0){
            setIsHoverring_0(true); 
        };
        if(props == 3){
            setIsHoverring_3(true); 
        };
        if(props == 4){
            setIsHoverring_4(true); 
        };

           
    };

    const handleMouseOut = (props) => {
        if (props == 1){
            setIsHoverring_1(false);
        };
        if(props == 2){
          setIsHoverring_2(false);  
        };
        if(props == 0){
            setIsHoverring_0(false);  
          };
        if(props == 3){
        setIsHoverring_3(false);  
        };
        if(props == 4){
            setIsHoverring_4(false);  
            };
        
    };
    return (
        <div className="box-categoria-div" >
            {/* <div className="navbarsearch-div" >
                <button className='navbarsearch-button'> <img  src={lupa} style={{ width:'30px'}} alt="" /></button>
                <span  className='navbarsearch-span'>
                    <input className='navbarsearch-input' type="text" placeholder='O que você esta buscando ?'  />
                </span>
            </div> */}
            <button className={visibleButton} onClick={() => setMenuVisible()}><img className="button-menu-img" src={menuImg} alt="" /></button>
            <span className={visible}>
            <button className={visibleButtonX} id='button-lado' onClick={() => setMenuVisible()}><img className="button-youtube-button-x-img" src={fecharImg} alt="" /></button>
                <ul className="box-categoria-ul">
                    <li className="box-categoria-li" id='li-categorias'>
                        <div className="box-categoria-menu"  id='box-categoria-menu-border'   onMouseOver={() => handleMouseOver(0)} onMouseOut={() => handleMouseOut (0)}>
                            Ferramentas 12v
                            <span  className={isHovering_0 ? 'menu-button' : 'menu-escondido'}>

                            </span>
                        </div>
                    </li>
                    
                    <li className="box-categoria-li" id='li-categorias'>
                        <div className="box-categoria-menu" id='box-categoria-menu-border' onMouseOver={() => handleMouseOver(1)} onMouseOut={() => handleMouseOut (1)} >
                            Ferramentas 18v 
                            <span className={isHovering_1 ? 'menu-button' : 'menu-escondido'}>
                    
                            </span>
                        </div>
                    </li>
                    
                    <li className="box-categoria-li" id='li-categorias'>
                        <div className="box-categoria-menu" id='box-categoria-menu-border' onMouseOver={() => handleMouseOver(2)} onMouseOut={() => handleMouseOut (2)}>
                            Linha de Medição
                            <span className={isHovering_2 ? 'menu-button' : 'menu-escondido'}>
                    
                            </span>
                        </div>
                    </li>
                    
                    <li className="box-categoria-li" id='li-categorias'>
                        <div className="box-categoria-menu" id='box-categoria-menu-border' onMouseOver={() => handleMouseOver(3)} onMouseOut={() => handleMouseOut (3)}>
                            Acessórios
                            <span className={isHovering_3 ? 'menu-button' : 'menu-escondido'}>
    
                            </span>
                        </div>
                    </li>
                    <li className="box-categoria-li" id='li-categorias'>
                        <div className="box-categoria-menu" id='box-categoria-menu-border' onMouseOver={() => handleMouseOver(4)} onMouseOut={() => handleMouseOut (4)}>
                            Outros
                            <span className={isHovering_4 ? 'menu-button' : 'menu-escondido'}>
    
                            </span>
                        </div>
                    </li>
                </ul>
            </span>
            <span className={visibleBox}>
                {/* <Carousel/> */}
            </span>
        </div>
    )
}