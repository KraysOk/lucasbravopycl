import React from 'react';
import './SectionOne.css';

const SectionOne = () => {
  return (
    <section className="section-one">
      <div className="container">
        <h2>Bienvenido a mi sitio web</h2>
        <p>¡Hola! Mi nombre es Lucas Bravo y soy un programador full-stack con experiencia en PHP, Javascript, ReactJS. Me encanta crear soluciones útiles y eficientes para problemas complejos, y estoy emocionado de poder compartir mis proyectos contigo.</p>
        <a href="#contacto" className="btn">Contáctame</a>
      </div>
    </section>
  );
};

export default SectionOne;
