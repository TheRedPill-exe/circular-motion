
import React from 'react';
import './Instructions.css';

const Instructions = () => {
  return (
    <div className="instrucciones-container">
      <h1 className="instrucciones-title">Instrucciones para crear un video y analizarlo</h1>
      <div className="instrucciones-content">
        <p>Esta aplicación incluye una interfaz gráfica diseñada para cerar, procesar un video y analizar el movimiento circular que se presenta en él. A continuación, se detallan los pasos para interactuar con la interfaz:</p>
        <ul>
          <li>
            <h2>Crear el video</h2>
            <strong>Paso 1: Preparación del Video</strong>  
            <br />
            Como primer paso, debes presionar el botón verde "Generar Video" (Fig 1.) 
          </li>
          <li>
            <strong>Paso 2: Digita los datos del video</strong>  
            <br />
            Aparecerá una ventana emergente que te solicitará ingresar la información del video. 
            Debes ingresar el nombre del video, la duración del video y el radio del círculo principal, es decir, 
            la distancia en pixeles del centro del video (La proporción usada para facilitar y generar exactitud en los calculos fue: 1px -> 1 cm ). 
            Y por último, debes seleccionar la ruta donde se guardará tu video y tu archivo de texto para procesarlo. (Fig 2.)
          </li>
          <li>
            <strong>Paso 3: Digitación de datos de la masa</strong>  
            <br />
            Aparecerá una ventana emergente que te solicitará ingresar la información del objeto.
            Debes ingresar la cantidad de vueltas que dará el objeto (esto sin contar aceleración, 
            para determinar una velocidad angular inicial), su aceleración tangencial en m/s^2, su masa y marcar una 
            casilla para determinar su color.
            <br />

          </li>
          <li>
            <strong>Paso 4: Configuración de las fuerzas a aplicar en el objeto</strong>  
            <br />
            Al presionar el botón "Configurar Fuerzas" aparecerá una ventana emergente que te solicitará ingresar la información de las fuerzas 
            que se aplicarán al objeto de forma tangencial al eje de giro. (Fig 3.)
            Debes ingresar el momento en segundos en el que se aplicará cada fuerza, la magnitud de cada fuerza en Newtons
            y presionar el botón de "Guardar". (Si no deseas aplicar fuerzas, debes poner cada magnitud en 0).
          </li>
          <li>
            <strong>Paso 5: Generar video</strong>  
            <br />
            Después de resionas el botón de "Guardar" y posteriormente presioas generar video.
          </li>
          <h2>Analizar video e informe de texto</h2>
          <li>
            <strong>Paso 6: Exportación de Resultados</strong>  
            <br />
            Si la funcionalidad está habilitada, tendrás la opción de exportar los datos procesados o los gráficos generados a archivos externos (como imágenes o archivos CSV) para análisis adicional.
          </li>
          <li>
            <strong>Paso 7: Reiniciar</strong>  
            <br />
            Si deseas procesar un nuevo video, simplemente cierra la aplicación y vuelve a abrirla para cargar un nuevo archivo.
          </li>
        </ul>
        <p>Si tienes alguna pregunta o experimentas problemas con la interfaz, consulta la documentación o contáctanos para soporte técnico.</p>
      </div>
    </div>
  );
};

export default Instructions;
