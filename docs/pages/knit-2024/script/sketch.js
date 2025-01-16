let w = 600;
let h = 600;

let knitData = gksData

// let count = 0

function setup() {
  canvas = createCanvas(w, h)
  canvas.parent("p5canvas");
  imageMode(CENTER);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  strokeWeight(5);
  knitData.lines = shuffle(knitData.lines)
}

function draw() {
  background(240);
  noFill();
  renderPins(knitData)
  if (vueInstance.isPlaying) {
    const currentCount = parseInt(vueInstance.count, 10)
    if (currentCount > knitData.lines.length) {
      vueInstance.count = knitData.lines.length
      vueInstance.isPlaying = false
    } else {
      vueInstance.count = currentCount + 3
    }
  }
  renderLines(knitData, vueInstance.count)
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
    step = data.lines.length - 1
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

function getRandomInt(min, max) {
  return min + Math.floor((max - min) * Math.random())
}

function shuffle(array) {
  for (let i = 0; i < 3 * array.length; i++) {
    const first = getRandomInt(0, array.length)
    const temp = array[first]
    const second = getRandomInt(0, array.length)
    array[first] = array[second]
    array[second] = temp
  }
}