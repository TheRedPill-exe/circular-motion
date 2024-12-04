// src/App.js
import React from 'react';
import Introduction from './components/Introduction';
import Theory from './components/Theory';
import Analysis from './components/Analysis';
import Conclusion from './components/Conclusion';
import Videos from './components/Videos';
import Gallery from './components/Gallery';
import Instructions from './components/Instructions.js'; 
import InvestigacionFallida from './components/InvestigacionFallida.js';
import Footer from './components/Footer.js'; 
import Resumen from './components/Resumen.js';
import './styles.css';  // Importa el archivo CSS

function App() {
  return (
    <div className="app-container">
      <h1 className="main-title">Proyecto de Movimiento Circular</h1>
      <Introduction />
      <Resumen />
      <Instructions />
      <Theory />
      <Analysis />
      <Conclusion />
      <InvestigacionFallida />
      <Videos />
      <Footer />
    </div>
  );
}

export default App;
