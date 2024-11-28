import React from 'react';
import ReactPlayer from 'react-player';  // Asegúrate de tener instalada la librería

const Videos = () => {
  return (
    <div className="videos-container">
      <h1>Simulación de Movimiento Circular</h1>

      <h3 className="video-title">Movimiento Acelerado</h3>
      <div className="video-wrapper">
        <ReactPlayer 
          url="https://youtu.be/Um71KajKkwg"  // Video de YouTube
          width="100%" 
          height="auto" 
          controls 
        />
      </div>

      <h3 className="video-title">Movimiento sin Aceleración</h3>
      <div className="video-wrapper">
        <ReactPlayer 
          url="https://youtu.be/gtkjtvEM9LQ"  // Coloca el link de YouTube para este video
          width="100%" 
          height="auto" 
          controls 
        />
      </div>

      <h3 className="video-title">Fuerza Aplicada en un Momento Específico</h3>
      <div className="video-wrapper">
        <ReactPlayer 
          url="https://youtu.be/888lL5xLkv0"  // Coloca el link de YouTube para este video
          width="100%" 
          height="auto" 
          controls 
        />
      </div>
    </div>
  );
};

export default Videos;
