import React from 'react';
import './ServicesList.css'; // Archivo CSS para el estilo personalizado

const ServicesList = () => {
  // Lista de servicios ofrecidos
  const services = [
    'Desarrollo de aplicaciones web personalizadas',
    'Integración de sistemas y API',
    'Desarrollo de sistemas de gestión de contenido (CMS)',
    'Desarrollo de sistemas de comercio electrónico',
    'Desarrollo de sistemas de bases de datos',
    'Desarrollo de sistemas de reserva o programación',
    'Diseño de interfaces de usuario amigables',
    'Optimización de rendimiento y escalabilidad',
  ];

  return (
    <div className="container">
        <div className='row mt-5'>
            <h2>Servicios</h2>
        </div>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="service-box">
              <div className="service-content">
                <h3 className="service-title">{service}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
