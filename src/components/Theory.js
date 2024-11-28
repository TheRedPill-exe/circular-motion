// src/components/Theory.js
import React from 'react';
import '../styles.css';

const Theory = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Cálculos Teóricos</h2>
      <p className="section-text">
        El movimiento circular uniforme se describe mediante las siguientes ecuaciones:
      </p>
      <ul className="equations-list">
        <li><b>Velocidad angular (ω):</b> ω = θ / t</li>
        <li><b>Aceleración centrípeta (ac):</b> ac = ω² * r</li>
        <li><b>Fuerza centrípeta (Fc):</b> Fc = m * ac = m * ω² * r</li>
      </ul>
      <p className="section-text">
        En el caso del movimiento circular acelerado, la aceleración no es constante y cambia
        con el tiempo, lo que genera una variación en la velocidad angular.
      </p>
    </div>
  );
};

export default Theory;
