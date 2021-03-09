class Automata {
  constructor(size = 0, col = 1, row = 1) {
    this.size = size;
    this.r = row;
    this.c = col;
    this.cellWidth = size / row;
    this.cellHeigth = size / col;
    this.cells = this.create2DArray(row, col);
    this.init();
  }

  init() {
    for (let i = 0; i < this.c; i++) {
      for (let j = 0; j < this.r; j++) {  
        this.cells[j][i] = new Cell(
          j * this.cellWidth,
          i * this.cellHeigth,
          this.cellWidth,
          this.cellHeigth
        );
      }
    }
  }

  drawAutomata() {
    this.cells.forEach((row) => {
      row.forEach((item) => {
        item.drawCell();
      });
    });
  }

  countNeighbors(x, y) {
    const c = this.cells[x][y];
    let neighborCount = 0;
    if (c.x > 0 && c.y < this.r - 1) {
      // upper left
      if (this.cells[c.x - 1][c.y + 1].isAlive) {
        neighborCount++;
      }
    }

    if (c.y < this.r - 1) {
      //up
      if (this.cells[c.x][c.y + 1].isAlive) {
        neighborCount++;
      }
    }

    if (c.x < this.c - 1 && c.y < this.r - 1) {
      // upper right
      if (this.cells[c.x + 1][c.y + 1].isAlive) {
        neighborCount++;
      }
    }

    if (c.x > 0) {
      //left
      if (this.cells[c.x - 1][c.y].isAlive) {
        neighborCount++;
      }
    }

    if (c.x < this.c - 1) {
      // right
      if (this.cells[c.x + 1][c.y].isAlive) {
        neighborCount++;
      }
    }

    if (c.x > 0 && c.y > 0) {
      // down left
      if (this.cells[c.x - 1][c.y - 1].isAlive) {
        neighborCount++;
      }
    }

    if (c.y > 0) {
      // down
      if (this.cells[c.x][c.y - 1].isAlive) {
        neighborCount++;
      }
    }

    if (c.x < this.c - 1 && c.y > 0) {
      // down right
      if (this.cells[c.x + 1][c.y - 1].isAlive) {
        neighborCount++;
      }
    }
    return neighborCount;
  }

  updateAutomata() {
    

  }

  create2DArray = (r, c, value) => {
    return [...Array(r)].map((x) => Array(c).fill(value));
  };

  toggleCell(x, y) {
    this.cells[x][y].isAlive = !this.cells[x][y].isAlive;
  }

  setCell(x, y, state) {
    this.cells[x][y].isAlive = !!state;
  }
}
