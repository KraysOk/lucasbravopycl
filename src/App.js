import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import macetafertilImage from './macetafertil.png';
import lucasbravopyImage from './lucasbravopy.png';

import Navbar from './Navbar';
import SectionOne from './SectionOne';
import ContactSection from './ContactSection';
import Projects from './Projects';
import Footer from './Footer';

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
    // Agrega más proyectos aquí...
  ];
  
  return (
    <div>
      <Navbar />
      <SectionOne />
      <Projects projects={projects} />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
