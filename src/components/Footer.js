// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">Explora más sobre el proyecto y recursos adicionales:</p>
        <div className="footer-links">
          <div className="footer-link-item">
            <a href="https://react-pendulum-xf1w.vercel.app " className="footer-link">
              <h4>Proyectos</h4>
              <p>Accede a una variedad de proyectos relacionados con visión por computadora y análisis de movimiento.</p>
            </a>
          </div>
          <div className="footer-link-item">
            <a href="https://drive.google.com/drive/folders/1ZPmvQUR2OdqYhEGiYqajXEPObwvc4bnB?usp=sharing" className="footer-link">
              <h4>Base de Datos de Videos</h4>
              <p>Explora nuestra colección de 150 videos que se utilizan para analizar el movimiento circular.</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
