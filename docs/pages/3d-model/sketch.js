let astro;

function preload() {
  // Load models
  astro = loadModel('models/front.obj', true);
}

function setup() {
  const width = 650;
  const height = 650;
  const canvas = createCanvas(width, height, WEBGL);
  canvas.parent("p5canvas");
}

// function draw() {
//   background(51);
//   rotateX(frameCount * 0.01);
//   rotateY(frameCount * 0.01);
//   normalMaterial(); // For effect
//   model();
// }

function draw() {
  background(200);
  scale(4); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  model(astro);
}