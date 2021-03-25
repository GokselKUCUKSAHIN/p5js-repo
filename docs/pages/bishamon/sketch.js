let w = window.innerWidth;
let h = window.innerHeight;
const paddingRatio = 0.6;
let canvas, bishamonImg;
let turn = 0;
const rune = "プロジェクト毘沙門天忍清晨汉集".split('');

// const rune = "Hello World".split('');

function setup() {
  canvas = createCanvas(w, h)
  imageMode(CENTER);
  rectMode(CENTER);
  ellipseMode(CENTER);
  textAlign(CENTER);
  strokeWeight(5);
}

function draw() {
  // background(0, 50);
  background(15);
  //
  noFill();
  const autoSize = getAutoSize();
  // RUNE
  renderRune(autoSize * 0.42);
  // CIRCLE
  // stroke(int(random(230, 255)), 150);
  stroke(255);
  ellipse(w / 2, h / 2, autoSize * 0.80);
  ellipse(w / 2, h / 2, autoSize);
  // IMAGE
  image(bishamonImg, w / 2, h / 2, autoSize * paddingRatio, autoSize * paddingRatio);
}

function renderRune(size) {
  push();
  translate(w / 2, h / 2);
  rotate(turn -= 0.002);
  textSize(size * 0.20);
  //
  noStroke();
  for (let i = 0; i < rune.length; i++) {
    rotate(radians(360 / (rune.length)));
    push();
    translate(size, 0);
    rotate(HALF_PI);
    //fill(255, 120);
    fill(255);
    text(rune[i], 0, 0);
    pop();
  }
  pop();
}

function getAutoSize() {
  const ratio = w / h;
  // let rw, rh;
  let s;
  if (ratio >= 1.3) {
    // LANDSCAPE
    s = h * 0.8;
    if (s < 200) {
      s = 200;
    }
  } else {
    // PORTRAIT
    s = w * 0.7;
    if (s < 200) {
      s = 200;
    }
    if (s - 200 > h) {
      s = h - 200;
    }
  }
  return s;
}

function preload() {
  bishamonImg = loadImage('res/img/bishamon.png');
}

window.onresize = function () {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;
  //canvas.size(w, h);
  resizeCanvas(w, h);
}
