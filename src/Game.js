
export function observe(receiveFunction) {
  const rand = () => Math.floor(Math.random() * 8);
  setInterval(() => receiveFunction([rand(), rand()]), 500);
}