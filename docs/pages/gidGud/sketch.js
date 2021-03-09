// video source: https://vimeo.com/90312869
let img;
let vid;
let theta = 0;

function setup() {
  createCanvas(710, 400, WEBGL);
  img = loadImage('assets/gitgud.jpg');
}

function draw() {
  background(20,220,50);
  translate(-20, 0, 0);
  push();
  rotateZ(theta * 0.1);
  rotateX(theta * 0.1);
  rotateY(theta * 0.1);
  texture(img);
  box(200, 200, 200);
  pop();
  theta += 0.05;
}
