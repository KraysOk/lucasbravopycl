import React, {useEffect} from 'react';
import './Projects.css';
import { WebpayPlus } from 'transbank-sdk'; // ES6
const asyncHandler = require("./utils/async_handler");

const ComprarAhora = () => {
    const iniciarTransaccion = async () => {
        try {

          let buyOrder = "O-" + Math.floor(Math.random() * 10000) + 1;
          let sessionId = "S-" + Math.floor(Math.random() * 10000) + 1;

          const body = {
              buyOrder,
              sessionId,
              amount: 200000,
              returnUrl: 'http://localhost:3000/retorno-pago'
            };
            const response = await fetch('http://localhost:3002/api/pago', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(body)
            });
            
            if (response.ok) {
              const data = await response.json();
              console.log('Transacción iniciada:', data);
              const { token, url } = data;
              window.open(url + '?token_ws=' + token, '_blank');
            } else {
              console.error('Error al iniciar la transacción');
            }
    
          if (response.ok) {
            const data = await response.json();
            console.log('Transacción iniciada:', data);
            // Realizar acciones adicionales según la respuesta de la pasarela de pago
          } else {
            console.error('Error al iniciar la transacción');
          }
        } catch (error) {
          console.error('Error de red:', error);
        }
      };
  return (
    <section id="portafolio" className="section-projects">
      <div className="container">
        <h2>Comprar Sitio</h2>
        <div className="gallery">
            <div
              className="project"
            >
              <div className="project-content">
                <img src="#" alt="" />
                <h4>ECOMMERCE</h4>
                <p>SITIO WEB CON PASARELA DE PAGO</p>
                <div className="technologies">
                    <div className="technology">
                        $200.000
                    </div>
                    <button className="btn btn-light" onClick={iniciarTransaccion}>Comprar</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ComprarAhora;
