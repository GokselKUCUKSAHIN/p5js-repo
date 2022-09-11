let front, back;

function preload() {
  // Load models
  front = loadModel('models/front.obj', true);
  back = loadModel('models/back.obj', true);
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
  orbitControl();
  rotateZ(PI)
  // scale(4); // Scaled to make model fit into canvas
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  normalMaterial(); // For effect
  // model(front);
  // translate(0,0, -200)
  model(back);
}