import React from 'react';
import PokeGrid from './components/PokeGrid';
import './Styles/css/index.css'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <h1>Poké Pal</h1>
      <PokeGrid />
    </div>
  );
}

export default App;
