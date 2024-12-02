
  import React from 'react';
  import './Instructions.css';
  import Fig1 from '../assets/Examples/Fig 1.png';
  import Fig2 from '../assets/Examples/Fig 2.png';
  import Fig3 from '../assets/Examples/Fig 3.png';
  import Fig4 from '../assets/Examples/Fig 4.png';
  import Fig5 from '../assets/Examples/Fig 5.png';
  import Fig6 from '../assets/Examples/Fig 6.png';
  //import Fig7 from '../assets/Examples/Fig 7.png';

  const Instructions = () => {
    return (
      <div className="instrucciones-container">
        <h1 className="instrucciones-title">Instrucciones para crear un video y analizarlo</h1>
        <div className="instrucciones-content">
          <p>Esta aplicación incluye una interfaz gráfica diseñada para cerar, 
            procesar un video y analizar el movimiento circular que se presenta en él. 
            A continuación, se detallan los pasos para interactuar con la interfaz:</p>
          <ul>
            <li>
              <h2>Crear el video</h2>
              <strong>Paso 1: Preparación del Video</strong>  
              <br />
              Como primer paso, debes presionar el botón verde "Generar Video" (Fig 1.)
              <img src={Fig1} alt="Interfaz con fuerza" className="instrucciones-image" />
            </li>
            <li>
              <strong>Paso 2: Digita los datos del video</strong>  
              <br />
              Aparecerá una ventana emergente que te solicitará ingresar la información del video. 
              Debes ingresar el nombre del video, la duración del video y el radio del círculo principal, es decir, 
              la distancia en pixeles del centro del video (La proporción usada para facilitar y generar exactitud en los calculos fue: 1px -> 1 cm ). 
              Y por último, debes seleccionar la ruta donde se guardará tu video y tu archivo de texto para procesarlo. (Fig 2.)
              <img src={Fig2} alt="Interfaz con fuerza" className="instrucciones-image" />
            </li>
            <li>
              <strong>Paso 3: Digitación de datos de la masa</strong>  
              <br />
              Aparecerá una ventana emergente que te solicitará ingresar la información del objeto.
              Debes ingresar la cantidad de vueltas que dará el objeto (esto sin contar aceleración, 
              para determinar una velocidad angular inicial), su aceleración tangencial en m/s^2, su masa y marcar una 
              casilla para determinar su color. (Fig 3.)
              <img src={Fig3} alt="Interfaz con fuerza" className="instrucciones-image" />
              <br />

            </li>
            <li>
              <strong>Paso 4: Configuración de las fuerzas a aplicar en el objeto</strong>  
              <br />
              Al presionar el botón "Configurar Fuerzas" aparecerá una ventana emergente que te solicitará ingresar la información de las fuerzas 
              que se aplicarán al objeto de forma tangencial al eje de giro. (Fig 3.)
              Debes ingresar el momento en segundos en el que se aplicará cada fuerza, la magnitud de cada fuerza en Newtons
              y presionar el botón de "Guardar". (Si no deseas aplicar fuerzas, debes poner cada magnitud en 0).
              <img src={Fig4} alt="Interfaz con fuerza" className="instrucciones-image" />
            </li>
            <li>
              <strong>Paso 5: Generar video</strong>  
              <br />
              Después de resionas el botón de "Guardar" y posteriormente presionas generar video.
            </li>
            <h2>Analizar video e informe de texto</h2>
            <li>
              <strong>Paso 1: Seleccionar video</strong>  
              <br />
              Después de presionar el botón "Calcular datos de video" debes presionar el botón de "Seleccionar video".
              Ten en cuenta que el informe generado y el video deben estar en la misma carpeta.
              Debes presionar el botón de "Calcular" y se iniciará el proceso de análisis del video. (tarda la misma cantidad 
              de tiempo que el video, Fig 5.)
              <img src={Fig5} alt="Interfaz con fuerza" className="instrucciones-image" />
            </li>
            <li>
              <strong>Paso 2: Analizar resultados</strong>  
              <br />
              En una primera instancia, se mostrarán los datos de un modelo en desarrollo para analizar el análisis dinamico de una partícula.
              Al cerrar esta ventana, se mostrarán los datos correctos del video analizado.
              En el primer cuadrante se muestran las posiciones x e y del objeto en función del tiempo y la variación del angulo.
              En el segundo cuadrante se muestra la aceleración angular, tangencial y centrípeta en función del tiempo.
              En el tercer cuadrante se muestra la velocidad angular en función del tiempo. (Fig 6.)
              <img src={Fig6} alt="Interfaz con fuerza" className="instrucciones-image" />
            </li>
            <li>
              <strong>Paso 3: Guardar gráficas</strong>  
              <br />
              Para guardar el gráfico debes presionar el botón resaltado en la figura 5. (parte inferior izquierda).
            </li>
          </ul>
          <p>Si tienes alguna pregunta o experimentas problemas con la interfaz, consulta la documentación o contáctanos para soporte técnico.</p>
        </div>
      </div>
    );
  };

  export default Instructions;
