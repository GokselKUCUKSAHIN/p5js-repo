const width = 400;
const height = 400;

let colorActive;
let colorDeactive;
let colorStroke;
const R = 13;

const twoRingOrbitPlacement = [35, 70];
const tenRingOrbitPlacement = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80];

const bitstrTwo = [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0,
  1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
  0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1,
  0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1,
  0, 0, 1, 0, 0, 0, 0, 1, 0];

const bitstrTen = [0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0,
  0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0,
  1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0,
  1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0,
  0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0,
  0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1,
  1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1,
  0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
  1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,
  0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0,
  0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0,
  0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
  0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0,
  0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1,
  0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0,
  1, 1, 1];
let masterOrbit;
let bitString;

function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  colorActive = color(10, 130, 199);
  colorDeactive = color(255, 255, 255);
  colorStroke = color(223, 0, 83);
  //
  masterOrbit = calculateOrbitArray(tenRingOrbitPlacement, 190);
  bitString = bitstrTen;
  //
  stroke(162, 20, 47);
  textFont('Helvetica');
  strokeWeight(0.5);
  noFill();
  // frameRate(5);
  noLoop();
}

function setBitstring(bitStr) {
  bitString = bitStr;
}

function draw() {
  background(240);
  drawOrbits(400, masterOrbit, bitString);
  console.count("FrameRate");
}

function calculateOrbitArray(orbit, range) {
  const ringCount = orbit.length;
  const gap = range / ringCount;
  const masterOrbit = [];
  for (let i = 0, g = gap; i < ringCount; i++, g += gap) {
    masterOrbit.push(...calculateOrbit(orbit[i], g));
  }
  return masterOrbit;
}

function calculateOrbit(count, range) {
  const result = Array(count);
  const step = TWO_PI / count;
  for (let i = 0, v = 0; i < count; i++, v -= step) {
    result[i] = {
      x: cos(v) * range,
      y: sin(v) * range
    };
  }
  return result;
}

function drawAntenna(x, y, r, isOn) {
  if (!!isOn) {
    fill(colorActive);
    stroke(colorActive);
  } else {
    fill(colorDeactive);
    stroke(colorStroke);
  }
  ellipse(x, y, r);
}

function drawOrbits(size, orbit, bitString) {
  if (orbit.length === bitString.length) {
    if (size > 20) {
      // Good to go
      push();
      translate(size / 2, size / 2);
      fill(255, 0, 0);
      ellipse(0, 0, 5);
      //
      for (let i = 0; i < bitString.length; i++) {
        const antenna = orbit[i];
        drawAntenna(antenna.x, antenna.y, R, bitString[i]);
      }
      pop();
    } else {
      throw Error(`${size} is too low. Must be over 20.`);
    }
  } else {
    throw Error("Orbit and BitString are incompedible");
  }
}