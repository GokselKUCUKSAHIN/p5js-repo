const SQRT2 = Math.sqrt(2);
class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ratio = 1.5;
  }

  display() {
    let tx = this.x;
    let ty = this.y;
    //let p = this.moveRandomPoint();
    let p = p5.Vector.random2D().mult(this.ratio);
    this.x += this.ratio * p.x;
    this.y += this.ratio * p.y;
    line(tx, ty, this.x, this.y);
  }

  moveRandomPoint() {
    switch (Walker.getRandomPoint()) {
      case 0: {
        // up
        return { x: 0, y: -1 }; //
      }
      case 1: {
        // up-right
        return { x: SQRT2, y: -SQRT2 }; //
      }
      case 2: {
        // right
        return { x: 1, y: 0 }; //
      }
      case 3: {
        // bottom-right
        return { x: SQRT2, y: SQRT2 }; //
      }
      case 4: {
        // bottom
        return { x: 0, y: 1 }; //
      }
      case 5: {
        // bottom-left
        return { x: -SQRT2, y: SQRT2 }; //
      }
      case 6: {
        // left
        return { x: -1, y: 0 }; //
      }
      case 7: {
        // up-left
        return { x: -SQRT2, y: -SQRT2 }; //
      }
    }
  }

  static getRandomPoint() {
    return Math.floor(Math.random() * 8);
  }
}
