import React,{useState} from "react";
import './Header.scss';
import menuicon from "../../images/menu_icon.png";
import closeicon from "../../images/close_icon.png";
import searchicon from "../../images/icon_search.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
    const [navbarmain,setNavbar] = useState(false);
    const onToggleclick = () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav_links');
        if (hamburger && navLinks) {
    
          navLinks.classList.toggle('hide');
          if (hamburger.classList.contains('expanded')) {
            hamburger.classList.remove('expanded');
          } else {
            hamburger.classList.add('expanded');
          }
        }
       
      }
      const changeBackground = () => {
         if(window.scrollY>=80){
            setNavbar(true);
         }
         else{
            setNavbar(false);
         }
      };
      window.addEventListener('scroll',changeBackground);
    return (
        <header className={navbarmain ? 'nav-active':'navbarmain'}>
            <nav className="navbar">
                <div className="logo">
                    AWS
                </div>
                <div className="hamburger" onClick={onToggleclick}>
                    <div className="menu">
                        <img src={menuicon} className="menu" alt="hamburger" />
                    </div>
                    <div className="close">
                        <img src={closeicon} className="close" alt="close" />
                    </div>
                </div>
                <div className="nav_links hide">
                    <Link to="/" activeclassname="active">Home</Link>
                    <NavLink to="/about-us" activeclassname="active">About Us</NavLink>
                    <NavLink to="/contact-us" activeclassname="active">Contact Us</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;