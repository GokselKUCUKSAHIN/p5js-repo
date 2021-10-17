const width = 800;
const height = 800;

function setup() {
  const center = createVector(width / 2, height / 2);
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  // stroke(0);
  // strokeWeight(2);
  fill(color(255, 0, 0));

  ellipse(center.x, center.y, 10, 10);
  const slider = createSlider(1, 24, 12, 1);
  slider.style("width", "300px");
  slider.parent("sliders")
}

function draw() {
  /*
  background(51);
  push();
  strokeWeight(4);
  //vec = createVector(138.564, -80);


  vec = createVector(mouseX - center.x, mouseY - center.y).setMag(150);
  drawArrow(center, vec, "black");
  pop();
  */
}

/*
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

 */
