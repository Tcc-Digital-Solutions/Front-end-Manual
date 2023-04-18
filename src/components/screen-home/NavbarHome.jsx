import '../../assets/css/css-home/NavbarHome.css'
import '../../assets/css/css_universal/Navbarsearch.css'
import {useEffect, useState } from 'react'
import fecharImg from '../../assets/img/close.svg'
import menuImg from '../../assets/img/list-view-mobile.svg'
import lupa from '../../assets/img/search.svg'
import {Carousel} from './Carousel'


export const NavbarHome = (props) => {
    const[isHovering_0, setIsHoverring_0] = useState(false);
    const[isHovering_1, setIsHoverring_1] = useState(false);
    const[isHovering_2, setIsHoverring_2] = useState(false);
    const[isHovering_3, setIsHoverring_3] = useState(false);
    const[isHovering_4, setIsHoverring_4] = useState(false);

    const { innerWidth: width, innerHeight: height } = window;
    const [visible, setVisible] = useState(props.visible)
    const [visibleSearch, setVisibleSearch] = useState('navbarsearch-span')
    const [visibleIMG, setVisibleIMG] = useState(lupa)
    const [visibleBox, setVisibleBox] = useState(props.box)
    const [visibleButton, setVisibleButton] = useState("button-menu-click-hide")
    const [visibleButtonX, setVisibleButtonX] = useState("button-youtube-button-x-hide")
    const [pressed, setPressed] = useState(false)
    const [pressed2, setPressed2] = useState(false)

    const setMenuVisible = () => {
        pressed ? setVisible("button-menu-box-fechar") : setVisible("button-menu-box")
        setPressed(!pressed)
    }

    const setMenuVisibleSearch = () => {
        pressed2 ? setVisibleSearch("navbarsearch-span-fechar") : setVisibleSearch("navbarsearch-span") 
        setPressed2(!pressed2),setWidth()
    }

    const setWidth = () =>{
        pressed2 ? setVisibleIMG(lupa) : setVisibleIMG(fecharImg)  
    }

    useEffect(() => {
        if (props.menu == 'true'){
            if (innerWidth < 1000){
                setVisibleSearch('navbarsearch-span-fechar')
                setVisible('button-menu-box-fechar')
                setVisibleButton('button-menu-click')
                setVisibleButtonX('button-youtube-button-x')
            }            
        }
    },[])
    
    
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
            <div className={props.search} >
                <button className='navbarsearch-button' onClick={() => setMenuVisibleSearch( () => setWidth()) }> <img  src={visibleIMG} style={{ width:'24px'}} alt="" /></button>
                <span  className={visibleSearch}>
                    <input className='navbarsearch-input' type="text" placeholder='O que você esta buscando ?'  />
                    <img  src={lupa} style={{ width:'20px'}} alt="" />
                </span>
            </div>
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
                <Carousel/>
            </span>
        </div>
    )
}