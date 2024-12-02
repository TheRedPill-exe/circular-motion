import React, { useState } from 'react';
import './Analysis.css';
import Fig1 from '../assets/Examples/Captura sin aceleracion.png';
import Fig2 from '../assets/Examples/Captura con aceleracion.png';
import FigWithoutForce from '../assets/Examples/Con fuerzas iguales.png'; // Cambia a la ruta real
import FigWithForce from '../assets/Examples/Con fuerzas diferentes.png'; // Cambia a la ruta real

const Analysis = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h2 className="section-title">Análisis Detallado de los Resultados</h2>

      {/* Análisis 1 */}
      <div className="analysis-card">
        <h3>1. Impacto de la Aceleración en el Movimiento Circular</h3>
        <p>
          En un movimiento circular uniforme, el objeto sigue una trayectoria circular a una velocidad constante...
          En la primera figura, la velocidad es constante y en la segunda, la velocidad cambia debido a la aceleración.
        </p>
        <div className="image-grid">
          <div className="image-item" onClick={() => openModal(Fig1)}>
            <img src={Fig1} alt="Simulación sin aceleración" className="image" />
            <div className="image-overlay">
              <p className="image-title">Simulación sin Aceleración</p>
              <p className="image-description">Movimiento sin cambios en la velocidad.</p>
            </div>
          </div>
          <div className="image-item" onClick={() => openModal(Fig2)}>
            <img src={Fig2} alt="Simulación con aceleración" className="image" />
            <div className="image-overlay">
              <p className="image-title">Simulación con Aceleración</p>
              <p className="image-description">Efecto de la aceleración sobre la trayectoria.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Análisis 2 */}
      <div className="analysis-card">
        <h3>2. Impacto de la Fuerza Aplicada en el Movimiento Circular</h3>
        <p>
          Cuando una fuerza externa es aplicada a un objeto en movimiento circular, el objeto experimenta una alteración en su trayectoria...
          En la primera figura, las fuerzas son iguales y en la segunda, las fuerzas son diferentes.
        </p>
        <div className="image-grid">
          <div className="image-item" onClick={() => openModal(FigWithoutForce)}>
            <img src={FigWithoutForce} alt="Simulación sin fuerza aplicada" className="image" />
            <div className="image-overlay">
              <p className="image-title">Sin Fuerza Aplicada</p>
              <p className="image-description">Trayectoria sin interferencia externa.</p>
            </div>
          </div>
          <div className="image-item" onClick={() => openModal(FigWithForce)}>
            <img src={FigWithForce} alt="Simulación con fuerza aplicada" className="image" />
            <div className="image-overlay">
              <p className="image-title">Con Fuerza Aplicada</p>
              <p className="image-description">Cambio en la trayectoria debido a la fuerza externa.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Análisis 4 */}
      <div className="analysis-card">
        <h3>3. Conclusiones Generales del Análisis</h3>
        <p>
          A través de las simulaciones realizadas, podemos concluir que el movimiento circular idealizado...
        </p>
        <p>
          Este análisis proporciona una comprensión más profunda sobre cómo las fuerzas y la aceleración afectan el comportamiento de los objetos...
        </p>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Imagen ampliada" className="modal-image" />
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analysis;
