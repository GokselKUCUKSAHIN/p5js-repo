let w = 900;
let h = 750;

const data = testData

function setup() {
  canvas = createCanvas(w, h)
  canvas.parent("p5canvas");
  imageMode(CENTER);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  strokeWeight(5);
  // console.log(data.pins)
  // console.log(data.lines)
}

let count = 0

function draw() {
  background(240);
  noFill();
  renderPins(data)
  renderLines(data, count+=3)
}

function renderPins(data) {
  push();
  translate((w - data.width) / 2, (h - data.height) / 2);
  fill(255, 0, 0)
  stroke(0)
  strokeWeight(0.5)
  data.pins.forEach(pin => {
    ellipse(pin.x, pin.y, 5, 5)
  })
  pop()
}

function renderLines(data, step) {
  push()
  translate((w - data.width) / 2, (h - data.height) / 2);
  noFill()
  stroke(0)
  strokeWeight(0.26)
  if (step > data.lines.length) {
    step = data.lines.length
  }
  for (let i = 0; i < step; i++) {
    const knitLine = data.lines[i]
    const start = data.pins[knitLine.start]
    const end = data.pins[knitLine.end]
    line(start.x, start.y, end.x, end.y)
  }
  pop()
}

function p5redraw() {
  redraw();
}