const width = 600;
const height = width;
const sliders = {
  modulo: 0,
  dotCount: 0
};

const drawRoutine = drawRoutineFactory();


function setup() {
  // tuple = new Tuple();
  center = createVector(width / 2, height / 2);
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  // stroke(0);
  // strokeWeight(2);

  // fill(color(255, 0, 0)); // RED
  // ellipse(center.x, center.y, 10);
  // MODULO
  sliders.modulo = select("#modulo");
  sliders.modulo.input(moduloEvent);

  // MODULO SPAN
  moduloSpan = document.querySelector("#modulo-value");

  // DOT COUNT
  sliders.dotCount = select("#dot-count");
  sliders.dotCount.input(dotCountEvent);

  // DOT COUNT SPAN
  dotSpan = document.querySelector("#dot-value");

  fill(color(255, 255, 0)); // YELLOW
  noStroke();
  // TEST
  noLoop();
  drawRoutine(10, 2);
}

function calcEndPoint(centerVector, angleDegree, r) {
  return createVector(centerVector.x + r * cos(angleDegree), centerVector.x + r * sin(angleDegree));
}

// EVENTS
function moduloEvent() {
  // console.log("Modulo Event Triggred:", sliders.modulo.value());
  const sliverValue = sliders.modulo.value();
  moduloSpan.textContent = sliverValue;
  drawRoutine(undefined, sliverValue);
}

function dotCountEvent() {
  // console.log("Dot Count Event Triggred:", sliderValue);
  const sliderValue = sliders.dotCount.value();
  dotSpan.textContent = sliderValue;
  drawRoutine(sliderValue);
}

function calcDots(dotCount) {
  const gap = TWO_PI / dotCount;
  const dotArray = [];
  for (let i = -1.5707963267948966; i < 4.71238898038469; i += gap) {
    const point = calcEndPoint(center, i, width * 0.45);
    dotArray.push(point);
  }
  return dotArray;
}

function getLinks(dots, mod) {
  const linkVerticies = [];
  for (let i = 0; i < dots.length; i++) {
    linkVerticies.push(dots[i]);
    const next = (((i + 1) * mod) - 1) % dots.length;
    linkVerticies.push(dots[next]);
  }
  return linkVerticies;
}

function drawDots(dots) {
  for (const dot of dots) ellipse(dot.x, dot.y, 6);
}

function drawLinks(links) {
  push();
  noFill();
  stroke(color(230));
  strokeWeight(1);
  for (let i = 0; i < links.length - 1; i += 2) {
    const p1 = links[i];
    const p2 = links[i + 1];
    line(p1.x, p1.y, p2.x, p2.y);
  }
  pop();
}

function drawRoutineFactory() {
  let dot = 10;
  let modulo = 2;
  return function (d = dot, m = modulo) {
    if (!!d) dot = d;
    if (!!m) modulo = m;
    console.log("d:", dot, "m:", modulo);
    background(51);
    const dots = calcDots(dot);
    const links = getLinks(dots, modulo);
    drawLinks(links);
    drawDots(dots);
    redraw(1);
  }
}