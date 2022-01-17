const width = 800;
const height = 800;
const sliders = {
  modulo: 0,
  dotCount: 0
};

function setup() {
  center = createVector(width / 2, height / 2);
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  // stroke(0);
  // strokeWeight(2);

  fill(color(255, 0, 0)); // RED
  ellipse(center.x, center.y, 10);
  // MODULO
  sliders.modulo = select("#modulo");
  sliders.modulo.input(moduloEvent);

  // DOT COUNT
  sliders.dotCount = select("#dot-count");
  sliders.dotCount.input(dotCountEvent);

  fill(color(255, 255, 0)); // YELLOW
  // TEST
  noLoop();
}

function calcEndPoint(centerVector, angleDegree, r) {
  return createVector(centerVector.x + r * cos(angleDegree), centerVector.x + r * sin(angleDegree));
}

function draw() {

}

// EVENTS
function moduloEvent() {
  console.log("Modulo Event Triggred:", sliders.modulo.value());
}

function dotCountEvent() {
  const sliderValue = sliders.dotCount.value();
  console.log("Dot Count Event Triggred:", sliderValue);
  drawDots(sliderValue);
}

function drawDots(dotCount) {
  background(51);
  const gap = TWO_PI / dotCount;
  for (let i = -1.5707963267948966; i < 4.71238898038469; i += gap) {
    const point = calcEndPoint(center, i, 300);
    ellipse(point.x, point.y, 5);
  }
  redraw(1);
}
