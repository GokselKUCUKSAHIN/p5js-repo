const size = 400;

function setup() {
  const canvas = createCanvas(size, size);
  canvas.parent("p5canvas");
  numbers = Array(100).fill(0);
  strokeWeight(0.01);
  stroke("snow");
  colorMode(HSB, numbers.length, 1, 1);
}

function draw() {
  background("#333");
  for (let i = 0; i < 1500; i++) {
    myCustomFunction();
  }
  translate(0, size);
  width = size / numbers.length;
  maxNumber = max(numbers);
  numbers.forEach((item, index) => {
    fill(index, 1, 1);
    mapValue = map(item, 0, maxNumber, 0, -0.75 * size, true);
    rect(0, 0, width, mapValue);
    translate(width, 0);
  });
}

const myCustomFunction = () => {
  // randomIndex = int(gaussianRandomRange(0,numbers.length,3)); // gaussian
  randomIndex = Math.floor(Math.random() * numbers.length); // even
  numbers[randomIndex]++;
};

const gaussianRandom = (degree = 3) => {
  let rand = 0;
  for (let i = 0; i < degree; i++) {
    rand += Math.random();
  }
  const gauss = rand / degree;
  return (gauss * 2) - 1; // (-1, 1)
}

const gaussianRandomRange = (start, end, degree = 3) => {
  const min = !!end ? start : 0;
  const max = !!end ? end : start;
  return min + (0.5 * (1 + gaussianRandom(degree))) * (max - min);
}