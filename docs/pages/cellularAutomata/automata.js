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
    for (let i = 0; i < this.r; i++) {
      for (let j = 0; j < this.c; j++) {
        this.cells[i][j] = new Cell(i, j, this.cellWidth, this.cellHeigth);
        this.cells[i][j].isNext = random() < 0.5;
      }
    }
  }

  drawAutomata() {
    this.cells.forEach((row) => {
      row.forEach((item) => {
        item.drawCell();
        item.nextGen();
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
    let neigbors = 0;
    for (let i = 0; i < this.r; i++) {
      for (let j = 0; j < this.c; j++) {
        let cell = this.cells[i][j];
        neigbors = this.countNeighbors(i, j);

        // RULE 1
        if (!cell.isAlive && neigbors === 3) {
          cell.isNext = true;
        }
        // RULE 2
        else if (cell.isAlive && (neigbors < 2 || neigbors > 3)) {
          cell.isNext = false;
        }
        // RULE 3
        else {
          cell.isNext = cell.isAlive;
        }
      }
    }
  }

  toggleCell(x, y) {
    this.cells[x][y].isNext = !this.cells[x][y].isNext;
  }

  setCell(x, y, state) {
    this.cells[x][y].isAlive = !!state;
  }

  create2DArray = (r, c, value) => {
    return [...Array(r)].map((x) => Array(c).fill(value));
  };
}
