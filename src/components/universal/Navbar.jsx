import '../../assets/css/css_universal/Navbar.css'
import imgTop from '../../assets/img/imgTopo.png'
import boschLogo from '../../assets/img/Bosch-logo.png'
import { Link } from 'react-router-dom';
import { Translate } from './Translate';

export const Navbar = () => {
    return (
        <div className="navbar-div" >
            <div className='navbar-div-1'>
                <img className='navbar-div-img-1' src={imgTop} alt="" />
            </div>
            <div className='navbar-div-2'>
                <img className='navbar-div-img-2' src={boschLogo} alt="" />
                <Translate/>
            </div>
            
        </div>
    )
}