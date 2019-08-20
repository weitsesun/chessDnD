let knightPosition = [3, 3];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(o) {
  if(observer) {
    throw new Error('Multiple observers are not allowed');
  }

  observer = o;
  emitChange();
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition;
  const dx = Math.abs(x - toX);
  const dy = Math.abs(y - toY);

  return (
    (dx === 1 && dy === 2) || (dx === 2 && dy ===1)
  );
}