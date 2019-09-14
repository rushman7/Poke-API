import React from 'react';
import PokeData from "./components/PokeData";
import './Styles/css/index.css'
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <h1>Poké Pal</h1>
      <PokeData />
    </div>
  );
}

export default App;
