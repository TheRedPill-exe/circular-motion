  // src/components/Analysis.js
  import React from 'react';
  import './Analysis.css'; // Importa el archivo CSS para los estilos

  const Analysis = () => {
    return (
      <div className="gallery-container">
        <h2 className="section-title">Análisis Detallado de los Resultados</h2>

        <div className="analysis-card">
          <h3>1. Impacto de la Aceleración en el Movimiento Circular</h3>
          <p>
            En un movimiento circular uniforme, el objeto sigue una trayectoria circular a una velocidad constante. Sin embargo, cuando se introduce la aceleración, el objeto ya no mantiene una velocidad constante. 
            La aceleración puede ser tangencial (cambiando la velocidad del objeto) o centrípeta (cambiando la dirección del movimiento, pero no la velocidad). En la simulación que hemos realizado, se ha introducido una aceleración tangencial, lo que provoca una variación en la velocidad del objeto en movimiento. Como resultado, la forma de la trayectoria se ve modificada, y podemos observar cómo el objeto se aleja de la trayectoria circular perfecta a medida que aumenta la velocidad.
          </p>
          <div className="image-grid">
            <div className="image-item">
              <img src="/assets/Examples/Captura sin aceleracion.png" alt="Simulación sin aceleración" className="image" />
              <div className="image-overlay">
                <p className="image-title">Simulación sin Aceleración</p>
                <p className="image-description">Movimiento sin cambios en la velocidad.</p>
              </div>
            </div>
            <div className="image-item">
              <img src="/assets/Examples/Captura con aceleracion.png" alt="Simulación con aceleración" className="image" />
              <div className="image-overlay">
                <p className="image-title">Simulación con Aceleración</p>
                <p className="image-description">Efecto de la aceleración sobre la trayectoria.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="analysis-card">
          <h3>2. Impacto de la Fuerza Aplicada en el Movimiento Circular</h3>
          <p>
            Cuando una fuerza externa es aplicada a un objeto en movimiento circular, el objeto experimenta una alteración en su trayectoria. Este tipo de situaciones son comunes en el mundo real, como cuando un objeto es lanzado con una fuerza adicional mientras sigue una trayectoria circular.
          </p>
          <div className="image-grid">
            <div className="image-item">
              <img src="path_to_image_without_force.jpg" alt="Simulación sin fuerza aplicada" className="image" />
              <div className="image-overlay">
                <p className="image-title">Sin Fuerza Aplicada</p>
                <p className="image-description">Trayectoria sin interferencia externa.</p>
              </div>
            </div>
            <div className="image-item">
              <img src="path_to_image_with_force.jpg" alt="Simulación con fuerza aplicada" className="image" />
              <div className="image-overlay">
                <p className="image-title">Con Fuerza Aplicada</p>
                <p className="image-description">Cambio en la trayectoria debido a la fuerza externa.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="analysis-card">
          <h3>3. Comparación entre Movimiento Circular Uniforme y Movimiento Circular con Fuerza</h3>
          <p>
            Al comparar las simulaciones de un movimiento circular uniforme (sin aceleración ni fuerzas externas) y un movimiento circular con fuerzas aplicadas, es evidente que el segundo caso introduce una complejidad adicional en la dinámica del sistema.
          </p>
          <div className="image-container">
            <img src="path_to_comparison_image.jpg" alt="Comparación entre movimiento uniforme y con fuerza" className="image" />
          </div>
        </div>

        <div className="analysis-card">
          <h3>4. Conclusiones Generales del Análisis</h3>
          <p>
            A través de las simulaciones realizadas, podemos concluir que el movimiento circular idealizado (sin aceleración ni fuerzas externas) se mantiene constante a lo largo del tiempo, siguiendo una trayectoria perfectamente circular. Sin embargo, cualquier alteración en el sistema, ya sea por una aceleración tangencial o una fuerza aplicada, genera cambios significativos en la trayectoria del objeto.
          </p>
          <p>
            Este análisis proporciona una comprensión más profunda sobre cómo las fuerzas y la aceleración afectan el comportamiento de los objetos en movimiento circular. Es un paso esencial para comprender los principios fundamentales de la física del movimiento y para aplicaciones más avanzadas como simulaciones en la industria, en física avanzada, y en áreas de ingeniería y tecnología.
          </p>
        </div>
      </div>
    );
  };

  export default Analysis;
