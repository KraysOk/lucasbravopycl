import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import macetafertilImage from './macetafertil.png';
import lucasbravopyImage from './lucasbravopy.png';
import boyarImage from './boyar.png';
import tusitio from './tusitio.png';

import Navbar from './Navbar';
import SectionOne from './SectionOne';
import ContactSection from './ContactSection';
import Projects from './Projects';
import Footer from './Footer';
import ServicesList from './ServicesList';

import ReactGA from 'react-ga';
const TRACKING_ID = "G-4PQ01873CZ"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {

  const projects = [
    {
      id: 1,
      image: macetafertilImage,
      title: 'Maceta Fertil',
      description: 'Ecommerce Jardinería',
      link: 'http://macetafertil.lucasbravopy.cl',
      technologies: [
        { name: 'PHP', icon: 'PHP' },
        { name: 'WordPress', icon: 'WP' },
        { name: 'HTML', icon: 'HTML' },
        { name: 'CSS', icon: 'CSS' },
        { name: 'Bootstrap', icon: 'Bootstrap' },
        //{ name: 'WooCommerce', icon: 'WC' },
        { name: 'Elementor', icon: 'Elementor' },
      ]
    },
    {
      id: 2,
      image: lucasbravopyImage,
      title: 'LucasBravoPy.cl',
      description: 'Portafolio Digital',
      link: 'http://lucasbravopy.cl',
      technologies: [
        { name: 'React', icon: 'React' },
        { name: 'Javascript', icon: 'Javascript' },
        { name: 'HTML', icon: 'HTML' },
        { name: 'CSS', icon: 'CSS' },
        { name: 'Bootstrap', icon: 'Bootstrap' },
      ]
    },
    {
      id: 3,
      image: boyarImage,
      title: 'Boyar.cl',
      description: 'Inmobiliaria',
      link: 'http://boyar.cl',
      technologies: [
        { name: 'PHP', icon: 'PHP' },
        { name: 'WordPress', icon: 'WP' },
        { name: 'HTML', icon: 'HTML' },
        { name: 'CSS', icon: 'CSS' },
        { name: 'Bootstrap', icon: 'Bootstrap' },
        //{ name: 'WooCommerce', icon: 'WC' },
        { name: 'Elementor', icon: 'Elementor' },
        { name: 'After Effects', icon: 'After Effects'}
      ]
    },
    {
      id: 4,
      image: tusitio,
      title: 'Solicita Tu Sitio',
      description: 'Contáctanos Ahora',
      link: 'https://api.whatsapp.com/send/?phone=56959674346&text&type=phone_number&app_absent=0',
      technologies: [
        { name: 'PHP', icon: 'PHP' },
        { name: 'Javascript', icon: 'JS' },
        { name: 'React', icon: 'React'},
        { name: 'Node', icon: 'Node' },
        { name: 'SQL', icon: 'SQL' },
        { name: 'HTML', icon: 'HTML' },
        { name: 'CSS', icon: 'CSS' },
      ]
    },
    // Agrega más proyectos aquí...
  ];
  
  return (
    <div>
      <Navbar />
      <SectionOne />
      <Projects projects={projects} />
      <ServicesList />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
