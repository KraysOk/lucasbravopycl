import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <img src="/ICONO.png" alt="Logo" />
            <h3>Lucas Bravo - Web Developer</h3>
          </div>
          <div className="social-links">
                <a href="https://web.facebook.com/lucasbravopy/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com/lucasbravopy" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
                </a>

                <a href="https://www.instagram.com/lucasbravopy/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
          </div>
        </div>
        <p className="footer-text">© 2023 Lucas Bravo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
