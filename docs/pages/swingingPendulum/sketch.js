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

class Pendulum {
  gravity = 0.5;
  constructor(origin, length) {
    this.origin = origin;
    this.length = length;
    this.theta = PI / 3;
    this.angularVel = 0;
    this.angularAcc = 0.000011;
    this.calculate();
  }

  calculate() {
    this.ballOrigin = createVector();
    this.ballOrigin.x = sin(this.theta) * this.length;
    this.ballOrigin.y = cos(this.theta) * this.length;
  }

  update() {
    let force = (-this.gravity * sin(this.theta)) / this.length;
    this.angularAcc = force;
    this.angularVel += this.angularAcc;
    this.angularVel *= 0.999;
    this.theta += this.angularVel;
    this.calculate();
    this.draw();
  }

  draw() {
    push();
    translate(this.origin.x, this.origin.y);
    // Swing Point
    fill(0);
    ellipse(0, 0, 8, 8);
    // Arm
    stroke(0);
    strokeWeight(3);
    line(0, 0, this.ballOrigin.x, this.ballOrigin.y);
    // Bob
    strokeWeight(2);
    fill(255, 255, 0, 128);
    ellipse(this.ballOrigin.x, this.ballOrigin.y, 50, 50);
    pop();
  }
}
