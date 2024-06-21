import React, {useState} from 'react'
import logo from '../assets/logo.png'
import '../App.css'
import './header.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';


const Header = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
    const [overLay, setOverLay] = useState(false);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
        setOverLay(!overLay);
    }

  return (
    <header className="header box">
        <div className={overLay ? 'header-container box overlay' : 'header-container box'}>
            <div className="logo">
                <h1><a href="/"><img src={logo} alt="Akeshya" />Akeshya</a></h1>
            </div>

            <nav  className="nav-bar">

                <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
                <CloseSharpIcon  className="close-icon" onClick={toggleMenu} />

                    <li><a className="active" href="/#">Home</a></li>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Services</a></li>
                    <li><a className='btn' href="/#">Contact us</a></li>
                </ul>
            </nav>
            
        <MenuSharpIcon className='icon' onClick={toggleMenu}/>

        </div>
    </header>
  )
}

export default Header