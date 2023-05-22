import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbarClass">
      <ul>
        <li><a href="#inicio">Sobre mi</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <div className="navbarIcon">
        <img src="/ICONO.png"></img>
      </div>
    </nav>
  );
};

export default Navbar;
