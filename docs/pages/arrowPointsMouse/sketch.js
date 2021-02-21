function setup() {
  const width = 400;
  const height = 400;
  center = createVector(200, 200);
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");

  // stroke(0);
  // strokeWeight(2);
  // ellipse(width / 2, height / 2, width * 0.8, height * 0.8);
}

function draw() {
  background(220);
  push();
  strokeWeight(4);
  //vec = createVector(138.564, -80);
  vec = createVector(mouseX - center.x, mouseY - center.y).setMag(160);
  drawArrow(center, vec, "black");
  pop();
}

const drawArrow = (base, vec, color) => {
  push();
  translate(base.x, base.y);
  stroke(color);
  fill(color);
  strokeWeight(3);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(arrowSize, 0, 0, arrowSize * 0.5, 0, arrowSize * -0.5);
  pop();
};
