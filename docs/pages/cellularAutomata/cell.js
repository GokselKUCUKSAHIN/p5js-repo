class Cell {
  constructor(x, y, width = 0, height = 0) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.isNext = false;
    this.isAlive = this.isNext;
    
  }

  drawCell() {
    //this.isAlive = random() < 0.5; // for testing
    fill(this.isAlive ? 255 : 0);
    // rectMode(CENTER);
    rect(this.x * this.w, this.y * this.h, this.w, this.h);
  }

  nextGen()
  {
    this.isAlive = this.isNext;
  }
}
