const size = 500;

function setup() {
  const canvas = createCanvas(size, size);
  isStarted = false;
  canvas.parent("p5canvas");
  background(23, 200, 146);
  strokeWeight(2);
  row = 20;
  col = 20;
  cellW = size / col;
  cellH = size / row;
  automata = new Automata(size, row, col);
  setFrameRate(30);
}

function draw() {
  automata.drawAutomata(); 
  if (isStarted) {
    automata.updateAutomata();
  }
}

function mouseClicked() {
  isStarted = false;
  //text = `${mouseX}, ${mouseY}`;
  if (mouseX >= 0 && mouseX <= size && mouseY >= 0 && mouseY <= size) {
    // valid click
    x = Math.floor(mouseX / cellW);
    y = Math.floor(mouseY / cellH);
    automata.toggleCell(x, y);
    //text = `${x}, ${y} cell`;
  }
}

function keyPressed()
{
  if (keyCode === 32)
  {
    isStarted = true;
  }
}
