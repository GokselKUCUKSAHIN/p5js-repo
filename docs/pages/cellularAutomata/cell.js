class Cell {
  constructor(x, y, width = 0, height = 0) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.isAlive = false;
  }

  drawCell() {
    this.isAlive = random() < 0.5;
    fill(this.isAlive ? 0 : 255);
    // rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
