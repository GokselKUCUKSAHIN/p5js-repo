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

  // MODULO
  moduloSlider = select("#modulo");
  moduloSlider.input(moduloEvent);

  // DOT COUNT
  dotCountSlider = select("#dot-count");
  dotCountSlider.input(dotCountEvent);
}

function draw() {
  select('#modulo').value();
}

// EVENTS
function moduloEvent() {
  console.log("Modulo Event Triggred:", moduloSlider.value());
}

function dotCountEvent() {
  console.log("Dot Count Event Triggred:", dotCountSlider.value());
}
