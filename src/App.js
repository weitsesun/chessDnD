import React from 'react';
import './App.css';
import Knight from './knight';
import Square from './square';

function App() {
  return (
    <div className="Square">
      <Square black>
        <Knight knightPosition = {[0, 0]}/>
      </Square>
    </div>
  );
}

export default App;