function setup() {
  const width = 650;
  const height = 650;
  const canvas = createCanvas(width, height, WEBGL);
  canvas.parent("p5canvas");
  // normalMaterial();
}


function safeTranslate(callback) {
  push();
  callback();
  pop();
}

/**
 *
 * @param size {number}
 */
function drawOrigin(size) {
  safeTranslate(() => {
    strokeWeight(2);
    // X
    stroke(255, 0, 0);
    line(0, 0, 0, size, 0, 0);
    // Y
    stroke(0, 255, 0);
    line(0, 0, 0, 0, -size, 0);
    // Z
    stroke(0, 0, 255);
    line(0, 0, 0, 0, 0, size);

    // CONES
    noStroke();
    safeTranslate(() => {
      translate(size, 0, 0);
      rotateZ(-HALF_PI);
      cone(5, 5);
    })
    safeTranslate(() => {
      translate(0, -size, 0);
      rotateX(PI)
      cone(5, 5);
    })
    safeTranslate(() => {
      translate(0, 0, size);
      rotateX(HALF_PI);
      cone(5, 5);
    })
  });
}

let r = 0;

function draw() {
  background(20);
  orbitControl(5, 10);
  rotateX(25)
  // rotateY(r += 0.005);
  // rotateY(r += 0.003);
  // rotateZ(r += 0.005);
  drawOrigin(250);
  /*
  safeTranslate(() => {
    translate(15, -25, 20)
    box(30, 50, 40);
  })
   */
  safeTranslate(() => {
    translate(100, 0, 50);
    beginShape(TRIANGLE_STRIP);
      vertex(0, 0, 0);
      vertex(100, 0, 0);
      vertex(0, 0, 50);
      vertex(100, 0, 50);
      vertex(100, 0, 0);
      vertex(75, -25, 25);
      vertex(100, 0, 50);
      vertex(0, 0, 50);
      vertex(75, -25, 25);
      vertex(25,-25, 25);
      vertex(0, 0, 50);
      vertex(0, 0, 0);
      vertex(100, 0, 0);
      vertex(25,-25, 25);
      vertex(75, -25, 25);
      vertex(100, 0, 0);
    endShape();
  })
}