const size = 500;
let w;
let h;

function setup() {
  const canvas = createCanvas(size, size);
  canvas.parent("p5canvas");
  background(23, 200, 146);
  strokeWeight(2);
  automata = new Automata(size, 15, 15);
  setFrameRate(1);
}

function draw() {
  automata.drawAutomata();
}
