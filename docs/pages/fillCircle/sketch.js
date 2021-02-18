//const width = 400;
//const height = 400;
const size = 400;

function setup() {
  const canvas = createCanvas(size, size);
  canvas.parent("p5canvas");
  stroke(0, 128);
  strokeWeight(0.07);
  background(220);
}

function draw() {
  // push();
  translate(size / 2, size / 2);
  v1 = p5.Vector.random2D().mult(size / 2);
  v2 = p5.Vector.random2D().mult(size / 2);
  v3 = p5.Vector.random2D().mult(size / 2);
  line(v1.x, v1.y, v2.x, v2.y);
  line(v2.x, v2.y, v3.x, v3.y);
  // pop();
}