import React from 'react';
import './Projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
  faWordpress,
  faHtml5,
  faCss3,
  faBootstrap,
  faElementor,
  faOpencart,
  faPhp,
  faReact,
  faJs,
  faNode
} from '@fortawesome/free-brands-svg-icons';

import faAfterEffects from './aelogo.png';

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
                <img src={project.image} alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((technology) => (
                    <div className="technology" key={technology.name}>
                      <div className="technology-icon">
                        {getTechnologyIcon(technology.name)}
                      </div>
                      <span>{technology.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const getTechnologyIcon = (technologyName) => {
  switch (technologyName) {
    case 'WordPress':
      return <FontAwesomeIcon icon={faWordpress} />;
    case 'HTML':
      return <FontAwesomeIcon icon={faHtml5} />;
    case 'CSS':
      return <FontAwesomeIcon icon={faCss3} />;
    case 'Bootstrap':
      return <FontAwesomeIcon icon={faBootstrap} />;
    case 'Elementor':
      return <FontAwesomeIcon icon={faElementor} />;
    case 'WooCommerce':
      return <FontAwesomeIcon icon={faOpencart} />;
    case 'PHP':
      return <FontAwesomeIcon icon={faPhp} />;
    case 'React':
      return <FontAwesomeIcon icon={faReact} />;
    case 'Javascript':
      return <FontAwesomeIcon icon={faJs} />;
    case 'After Effects':
      return <img src={faAfterEffects} />;
    case 'SQL':
      return <FontAwesomeIcon icon={faDatabase} />;
    case 'Node':
      return <FontAwesomeIcon icon={faNode} />;
    default:
      return null;
  }
};

export default Projects;
