const width = 400;
const height = 400;

let colorActive;
let colorDeactive;
let colorStroke;
const R = 13;

const TWO_RING_ORBIT_PLACEMENT = [35, 70];
const TEN_RING_ORBIT_PLACEMENT = [8, 16, 24, 32, 40, 48, 56, 64, 72, 80];
const RINGS = {
  'TEN_RING': TEN_RING_ORBIT_PLACEMENT,
  'TWO_RING': TWO_RING_ORBIT_PLACEMENT
}

const bitstrTwoSample = [1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0,
  1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
  0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1,
  0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1,
  0, 0, 1, 0, 0, 0, 0, 1, 0];

const bitstrTenSample = [0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0,
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

const SAMPLES = {
  'TEN_RING': bitstrTenSample,
  'TWO_RING': bitstrTwoSample
}

let masterOrbit;
let bitString;
let builded = false;

function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  colorActive = color(10, 130, 199);
  colorDeactive = color(255, 255, 255);
  colorStroke = color(223, 0, 83);
  //
  stroke(162, 20, 47);
  strokeWeight(0.5);
  noFill();
  noLoop();
}

function draw() {
  background(255); // PURE WHITE
  if (builded) {
    drawOrbits(400, masterOrbit, bitString);
  }
  console.count("FrameRate");
}

function setBitstring(bitStr) {
  bitString = bitStr;
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

function drawOrbits(size, orbit, bitString) {
  if (orbit.length === bitString.length) {
    if (size > 20) {
      // Good to go
      push();
      translate(size / 2, size / 2);
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

function build(mode, data) {
  const selectedOrbit = RINGS[mode];
  if (!!selectedOrbit) {
    masterOrbit = calculateOrbitArray(selectedOrbit, 190);
    builded = true;
    if (!!data && Array.isArray(data)) {
      bitString = data;
    } else {
      bitString = SAMPLES[mode];
    }
  }
}