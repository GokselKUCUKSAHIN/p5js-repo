let w = window.innerWidth;
let h = window.innerHeight;

const pins = [
  new Pin(60, 60, 20),
  new Pin(300, 205, 20),
  new Pin(100, 330, 20)
];

function setup() {
  canvas = createCanvas(w, h);
  tri = new MyTriangle(...pins);
  textSize(23);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);
  tri.show();
  for (const pin of pins) {
    pin.show(mouseX, mouseY, capBorders);
  }
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
}

window.onresize = function () {
  w = window.innerWidth;
  h = window.innerHeight;
  recapPinsFromBorder(w, h);
  resizeCanvas(w, h);
}
