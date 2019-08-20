import React from 'react';
import Square from './square';
import Knight from './knight';
import { canMoveKnight, moveKnight } from './Game'

import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function Board({knightPosition}) {

  const squares = [];

  for(let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return(
    <div style={{
      width: '500px',
      height: '500px',
      display: 'flex',
      flexWrap: 'wrap',
      margin: 'auto'
    }}>
      {squares}
    </div>
  )
}

function renderSquare(i, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);

  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <DndProvider backend={HTML5Backend}>
    <div onClick={() => handleSquareClick(x, y)} key = {i} style={{width: '12.5%', height: '12.5%'}}>
      <Square black = { black }>{piece}</Square>
    </div>
    </DndProvider>
  )
}

function handleSquareClick(toX, toY) {
  if(canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

export default Board;