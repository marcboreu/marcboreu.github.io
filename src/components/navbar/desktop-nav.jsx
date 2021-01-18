import React from 'react';
import { Link } from "react-scroll";
import LogoImg from '../../assets/logo/logoMarcBoreu-black.png';
import MobileMenuIcon from '../../assets/navbar/mobile-menu.svg';

const desktopNav = (props) => (
  <nav className={`Navbar ${!props.userIsScrolled ? "extraLargeNavbar" : ""}`}>
    <div className="wrapper flex-s-between">
      <div>
        <Link to="header" spy={true} smooth={true} offset={0} duration={500}>
          <img className="img-logo" src={LogoImg} width="90px" alt="logo" className="pointer" />
        </Link>
      </div>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <img src={MobileMenuIcon} alt="menu" />
      </div>
      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li>
            <Link activeClass="active-link" to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>
              EXPERIENCIA
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>
              SOBRE MI
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="blog" spy={true} smooth={true} offset={-70} duration={500}>
              BLOG
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              CONTACTO
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default desktopNav;