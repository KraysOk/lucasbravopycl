import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre mi</a></li>
        <li><a href="#">Portafolio</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
