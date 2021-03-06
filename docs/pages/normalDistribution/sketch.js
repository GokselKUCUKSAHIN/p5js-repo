const size = 400;

function setup() {
  const canvas = createCanvas(size, size);
  canvas.parent("p5canvas");
  numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  strokeWeight(2);
  stroke("snow");
  colorMode(HSB, numbers.length, 1, 1);
}

function draw() {
  background("#333");
  for (let i = 0; i < 15; i++) {
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
  randomIndex = int(random(numbers.length));
  //randomIndex = Math.floor(Math.random() * 10);
  numbers[randomIndex]++;
};
