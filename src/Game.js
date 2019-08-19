
export function observe(receive) {
  const rand = () => Math.floor(Math.random() * 8);
  setInterval(() => receive([rand(), rand()]), 500);
}