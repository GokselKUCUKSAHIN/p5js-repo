const size = 400;

function setup() {
  const canvas = createCanvas(size, size);
  canvas.parent("p5canvas");
  colorMode(HSB, 1);
  strokeWeight(5);
}

function draw() {
  background(random(), 1, 1);
}
