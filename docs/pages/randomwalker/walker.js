const SQRT2 = Math.sqrt(2);
class Walker {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  moveRandomPoint() {
    switch (Walker.getRandomPoint()) {
      case 0: {
        // up
        this.y--;
        break;
      }
      case 1: {
        // up-right
        this.y -= SQRT2;
        this.x += SQRT2;
        break;
      }
      case 2: {
        // right
        this.x++;
        break;
      }
      case 3: {
        // bottom-right
        this.y += SQRT2;
        this.x += SQRT2;
        break;
      }
      case 4: {
        // bottom
        this.y++;
        break;
      }
      case 5: {
        // bottom-left
        this.y += SQRT2;
        this.x -= SQRT2;
        break;
      }
      case 6: {
        // left
        this.x--;
        break;
      }
      case 7: {
        // up-left
        this.x -= SQRT2;
        this.y -= SQRT2;
        break;
      }
    }
  }

  static getRandomPoint() {
    return Math.floor(Math.random() * 8);
  }
}
