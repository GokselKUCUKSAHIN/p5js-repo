const size = 500;

// const points = [];

function setup() {
  const canvas = createCanvas(size, size);
  canvas.parent("p5canvas");
  // stroke(0, 128);
  // strokeWeight(0.07);
  // noLoop();
  c1 = new Pin(60, 60, 10);
  c2 = new Pin(415, 205, 10);
  c3 = new Pin(100, 330, 10);
  tri = new MyTriangle(c1, c2, c3);

  // link1 = new Link(c1, c2);
  // link2 = new Link(c2, c3);
  // link3 = new Link(c3, c1);

  textSize(23);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(240);
  tri.show();
  c1.show(mouseX, mouseY, capBorders);
  c2.show(mouseX, mouseY, capBorders);
  c3.show(mouseX, mouseY, capBorders);


  // link1.show();
  // link2.show();
  // link3.show();
}

function isInBorders(x, y, padding = 0) {
  const limit = size - padding;
  return x >= padding && x <= limit && y >= padding && y <= limit;
}

function capBorders(px, py, padding = 0) {
  // console.log("capBorders")
  const limit = size - padding;
  if (px > limit) {
    px = limit;
  } else if (px < padding) {
    px = padding;
  }

  if (py > limit) {
    py = limit;
  } else if (py < padding) {
    py = padding;
  }
  // console.log(px, py)
  return [px, py];
}

function mousePressed() {
  const x = mouseX;
  const y = mouseY;
  // console.log("PRESSED x:", x, "y:", y, "is Inside:", isInBorders(x, y));
  const [cx, cy] = capBorders(x, y);
  c1.pressed(cx, cy);
  c2.pressed(cx, cy);
  c3.pressed(cx, cy);
}

function mouseReleased() {
  // const x = mouseX;
  // const y = mouseY;
  // console.log("RELEASED x:", x, "y:", y);
  c1.notPressed();
  c2.notPressed();
  c3.notPressed();
}

//
// function doubleClicked() {
//   console.log("DOUBLE!!!");
// }
