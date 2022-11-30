import React from 'react';
import './header.css';
import MenuIcon from '../../assets/Music-Image/menu icon.png';
import Logo from '../../assets/Music-Image/logo.png';
import Search from '../../assets/Music-Image/search_icon.png';

const Header = () => {

  return (

   <header>
    <nav>

        <div className="menu-logo">
            <div className="menu-icon">
                <img src={MenuIcon} alt="" />
            </div>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
        </div>



        <div className="searchicon">

            <input type="search" />
            <img src={Search} alt="" />

        </div>

        
    </nav>
   </header>

  )
  
}

export default Header