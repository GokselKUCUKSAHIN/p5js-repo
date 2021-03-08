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
        this.cells[j][i] = new Cell(j * this.cellWidth, i * this.cellHeigth, this.cellWidth, this.cellHeigth);
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

  create2DArray = (r, c, value) => {
    return [...Array(r)].map((x) => Array(c).fill(value));
  };

  toggleCell(x, y)
  {
    this.cells[x][y].isAlive = !this.cells[x][y].isAlive; 
  }
}
