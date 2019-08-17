import React from 'react';
import Square from './square';
import Knight from './knight';

export default function Board() {
  return(
    <div>
      <Square black>
        <Knight />
      </Square>
    </div>
  )
}

function renderSquare(x, y, [knightX, knightY]) {
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  const piece = isKnightHere ? <Knight /> : null;

  return <Square black = { black }>{piece}</Square>;
}