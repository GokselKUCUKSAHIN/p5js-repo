const width = 400;
const height = 400;

function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  walker = new Walker(width / 2, height / 2);
  background(64, 128, 128);
  colorCounter = 0;
  colorMode(HSB, 255);
  strokeWeight(3);
}

function draw() {
  colorCounter = (colorCounter + 0.1) % 255;
  stroke(colorCounter, 255, 255, 60)
  walker.display();
}
