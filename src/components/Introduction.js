// src/components/Introduction.js
import React from 'react';
import '../styles.css';  // Asegúrate de importar el archivo CSS

const Introduction = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Introducción</h2>
      <p className="section-text">
        El movimiento circular es un concepto fundamental en la física que describe el
        movimiento de un objeto a lo largo de una trayectoria circular. En este proyecto,
        analizamos el movimiento de un cuerpo bajo diversas condiciones: movimiento circular
        uniforme, acelerado y cuando se le aplica una fuerza en un momento específico.
      </p>
      <p className="section-text">
        Nuestro objetivo es modelar estos movimientos, crear simulaciones y analizar los
        efectos de la aceleración y las fuerzas aplicadas en la trayectoria del objeto.
      </p>
      <h3 className="section-subtitle">Objetivos</h3>
      <ul className="objectives-list">
        <li>Simular el movimiento circular con diferentes tipos de aceleración.</li>
        <li>Analizar el impacto de fuerzas aplicadas sobre la trayectoria.</li>
        <li>Generar videos de las simulaciones para análisis comparativo.</li>
      </ul>
    </div>
  );
};

export default Introduction;
