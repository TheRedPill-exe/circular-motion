// src/components/Gallery.js
import React from 'react';
import './Gallery.css'; // Importa el archivo CSS para los estilos

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="section-title">Galería de Imágenes</h2>
      
      <div className="image-grid">
        <div className="image-item">
          <img src="/assets/Examples/Captura con aceleracion.png" alt="Acelerado" className="image" />
          <div className="image-overlay">
            <p className="image-title">Gráfica de Aceleración</p>
            <p className="image-description">Representación del movimiento acelerado.</p>
          </div>
        </div>

        <div className="image-item">
          <img src="/assets/Examples/Captura sin aceleracion.png" alt="Sin aceleracion" className="image" />
          <div className="image-overlay">
            <p className="image-title">Gráfica de Movimiento Constante</p>
            <p className="image-description">Representación del movimiento sin aceleración.</p>
          </div>
        </div>

        <div className="image-item">
          <img src="/assets/Examples/Captura con fuerza.png" alt="Con fuerza aplicada" className="image" />
          <div className="image-overlay">
            <p className="image-title">Gráfica con Fuerza Aplicada</p>
            <p className="image-description">Cómo la fuerza afecta al movimiento.</p>
          </div>
        </div>

        <div className="image-item">
          <img src="/assets/Examples/Interfaz con aceleración.png" alt="Interfaz" className="image" />
          <div className="image-overlay">
            <p className="image-title">Interfaz del Usuario</p>
            <p className="image-description">Interfaz gráfica utilizada en la simulación.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
