import React , { useEffect, useState } from 'react';
import './SectionOne.css';

import cvSpanish from './assets/CV_ESP_LUCAS_BRAVO.pdf';
import cvEnglish from './assets/CV_ING_LUCAS_BRAVO.pdf';
import SocialMediaIcons from './SocialMediaIcons';

const SectionOne = () => {

  return (
    <section id="inicio" className="section-one">
      <div className="container mt-5">
        <h2>¡Bienvenido! ;) Mi nombre es Lucas Bravo</h2>
        <p>Soy un programador full-stack con experiencia en PHP, Javascript, ReactJS y MySQL. Me encanta crear soluciones útiles y eficientes para problemas complejos, y estoy emocionado de poder compartir mis proyectos contigo.</p>
        <div className="cv-buttons">
          <a href={cvSpanish} target="_blank" rel="noopener noreferrer" className="btn">Ver mi CV en Español</a>
          <a href={cvEnglish} target="_blank" rel="noopener noreferrer" className="btn">View my CV in English</a>
        </div>
      </div>
      <SocialMediaIcons />
    </section>
  );
};

export default SectionOne;
