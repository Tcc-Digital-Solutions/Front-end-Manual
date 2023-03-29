import '../../assets/css/css-home/NavbarHome.css'
import { BoxCategoria } from './BoxCategoria'
import { useState } from 'react'



export const NavbarHome = () => {
    const [visible, setVisible] = useState("box-categoria-span-fechar")
    const [pressed, setPressed] = useState(false)

    const [visible1, setVisible1] = useState("box-categoria-span-fechar")
    const [pressed1, setPressed1] = useState(false)

    const [visible2, setVisible2] = useState("box-categoria-span-fechar")
    const [pressed2, setPressed2] = useState(false)

    const [visible3, setVisible3] = useState("box-categoria-span-fechar")
    const [pressed3, setPressed3] = useState(false)

    const [visible4, setVisible4] = useState("box-categoria-span-fechar")
    const [pressed4, setPressed4] = useState(false)

    const [visible5, setVisible5] = useState("box-categoria-span-fechar")
    const [pressed5, setPressed5] = useState(false)

    const setMenuVisible = () => {
        pressed ? setVisible("box-categoria-span-fechar") : setVisible("box-categoria-span")
        setPressed(!pressed)

    }
    const setMenuVisible1 = () => {

        pressed1 ? setVisible1("box-categoria-span-fechar") : setVisible1("box-categoria-span")
        setPressed1(!pressed1)
    }

    const setMenuVisible2 = () => {

        pressed2 ? setVisible2("box-categoria-span-fechar") : setVisible2("box-categoria-span")
        setPressed2(!pressed2)
    }

    const setMenuVisible3 = () => {

        pressed3 ? setVisible3("box-categoria-span-fechar") : setVisible3("box-categoria-span")
        setPressed3(!pressed3)
    }

    const setMenuVisible4 = () => {

        pressed4 ? setVisible4("box-categoria-span-fechar") : setVisible4("box-categoria-span")
        setPressed4(!pressed4)
    }

    const setMenuVisible5 = () => {

        pressed5 ? setVisible5("box-categoria-span-fechar") : setVisible5("box-categoria-span")
        setPressed5(!pressed5)
    }

    const [categoria, setCategoria] = useState(0)

    const exibirProdutos = (categoria) => {
        setCategoria(categoria)
    }

    return (
        <div className="box-categoria-div" >
            <ul className="box-categoria-ul">
                <li className="box-categoria-li" id='li-categorias'>
                    <button className="box-categoria-button" onClick={() => setMenuVisible()} onBlur={() => setMenuVisible("box-categoria-span-fechar")} >Ferramentas 12v</button>
                </li>
                <span className={visible}>
                    <div className='box-menu'>
                        <ul>
                            <li onMouseOver={() => exibirProdutos(1)}>Furadeiras e Parafusadeiras</li>
                            <li onMouseOver={() => exibirProdutos(2)}>Chave de Impacto</li>
                            <li onMouseOver={() => exibirProdutos(3)}>Serra Circular</li>
                            <li onMouseOver={() => exibirProdutos(4)}>Serra Tico-Tico</li>
                            <li onMouseOver={() => exibirProdutos(5)}>Plaina</li>
                            <li onMouseOver={() => exibirProdutos(6)}>Aspiradores</li>
                            <li onMouseOver={() => exibirProdutos(7)}>Barteria e Carregadores</li>
                            <li onMouseOver={() => exibirProdutos(8)}>Lanterna</li>
                        </ul>
                    </div>
                    <div className='box-produtos'>
                        {categoria == 1 ? 
                            <>
                                <BoxCategoria categoria='Furadeiras' />
                                <BoxCategoria categoria='Parafusadeiras' />
                            </>
                            :
                            categoria == 2? 
                            <>
                                <BoxCategoria categoria='Chave de Impacto' />
                            </>
                            : 
                            categoria == 3?
                            <>
                                <BoxCategoria categoria='Serra Circular' />
                            </>  
                            :
                            categoria == 4?
                            <>
                                <BoxCategoria categoria='Serra Tico-Tico' />
                            </>
                            
                            :
                            categoria == 5?
                            <>
                                <BoxCategoria categoria='Plaina'/>
                            </>
                            
                            :
                            categoria == 6?
                            <>
                                <BoxCategoria categoria='Aspiradores'/>
                            </>
                            
                            :
                            categoria == 7?
                            <>
                                <BoxCategoria categoria='Baterias'/>
                                <BoxCategoria categoria='Carregadores'/>
                            </>
                            
                            :
                            categoria == 8?
                            <>
                                <BoxCategoria categoria='Lanterna' />
                            </>
                            
                            :
                            null
                        }
                        
                        {/* <BoxCategoria />
                        <BoxCategoria />
                        <BoxCategoria />
                        <BoxCategoria />
                        <BoxCategoria />
                        <BoxCategoria /> */}
                    </div>
                    
                </span>
                <li className="box-categoria-li" id='li-categorias'>
                    <button className="box-categoria-button" onClick={() => setMenuVisible1()} onBlur={() => setMenuVisible1("box-categoria-span-fechar")}>Ferramentas 110v </button>
                </li>
                <span className={visible1}>
                    <BoxCategoria />
                    {/* <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria /> */}
                </span>
                <li className="box-categoria-li" id='li-categorias'>
                    <button className="box-categoria-button" onClick={() => setMenuVisible2()} onBlur={() => setMenuVisible2("box-categoria-span-fechar")}>Ferramentas 220V </button>
                </li>
                <span className={visible2}>
                    <BoxCategoria />
                    {/* <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria /> */}
                </span>
                <li className="box-categoria-li" id='li-categorias'>
                    <button className="box-categoria-button" onClick={() => setMenuVisible3()} onBlur={() => setMenuVisible3("box-categoria-span-fechar")}>Ferramentas 18V </button>
                </li>
                <span className={visible3}>
                    <BoxCategoria />
                    {/* <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria /> */}
                </span>
                <li className="box-categoria-li" id='li-categorias'>
                    <button className="box-categoria-button" onClick={() => setMenuVisible4()} onBlur={() => setMenuVisible4("box-categoria-span-fechar")}>Linha de Medição </button>
                </li>
                <span className={visible4}>
                    <BoxCategoria />
                    {/* <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria /> */}
                </span>
                <li className="box-categoria-li" id='li-categorias'>
                    <button className="box-categoria-button" onClick={() => setMenuVisible5()} onBlur={() => setMenuVisible5("box-categoria-span-fechar")}>Acessorios</button>
                </li>
                <span className={visible5}>
                    <BoxCategoria />
                    {/* <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria />
                    <BoxCategoria /> */}
                </span>
            </ul>

        </div>
    )
}