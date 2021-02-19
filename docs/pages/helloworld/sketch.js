function setup() {
  const height = 400;
  const width = 400;
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  velVector = p5.Vector.random2D().mult(random(1.2, 3.8));
  myBall = {
    pos: {
      x: random(40, width - 80),
      y: random(40, height - 80),
    },
    vel: {
      x: velVector.x,
      y: velVector.y,
    },
    r: int(random(30, 60)),
  };
}

function draw() {
  background(220, 10, 104);
  updateBall(myBall);
  drawBall(myBall);
  vm.fps = frameRate().toFixed(1);
}

function drawBall(ball) {
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
    ball.vel.x = Math.abs(ball.vel.x) * -1;
  }
  // y
  if (ball.pos.y < ball.r) {
    ball.pos.y = ball.r;
    ball.vel.y = Math.abs(ball.vel.y);
  }
  if (ball.pos.y > height - ball.r) {
    ball.pos.y = height - ball.r;
    ball.vel.y = Math.abs(ball.vel.y) * -1;
  }

  // update x, y with velocity
  ball.pos.x += ball.vel.x;
  ball.pos.y += ball.vel.y;
}
