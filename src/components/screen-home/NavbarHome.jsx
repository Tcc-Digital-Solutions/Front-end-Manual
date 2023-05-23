import '../../assets/css/css-home/NavbarHome.css'
import '../../assets/css/css_universal/Navbarsearch.css'
import {useEffect, useState } from 'react'
import fecharImg from '../../assets/img/close.svg'
import menuImg from '../../assets/img/list-view-mobile.svg'
import lupa from '../../assets/img/search.svg'
import { Carousel } from './Carousel'
import { BoxCategoria } from './BoxCategoria'


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
                setVisibleButton('button-manual')
                setVisibleButtonX('button-youtube-button-x')
            }            
        }
    },[])
    
    const [categoria, setCategoria] = useState(1)

    const exibirProdutos = (categoria) => {
        setCategoria(categoria)
    }
    
    
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
                <button className='button-manual' onClick={() => setMenuVisibleSearch( () => setWidth()) }> <img  src={visibleIMG} style={{ width:'24px'}} alt="" /></button>
                <span  className={visibleSearch}>
                    <input className='navbarsearch-input' type="text" placeholder='O que você esta buscando ?'  />
                    <svg className='img-svg-manual' style={{ width:'20px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><path d="M170.829 149.171l-56.874-56.873A51.667 51.667 0 0 0 120 68c0-28.673-23.327-52-52-52S16 39.327 16 68s23.327 52 52 52c8.773 0 17.04-2.192 24.298-6.045l56.873 56.874c3.45 3.45 7.92 5.2 12.248 5.2 3.854 0 7.597-1.388 10.41-4.2 5.97-5.972 5.522-16.135-1-22.658zM24 68c0-24.262 19.738-44 44-44s44 19.738 44 44-19.738 44-44 44-44-19.738-44-44zm142.171 98.171c-1.75 1.753-3.874 1.979-5.347 1.857-2.171-.176-4.357-1.217-5.995-2.857L99.216 109.56a52.439 52.439 0 0 0 10.343-10.343l55.612 55.613c1.64 1.638 2.68 3.824 2.857 5.995.12 1.473-.105 3.596-1.857 5.347z"/></svg>
                </span>
            </div>
            <button className={visibleButton} onClick={() => setMenuVisible()}><img className="button-menu-img" src={menuImg} alt="" /></button>
            <span className={visible}>
            <button className={visibleButtonX} id='button-lado' onClick={() => setMenuVisible()}><img className="button-youtube-button-x-img" src={fecharImg} alt="" /></button>
                <ul className="box-categoria-ul">
                    <li className="box-categoria-li" id='li-categorias'>
                        <div className="box-categoria-menu"  id='box-categoria-menu-border'   onMouseOver={() => handleMouseOver(0)} onMouseOut={() => handleMouseOut (0)}>
                            <div className='border-mobile'>Ferramentas 12v</div>
                            <span  className={isHovering_0 ? 'menu-button' : 'menu-escondido'}>
                            <div className='box-menu'>
                        <ul>
                            <li className={categoria == 1 ? 'active' : null} onMouseOver={() => exibirProdutos(1)}>Furadeiras e Parafusadeiras</li>
                            <li onMouseOver={() => exibirProdutos(2)}>Chave de Impacto</li>
                            <li onMouseOver={() => exibirProdutos(3)}>Serra Circular</li>
                            <li onMouseOver={() => exibirProdutos(4)}>Serra Tico-Tico</li>
                            <li onMouseOver={() => exibirProdutos(5)}>Plaina</li>
                            <li onMouseOver={() => exibirProdutos(6)}>Aspiradores</li>
                            <li onMouseOver={() => exibirProdutos(7)}>Barteria e Carregadores</li>
                            <li onMouseOver={() => exibirProdutos(8)}>Lanterna</li>
                        </ul>
                    </div>
                            </span>
                        </div>
                    </li>
                    
                    <li className="box-categoria-li" id='li-categorias'>
                        <div className="box-categoria-menu" id='box-categoria-menu-border' onMouseOver={() => handleMouseOver(1)} onMouseOut={() => handleMouseOut (1)} >
                        <div className='border-mobile'>Ferramentas 18v</div>
                            <span className={isHovering_1 ? 'menu-button' : 'menu-escondido'}>
                            <div className='box-menu'>
                        <ul>
                            <li className={categoria == 1 ? 'active' : null} onMouseOver={() => exibirProdutos(1)}>Furadeiras e Parafusadeiras</li>
                            <li onMouseOver={() => exibirProdutos(2)}>Chave de Impacto</li>
                            <li onMouseOver={() => exibirProdutos(3)}>Serra Circular e Serra Tico-Tico</li>
                            <li onMouseOver={() => exibirProdutos(4)}>Plaina</li>
                            <li onMouseOver={() => exibirProdutos(5)}>Aspiradores e Soprador</li>
                            <li onMouseOver={() => exibirProdutos(6)}>Barteria e Carregadores</li>
                            <li onMouseOver={() => exibirProdutos(7)}>Lixadeiras e Lanternas</li>
                            <li onMouseOver={() => exibirProdutos(8)}>Esmelhiradeiras e Marteletes</li>

                        </ul>
                    </div>
                            </span>
                        </div>
                    </li>
                    
                    <li className="box-categoria-li" id='li-categorias'>
                        <div className="box-categoria-menu" id='box-categoria-menu-border' onMouseOver={() => handleMouseOver(2)} onMouseOut={() => handleMouseOut (2)}>
                        <div className='border-mobile'>Linha de Medição</div>
                            <span className={isHovering_2 ? 'menu-button' : 'menu-escondido'}>
                            <div className='box-menu'>
                        <ul>
                            <li className={categoria == 1 ? 'active' : null} onMouseOver={() => exibirProdutos(1)}>Niveladores</li>
                            <li onMouseOver={() => exibirProdutos(2)}>Medidores</li>
                            <li onMouseOver={() => exibirProdutos(3)}>Detectores</li>
                            <li onMouseOver={() => exibirProdutos(4)}>Acessórios</li>
                        </ul>
                    </div>
                            </span>
                        </div>
                    </li>
                    
                    <li className="box-categoria-li" id='li-categorias'>
                        <div className="box-categoria-menu" id='box-categoria-menu-border' onMouseOver={() => handleMouseOver(3)} onMouseOut={() => handleMouseOut (3)}>
                        <div className='border-mobile'>Acessórios</div>
                            <span className={isHovering_3 ? 'menu-button' : 'menu-escondido'}>
                            <div className='box-menu'>
                        <ul>
                            <li className={categoria == 1 ? 'active' : null} onMouseOver={() => exibirProdutos(1)}>Perfurar e Parafusar</li>
                            <li onMouseOver={() => exibirProdutos(2)}>Serrar</li>
                            <li onMouseOver={() => exibirProdutos(3)}>Cortar e Desbastar</li>
                            <li onMouseOver={() => exibirProdutos(4)}>Acabamento</li>

                        </ul>
                    </div>
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
