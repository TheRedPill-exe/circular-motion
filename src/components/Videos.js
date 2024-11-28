// src/components/Videos.js
import React from 'react';
import './Videos.css';  // Asegúrate de que el archivo CSS esté configurado correctamente
import "../assets/Videos/videos.js"
const Videos = () => {
  return (
    <div className="videos-container">
      <h1>Simulación de Movimiento Circular</h1>

      <h3 className="video-title">Movimiento Acelerado</h3>
      <video width="600" controls className="video-card">
        <source src="../assets/Videos/VideoAcelerado.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>

      <h3 className="video-title">Movimiento sin Aceleración</h3>
      <video width="600" controls className="video-card">
        <source src="../assets/Videos/VideoSinAceleracion.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>

      <h3 className="video-title">Fuerza Aplicada en un Momento Específico</h3>
      <video width="600" controls className="video-card">
        <source src="/assets/Videos/FuerzaAplicada.mp4" type="video/mp4" />
        Tu navegador no soporta el formato de video.
      </video>
    </div>
  );
};

export default Videos;
