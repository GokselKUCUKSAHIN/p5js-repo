const size = 400;
let w;
let h;

function setup() {
  const canvas = createCanvas(size, size);
  canvas.parent("p5canvas");
  background(23, 200, 146);
  automata = new Automata(size, 10, 10);
}


function draw() {
  automata.draw();
}
