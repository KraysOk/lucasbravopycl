import React from 'react';
import './Projects.css';
import macetafertil1 from './macetafertil.png';

const Projects = ({ projects }) => {
  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section id="portafolio" className="section-projects">
      <div className="container">
        <h2>Proyectos</h2>
        <div className="gallery">
          {projects.map((project) => (
            <div
              className="project"
              key={project.id}
              onClick={() => handleProjectClick(project.link)}
            >
              <div className="project-content">
                <img src={macetafertil1} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
