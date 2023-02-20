import React from "react";
import './Header.scss';
import menuicon from "../../images/menu_icon.png";
import closeicon from "../../images/close_icon.png";
import searchicon from "../../images/icon_search.png";
import { NavLink } from "react-router-dom";

const Header = () => {

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
    return (
        <header>
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
                    <NavLink to="/" className="navlink">Home</NavLink>
                    <NavLink to="/about-us" activeclassname="active">About Us</NavLink>
                    <NavLink to="/contact-us" activeclassname="active">Contact Us</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;