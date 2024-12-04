// src/components/InvestigacionFallida.js
import React from 'react';
import './InvestigacionFallida.css';

const InvestigacionFallida = () => {
  return (
    <div className="investigacion-fallida-container">
      <h2>Propuesta de Investigación: Análisis de Movimiento Circular por Visión por Computadora</h2>
      
      <div className="explicacion">
        <h3>Resumen de la Investigación:</h3>
        <p>
          La propuesta de investigación se centró en analizar el movimiento circular de un objeto utilizando visión por computadora. 
          La idea era calcular la velocidad, los ángulos y la aceleración del objeto a partir de las posiciones registradas en un video.
        </p>

        <h3>Metodología:</h3>
        <p>
          Para lograr este análisis, se desarrollaron varios algoritmos para calcular los ángulos del movimiento, el tiempo entre revoluciones y la velocidad. 
          En teoría, los cálculos de la velocidad deberían haberse realizado utilizando los tiempos entre las revoluciones, y la fórmula de la velocidad circular.
          Sin embargo, la implementación se enfrentó a varias dificultades.
        </p>

        <h3>Problemas Encontrados:</h3>
        <ul>
          <li><strong>Inexactitudes en los Cálculos de Ángulos:</strong> Los ángulos calculados mostraron discontinuidades, lo que hizo que los resultados fueran poco confiables. Este tipo de error ocurre cuando los valores de los ángulos no se ajustan de manera continua y progresiva a través del tiempo.</li>
          <li><strong>Detección de Posiciones:</strong> El algoritmo para detectar las posiciones del objeto también presentó limitaciones. Las imágenes fueron afectadas por factores como la calidad del video y la dificultad para distinguir el objeto de fondo o posibles interferencias visuales.</li>
          <li><strong>Fórmulas de Velocidad no Precisas:</strong> A pesar de aplicar la fórmula estándar para la velocidad circular, los resultados obtenidos no fueron suficientemente precisos debido a las imprecisiones en la detección de posiciones y los ángulos. La relación entre el tiempo y la distancia recorrida no pudo establecerse de manera confiable.</li>
        </ul>

        <h3>Lecciones Aprendidas:</h3>
        <p>
          Esta experiencia resaltó la importancia de tener datos de alta calidad y métodos de procesamiento de imágenes más robustos. 
          A pesar de la teoría sólida detrás de las fórmulas, la aplicación práctica de visión por computadora en este contexto mostró que la precisión depende enormemente de la calidad del video y las condiciones del entorno.
        </p>

        <h3>Conclusión:</h3>
        <p>
          La investigación no logró obtener los resultados esperados debido a las limitaciones inherentes a las herramientas y técnicas utilizadas. 
          Se identificaron áreas de mejora, como el uso de algoritmos más avanzados de detección de objetos, mayor precisión en el procesamiento de imágenes y mejores condiciones de grabación.
        </p>
      </div>
    </div>
  );
};

export default InvestigacionFallida;
