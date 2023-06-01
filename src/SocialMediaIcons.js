import React from 'react';
import './SocialMediaIcons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
        <a href="https://www.linkedin.com/in/lucas-dar%C3%ADo-bravo-pay%C3%A1-10034b131/" target="_blank" rel="noopener noreferrer" className="social-media-icon">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://web.facebook.com/lucasbravopy/" target="_blank" rel="noreferrer" className="social-media-icon">
            <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com/lucasbravopy" target="_blank" rel="noreferrer" className="social-media-icon">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/lucasbravopy/" target="_blank" rel="noreferrer" className="social-media-icon">
            <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
  );
};

export default SocialMediaIcons;
