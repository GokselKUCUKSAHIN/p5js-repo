let count = 0;
const height = 400;
const width = 400;

let myBall = {
  pos: {
    x: Math.random() * (width - 2 * 40) + 40,
    y: Math.random() * (height - 2 * 40) + 40,
  },
  vel: {
    x: 0.6,
    y: 0.8,
  },
  r: 40,
}


function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent('p5canvas');
  setFrameRate(30);
}

function draw() {
  background(220, 10, 104);
  // console.log(myBall);
  updateBall(myBall);
  drawBall(myBall);
  
  vm.fps = frameRate().toFixed(1);
}

function drawBall(ball) {
  // ellipse(50,50,80,80);
  ellipse(ball.pos.x, ball.pos.y, 2 * ball.r, 2 * ball.r);
}

function updateBall(ball) {
  // update new pos
  
  // check walls
  // x
  if (ball.pos.x < ball.r) {
    ball.pos.x = ball.r;
    ball.vel.x = Math.abs(ball.vel.x);
  }
  if (ball.pos.x > width - ball.r) {
    ball.pos.x = width - ball.r;
    ball.vel.x = Math.abs(ball.vel.x)*-1;
  }
  // y
  if (ball.pos.y < ball.r) {
    ball.pos.y = ball.r;
    ball.vel.y = Math.abs(ball.vel.y);
  }
  if (ball.pos.y > height - ball.r) {
    ball.pos.y = height - ball.r;
    ball.vel.y = Math.abs(ball.vel.y)*-1;
  }

  // update x, y with velocity
  ball.pos.x += ball.vel.x;
  ball.pos.y += ball.vel.y;
}
