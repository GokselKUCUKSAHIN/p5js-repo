class Link {
  /**
   *
   * @param p1 {Pin}
   * @param p2 {Pin}
   * @param weight
   */
  constructor(p1, p2, weight = 2) {
    this.start = p1;
    this.end = p2;

    this.strokeWeight = weight;
    this.stokeColor = [32,42,68];
  }

  show() {
    push();
    noFill();
    stroke(this.stokeColor);
    strokeWeight(this.strokeWeight);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
    pop();
  }
}