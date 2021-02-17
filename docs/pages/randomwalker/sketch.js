const width = 400;
const height = 400;

function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  walker = new Walker(width / 2, height / 2);
  background(64, 128, 128);
  stroke(255);
}

function draw() {
  //
  point(walker.x, walker.y);
  walker.moveRandomPoint();
}
