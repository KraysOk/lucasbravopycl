import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './Navbar';
import SectionOne from './SectionOne';
import ContactSection from './ContactSection';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  const projects = [
    {
      id: 1,
      image: 'macetafertil1.png',
      title: 'Maceta Fertil',
      description: 'Ecommerce Jardinería',
      link: 'http://macetafertil.lucasbravopy.cl'
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
