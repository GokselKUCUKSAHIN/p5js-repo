class Link {
  constructor(p1, p2) {
    this.start = p1;
    this.end = p2;

    this.strokeWeight = 2;
    this.stokeColor = [10, 10, 10];
  }

  show() {
    push();
    noFill();
    stroke(this.stokeColor);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
    pop();
  }
}