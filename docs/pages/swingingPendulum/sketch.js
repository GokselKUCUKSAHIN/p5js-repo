function setup() {
  width = 600;
  height = 400;
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  origin = createVector(width / 2, 0);
  pendulum = new Pendulum(origin, 270);
}

function draw() {
  background(200);
  pendulum.update();
}