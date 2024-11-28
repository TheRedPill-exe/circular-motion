// src/App.js
import React from 'react';
import Introduction from './components/Introduction';
import Theory from './components/Theory';
import Analysis from './components/Analysis';
import Conclusion from './components/Conclusion';
import Videos from './components/Videos';
import './styles.css';  // Importa el archivo CSS

function App() {
  return (
    <div className="app-container">
      <h1 className="main-title">Proyecto de Movimiento Circular</h1>
      <Introduction />
      <Theory />
      <Analysis />
      <Conclusion />
      <Videos />
    </div>
  );
}

export default App;
