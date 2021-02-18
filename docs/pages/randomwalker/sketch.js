const width = 400;
const height = 400;

function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  walker = new Walker(width / 2, height / 2);
  background(64, 128, 128);
  colorCounter = 0;
  colorMode(HSB, 1);
  strokeWeight(5);
}

function draw() {
  colorCounter = (colorCounter + 0.001) % 1;
  stroke(colorCounter, 1, 1, 0.35)
  walker.display();
}
