let pts = []
let furt = [];
const interval = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  center = createVector(0, 0);
  angleMode(DEGREES);
  distMax = -1;
  rot = 0;
}

function draw() {
  background('#fff29c');
  if (pts.length > 1) {
    stroke('#301551');
    push()
    translate(-center.x, -center.y)
    rotate(rot)
    translate(center.x, center.y)
    fill(pointInPoly(pts, createVector(mouseX, mouseY)) ? 'white' : 'grey')
    beginShape();
    pts.forEach(pt => vertex(pt.x, pt.y));
    endShape(CLOSE);
    push();
    fill('#E91E63');
    ellipse(center.x, center.y, 10);
    stroke('#cc0000');
    strokeWeight(2);
    noFill();
    circle(center.x, center.y, distMax * 2);
    pop();
    pop()

  }
  if (furt.length === 2) {
    push();
    furt = findFurthestPoints(pts)
    const [p1, p2] = furt;
    line(p1.x, p1.y, p2.x, p2.y);
    const R = p1.dist(p2);
    const centerPoint = p5.Vector.add(p1, p2).div(2);
    circle(centerPoint.x, centerPoint.y, 10)
    noFill();
    stroke(0, 128, 128);
    strokeWeight(2.5)
    circle(centerPoint.x, centerPoint.y, R)
    pop();
    // console.log(p1, p2, centerPoint);
  }
  fill('#ed8a0a')
  noStroke()
  ellipse(mouseX, mouseY, 10);
}

function mousePressed() {
  pts.push(createVector(mouseX, mouseY))
  center = findCentroid(pts)
  distMax = 0;
  for (let i = 0; i < pts.length; i++) {
    const dist = p5.Vector.dist(center, pts[i]);
    if (dist > distMax) {
      distMax = dist;
    }
  }
  // print(distMax)
}

function pointInPoly(verts, pt) {
  let c = false;
  for (let i = 0, j = verts.length - 1; i < verts.length; j = i++) {
    if (((verts[i].y > pt.y) != (verts[j].y > pt.y)) && (pt.x < (verts[j].x - verts[i].x) * (pt.y - verts[i].y) / (verts[j].y - verts[i].y) + verts[i].x)) c = !c;
  }
  return c;
}

function findCentroid(verticies) {
  const center = createVector(0, 0);
  const n = verticies.length;
  let signedArea = 0;
  let prev = verticies[n - 1];
  // For all vertices
  for (let i = 0; i < n; i++) {
    const next = verticies[i];
    const x0 = prev.x;
    const y0 = prev.y;
    const x1 = next.x;
    const y1 = next.y;

    // Calculate value of A
    // using shoelace formula
    let A = (x0 * y1) - (x1 * y0);
    signedArea += A;

    // Calculating coordinates of
    // centroid of polygon
    center.x += (x0 + x1) * A
    center.y += (y0 + y1) * A;
    prev = next;
  }

  signedArea *= 0.5;
  center.x = center.x / (6 * signedArea);
  center.y = center.y / (6 * signedArea);
  return center;
}

function shoelaceArea(verticies) {
  const n = verticies.length;
  if (n < 3) return 0;
  let area = 0;
  for (let i = 0; i < n - 1; i++) {
    area += verticies[i].x * verticies[i + 1].y - verticies[i + 1].x * verticies[i].y;
  }
  return 0.5 * Math.abs(area + verticies[n - 1].x * verticies[0].y - verticies[0].x * verticies[n - 1].y);
}

// KEYBOARD
function keyPressed() {
  switch (keyCode) {
    case 37: {
      print("LEFT", rot);
      rot -= interval;
      break;
    }
    case 39: {
      print("RIGHT", rot);
      rot += interval;
      break;
    }
    case 65: {
      // A
      console.log("Area of shape is", shoelaceArea(pts));
      break;
    }
    case 67: {
      // C
      pts = [];
      furt = [];
      center = createVector(0, 0);
      distMax = 0;
    }
    case 88: {
      // X
      test();
    }
  }
}


/**
 *
 * @param verticies {p5.Vector[]}
 * @returns {*[]}
 */
function findFurthestPoints(verticies) {
  let maxDist = -1;
  let points = [-1, -1];
  const n = verticies.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const dist = verticies[i].dist(verticies[j]);
      if (dist > maxDist) {
        maxDist = dist;
        points = [i, j];
      }
    }
  }
  return [verticies[points[0]], verticies[points[1]]];
}

function test() {
  if (pts.length > 2) {
    furt = findFurthestPoints(pts)
    console.table(furt);
  }
}