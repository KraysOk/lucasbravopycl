import React from "react";
import './ContactSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function ContactSection() {
  return (
    <section className="section-two">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Contacto</h2>
            <p>Estamos siempre disponibles para ayudarte en lo que necesites.</p>
            <ul className="contact-info">
              <li>
                <i className="fas fa-phone"></i> Teléfono: +XX XXX XXX XXX
              </li>
              <li>
                <i className="fas fa-envelope"></i> Email: correo@dominio.com
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <a href="https://wa.me/XXXXXXXXXXX" target="_blank" rel="noreferrer" className="btn-whatsapp">
              <i className="fab fa-whatsapp"></i> Contacta con nosotros en WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
