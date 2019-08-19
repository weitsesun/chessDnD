const knightPosition = [0, 0];
const observer = null;

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