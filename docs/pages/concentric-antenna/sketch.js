const size = 800;
const R = size;

const RED_COLOR = [248, 174, 181];
const GREEN_COLOR = [181, 248, 196];
const BLUE_COLOR = [169, 227, 212];
const PURPLE_COLOR = [230, 0, 180];
const SNOW_COLOR = 210;

const UNI_DMI = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]; // 4
const ONE_DMI = [1, 1, 1, 1, 1, 1, 1, 1]; // 8
const RIFAT = [0.3730, 1.3290, 0.9222, 0.5306, 0.9059, 0.2444, 1.1164, 0.3683];
const RIFAT_2 = [0.3487, 0.8546, 0.5515, 0.9056, 0, 0.5657, 1.0000, 0.3657, 0.9864, 0.3218];

const SIXTEEN_DMI = [0.367, 1.345, 0.9222, 0.5326, 0.9149, 0.2444, 1.1164, 0.3683];

const HX = [0.33175, 0.90501, 0.48641, 0.9138, 0.11475, 0.5206999999999998, 1.0112, 0.43495, 0.9526499999999994, 0.30790000000000006];
const DMI = [0.5533, 1.1084, 1.3470, 1.4997, 0.4652, 0.5074, 0.6138, 0.9598, 1.2281, 0.7298, 1.0599, 0.5416];

const BB = [0.3200, 0.6800, 0.1500, 0.7900, 0.5900, 0.8200, 0.8100, 0.3100];

function setup() {
  const canvas = createCanvas(size, size);
  canvas.parent("p5canvas");
  colorActive = color(10, 130, 199);
  colorDeactive = color(255, 255, 255);
  colorStroke = color(223, 0, 83);
  //
  stroke(162, 20, 47);
  strokeWeight(0.5);
  noFill();
  noLoop();
  console.log(calculateSlots(UNI_DMI))
  console.table(calculateSlots(UNI_DMI).map(a => calculatePoint(a, R)))
}

function drawCenter(divSize, pointSize) {
  push();
  stroke(RED_COLOR);
  fill(RED_COLOR);
  const middle = divSize * 0.5;
  circle(middle, middle, pointSize);
  pop();
}

function drawBorder(middle, radius) {
  push();
  stroke(SNOW_COLOR, 128);
  strokeWeight(2);
  noFill();
  circle(middle, middle, radius);
  pop();
}

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function calculateSlots(dmi) {
  const slotArray = Array(dmi.length);
  const ka = arrSum(dmi);
  for (let i = 0; i < slotArray.length; i++) {
    slotArray[i] = TWO_PI * arrSum(dmi.slice(0, 1 + i)) / ka;
  }
  return [slotArray, ka];
}

function calculatePoint(angle, r) {
  return [
    size * 0.5 + sin(angle) * r,
    size * 0.5 + cos(angle) * r
  ];
}

function drawCircles(dmi, radius, color) {
  push();
  fill(color);
  stroke(240);
  strokeWeight(0.7)
  const [slotArray, ka] = calculateSlots(dmi);
  const dR = radius * ka / 8;
  drawBorder(size * 0.5, dR * 2);
  slotArray.map(angle => calculatePoint(angle, dR)).forEach(([x, y]) => {
    circle(x, y, R * 0.02);
  })
  pop();
}

function makeTransparent(color, transparancy) {
  return [...color, transparancy];
}

function op(color) {
  return makeTransparent(color, 192);
}

function draw() {
  background(51);
  drawCircles(UNI_DMI, R * 0.5, op(RED_COLOR));
  drawCircles(HX, R * 0.5, op(GREEN_COLOR));
  drawCircles(BB, R * 0.5, op(PURPLE_COLOR));
  // drawCircles(DMI, R * 0.5, op(PURPLE_COLOR));
  // drawCircles(RIFAT_2, R * 0.5, op(PURPLE_COLOR));
  console.count("FrameRate");
}