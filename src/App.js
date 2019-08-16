import React from 'react';
import './App.css';
import Knight from './knight';
import Square from './square';

function App() {
  return (
    <div className="App">
      <Square black>
        <Knight />
      </Square>
    </div>
  );
}

export default App;