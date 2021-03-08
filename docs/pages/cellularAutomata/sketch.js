const size = 500;

function setup() {
  const canvas = createCanvas(size, size);
  text = "";
  p = createP(text);
  canvas.parent("p5canvas");
  background(23, 200, 146);
  strokeWeight(2);
  row = 15;
  col = 15;
  cellW = size / col;
  cellH = size / row;
  automata = new Automata(size, col, row);
  //setFrameRate(5);
}

function draw() {
  p.elt.innerText = text;
  automata.drawAutomata();
}

function mouseClicked() {
  text = `${mouseX}, ${mouseY}`;
  if (mouseX >= 0 && mouseX <= size && mouseY >= 0 && mouseY <= size) {
    // valid click
    x = Math.floor(mouseX / cellW);
    y = Math.floor(mouseY / cellH);
    automata.toggleCell(x, y);
    text = `${x}, ${y} cell`;
  }
}
