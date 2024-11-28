import React from 'react';
import ReactPlayer from 'react-player';

const Videos = () => {
  return (
    <div className="videos-container">
      <h1>Simulación de Movimiento Circular</h1>

      <h3 className="video-title">Movimiento Acelerado</h3>
      <div className="video-wrapper">
        <ReactPlayer 
          url="https://youtu.be/Um71KajKkwg"  // Video de YouTube
          className="react-player"
          controls 
        />
      </div>

      <h3 className="video-title">Movimiento sin Aceleración</h3>
      <div className="video-wrapper">
        <ReactPlayer 
          url="https://youtu.be/gtkjtvEM9LQ"  // Video de YouTube
          className="react-player"
          controls 
        />
      </div>

      <h3 className="video-title">Fuerza Aplicada en un Momento Específico</h3>
      <div className="video-wrapper">
        <ReactPlayer 
          url="https://youtu.be/888lL5xLkv0"  // Video de YouTube
          className="react-player"
          controls 
        />
      </div>
    </div>
  );
};

export default Videos;
