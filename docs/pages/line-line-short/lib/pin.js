class Pin {
  constructor(x = -1, y = -1, r = 5) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.R = (this.r * 0.5) ** 2;

    this.offsetX = 0;
    this.offsetY = 0;
    this.dragging = false;

    this.strokeWeight = 1;
    this.strokeColor = [64, 128, 128];
    this.accentColor = [236, 151, 6];
    this.fillColor = [255, 255, 0];
  }

  fill() {
    if (this.dragging) {
      fill(this.accentColor);
    } else {
      fill(this.fillColor);
    }
  }

  show(pX, pY, capper) {
    if (this.dragging) {
      const [cx, cy] = capper(pX, pY, 10);
      this.x = cx + this.offsetX;
      this.y = cy + this.offsetY;
    }
    this.draw();
  }

  draw() {
    push();
    strokeWeight(this.strokeWeight);
    stroke(this.strokeColor);
    this.fill();
    circle(this.x, this.y, this.r);
    pop();
  }

  pressed(pX, pY) {
    if (this.isInTheCircle(pX, pY)) {
      // console.log("Pressed Inside");
      this.dragging = true;
      this.offsetX = this.x - pX;
      this.offsetY = this.y - pY;
    }
    // else {
      // console.log("Pressed Outside");
    // }
  }

  notPressed() {
    this.dragging = false;
  }

  isInTheCircle(pX, pY) {
    const dist = (this.x - pX) ** 2 + (this.y - pY) ** 2;
    return dist <= this.R;
  }
}