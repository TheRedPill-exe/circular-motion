// src/components/Videos.js
import React from 'react';
import ReactPlayer from 'react-player';
import './Videos.css';

const videos = [
  {
    title: 'Movimiento Acelerado',
    url: 'https://youtu.be/Um71KajKkwg',
    description: 'Explora cómo varía la aceleración en el movimiento circular. (Pantalla completa disponible)',
    relatedLinks: [
      { text: 'Artículo sobre aceleración centrípeta', url: 'https://es.wikipedia.org/wiki/Aceleraci%C3%B3n_centr%C3%ADpeta' },
      { text: 'Simulación interactiva de aceleración', url: 'https://www.example.com/simulacion-aceleracion' }
    ]
  },
  {
    title: 'Movimiento sin Aceleración',
    url: 'https://youtu.be/gtkjtvEM9LQ',
    description: 'Analiza el movimiento circular sin aceleración. (Pantalla completa disponible',
    relatedLinks: [
      { text: 'Teoría del movimiento uniforme circular', url: 'https://es.wikipedia.org/wiki/Movimiento_uniforme_circular' },
      { text: 'Demostración práctica', url: 'https://www.example.com/demostracion-movimiento' }
    ]
  },
  {
    title: 'Fuerza Aplicada en un Momento Específico',
    url: 'https://youtu.be/888lL5xLkv0',
    description: 'Observa cómo se aplica la fuerza en momentos clave del movimiento. (Pantalla completa disponible)',
    relatedLinks: [
      { text: 'Estudio de fuerzas en movimiento circular', url: 'https://es.wikipedia.org/wiki/Fuerza_centrípeta' },
      { text: 'Ejemplo de aplicación de fuerza', url: 'https://www.example.com/ejemplo-fuerza' }
    ]
  }
];

const Videos = () => {
  return (
    <div className="videos-container">
      <h1 className='section-title-videos'>Simulación de Movimiento Circular</h1>
      {videos.map((video, index) => (
        <div key={index} className="video-card">
          <h3 className="video-title">{video.title}</h3>
          <ReactPlayer
            url={video.url}
            width="100%"
            height="100%"
            controls
            className="react-player"
          />
          <p className="video-description">{video.description}</p>
          <div className="related-links">
            {video.relatedLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="related-link">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
