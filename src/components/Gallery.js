// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Galería de Imágenes</h1>

      <div className="image-grid">

        <div className="image-item">
          <img src="/assets/Examples/Captura con aceleracion.png" alt="Acelerado" />
          <p>Gráfica de Aceleración</p>
        </div>
        <div className="image-item">
          <img src="/assets/Examples/Captura sin aceleracion.png" alt="Sin aceleracion" />
          <p>Gráfica de movimiento constante</p>
        </div>
        <div className="image-item">
          <img src="/assets/Examples/Captura con fuerza.png" alt="Con fuerza aplicada" />
          <p>Gráfica con una fuerza aplicada</p>
        </div>
        <div className="image-item">
          <img src="/assets/Examples/Interfaz con aceleración.png" alt="Interfaz" />
          <p>Interfaz del Usuario</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
