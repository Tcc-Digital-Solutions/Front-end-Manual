import '../../assets/css/css_universal/Navbarsearch.css'
import {useEffect, useState } from 'react'
import lupa from '../../assets/img/search.svg'

export const Navbarsearch = (props) => {
    const [visible, setVisible] = useState('navbarsearch-span')
    const [visibleButtonX, setVisibleButtonX] = useState("button-youtube-button-x-hide")
    const { innerWidth: width, innerHeight: height } = window;

    const setMenuVisible = () => {
        pressed ? setVisible("navbarsearch-span-fechar") : setVisible("navbarsearch-span")
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

    return (
        <div className="navbarsearch-div" >
            <button className={visibleButtonX} id='button-lado' onClick={() => setMenuVisible()}><img 
             src={lupa} alt="" /></button>
            <span  className={visible}>
                <input className='navbarsearch-input' type="text" placeholder='O que você esta buscando ?'  />
                <img className='navbarsearch-img' src={lupa} style={{ width:'30px'}} alt="" />
            </span>
        </div>
    )
}
