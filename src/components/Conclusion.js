// src/components/Conclusion.js
import React from 'react';
import '../styles.css';

const Conclusion = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Conclusiones del Trabajo</h2>
      <p className="section-text">
        Este proyecto ha permitido simular el comportamiento de un cuerpo en movimiento circular
        bajo diversas condiciones. Hemos analizado cómo la aceleración afecta la trayectoria y cómo
        las fuerzas aplicadas pueden alterar dicho movimiento.
      </p>
      <p className="section-text">
        Las simulaciones y los resultados obtenidos validan las teorías físicas detrás del movimiento
        circular y nos brindan una visión más clara sobre la influencia de factores externos en la
        dinámica de los cuerpos en movimiento.
      </p>
    </div>
  );
};

export default Conclusion;
