import React from 'react';
import './Resumen.css';

const Resumen = () => {
  return (
    <div className="resumen-container">
      <h2>Resumen de los Proyectos</h2>
      <p>
        Este sitio web presenta un proyecto elaborado en python y desplegado con JavaScript usando React, se busca analizar y simular
        el comportamiento de objetos en movimiento (especificamente movimiento circular) con el objetivo de estudiar sus características dinámicas.
      </p>
      <a 
        href="https://drive.google.com/drive/folders/1G5BhYLVOjllsJ3z1-bDs9ozBlvR2yuxp?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="enlace-proyectos">
        Accede a la app ejecutable aquí
      </a>
      <h3>Proyectos Adicionales</h3>
      <p>
        Para obtener más información sobre los proyectos adicionales, te invitamos a visitar nuestra sección
        de proyectos donde podrás explorar una variedad de simulaciones, informes y resultados en detalle (al final de la pagina).
      </p>
      <div className="mensaje-base-datos">
        <h2>¡Se generó una base de datos de 250 videos!</h2>
      </div>
      <a 
        href="https://drive.google.com/drive/folders/1ZPmvQUR2OdqYhEGiYqajXEPObwvc4bnB?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="enlace-proyectos">
        Accede a la base de datos aquí
      </a>
     

      <footer className="footer-resumen">
        <p>&copy; 2024 Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Resumen;
