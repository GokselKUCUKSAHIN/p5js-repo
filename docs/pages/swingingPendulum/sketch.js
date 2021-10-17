let pendulum;
isMouseClicked = false;
function setup() {
  width = 600;
  height = 400;
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  origin = createVector(width / 2, 0);
  pendulum = new Pendulum(origin, 270);
}

function mousePressed()
{
  //console.log("pressed?");
  isMouseClicked = true;
}
function mouseReleased()
{
  //console.log("released");
  isMouseClicked = false;
  
}

function mouseDragged()
{
  if (isMouseClicked) {
    vx = mouseX - pendulum.origin.x;
    vy = mouseY - pendulum.origin.y;
    vec = createVector(vx, vy);
    //console.log((vec.heading() * 180) / PI);
    pendulum.theta = PI / 2 - vec.heading();
    pendulum.angularVel = 0;
  }
}

function draw() {
  
  background(200);
  pendulum.update();
}
