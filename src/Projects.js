import React from 'react';
import './Projects.css';
import macetafertil1 from './macetafertil.png';

const webImages = require.context('/assets/images',true);

const Projects = ({ projects }) => {
    const handleProjectClick = (link) => {
        window.open(link, '_blank');
      };
    
  return (
    <section id="portafolio" className="section-one">
      <div className="container">
      <h2>Proyectos</h2>
        <div className="gallery">
        {projects.map((project) => (
            <div className="project" key={project.id} onClick={() => handleProjectClick(project.link)}>
              <img src={macetafertil1} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
