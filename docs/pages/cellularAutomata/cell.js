class Cell {
  static margin = 0;
  constructor(width = 0, height = 0, x = 0, y = 0) {
    this.w = width;
    this.h = height;
    this.x = x;
    this.y = y;
    this.isAlive = false;
  }

  draw() {
    // push();
    fill(this.isAlive ? 0 : 255);
    //  rectMode(CENTER);
    rect(this.x, this.y, 10, 10);
    //console.log(this.x, this.y);
    // pop();
  }
}