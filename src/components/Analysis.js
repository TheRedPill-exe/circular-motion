// src/components/Analysis.js
import React from 'react';
import '../styles.css';

const Analysis = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Análisis de Resultados</h2>
      <div className="analysis-card">
        <h3>Impacto de la Aceleración</h3>
        <p>
          Al comparar las simulaciones con movimiento circular uniforme y acelerado, podemos observar
          cómo la aceleración cambia la velocidad y la forma de la trayectoria. Los movimientos circulares
          con aceleración muestran una variación más pronunciada en la trayectoria.
        </p>
      </div>
      <div className="analysis-card">
        <h3>Impacto de la Fuerza Aplicada</h3>
        <p>
          La fuerza aplicada en un momento específico cambia la trayectoria del objeto, generando
          una desviación visible en la animación de la simulación.
        </p>
      </div>
    </div>
  );
};

export default Analysis;
