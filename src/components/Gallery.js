// src/components/Gallery.js
import React from 'react';
import './Gallery.css';

const images = [
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Galería de Imágenes</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={image.alt} className="image" />
            <div className="image-overlay">
              <h3 className="image-title">{image.title}</h3>
              <p className="image-description">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
