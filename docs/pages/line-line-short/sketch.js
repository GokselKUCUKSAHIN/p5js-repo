let w = window.innerWidth;
let h = window.innerHeight;

const pins = [
  new Pin(60, 60, 12),
  new Pin(300, 180, 12),
  new Pin(100, 280, 12),
  new Pin(150, 150, 12)
];

function setup() {
  canvas = createCanvas(w, h);
  link1 = new Link(...pins.slice(0, 2), 3);
  link2 = new Link(...pins.slice(2, 4), 3);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(240);
  // tri.show();
  link1.show();
  link2.show();
  for (const pin of pins) {
    pin.show(mouseX, mouseY, capBorders);
  }

  // DEMO

  push();
  stroke(0);
  strokeWeight(1);
  fill(255, 0, 0);
  translate(300, 300);
  rotate(30);
  rect(0, 0, 100, 200);
  fill(255);
  circle(0, 0, 20);
  fill(0, 0, 255);
  circle()
  pop();
}

function capBorders(px, py, padding = 0) {
  const limitH = w - padding;
  const limitV = h - padding;
  if (px > limitH) {
    px = limitH;
  } else if (px < padding) {
    px = padding;
  }
  if (py > limitV) {
    py = limitV;
  } else if (py < padding) {
    py = padding;
  }
  return [px, py];
}

function recapPinsFromBorder(sw, sh, padding = 10) {
  for (const pin of pins) {
    if (pin.x > sw) pin.x = sw - padding;
    if (pin.y > sh) pin.y = sh - padding;
  }
}

function mousePressed() {
  const [cx, cy] = capBorders(mouseX, mouseY);
  for (const pin of pins) {
    pin.pressed(cx, cy);
  }
}

function mouseReleased() {
  for (const pin of pins) {
    pin.notPressed();
  }
  // bodge
  const s1 = veclikeToP5Vec(link1.start)
  const e1 = veclikeToP5Vec(link1.end);
  const s2 = veclikeToP5Vec(link2.start);
  const e2 = veclikeToP5Vec(link2.end);
  const dist = distanceBetweenFeatureLines(s1, e1, s2, e2);
  console.log("dist:", dist);
}

window.onresize = function () {
  w = window.innerWidth;
  h = window.innerHeight;
  recapPinsFromBorder(w, h);
  resizeCanvas(w, h);
}
