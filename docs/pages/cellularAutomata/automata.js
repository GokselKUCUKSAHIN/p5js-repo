class Automata {

  constructor(size = 0, row = 1, col = 1) {
    this.size = size;
    this.r = row;
    this.c = col;
    this.cellWidth = size / col;
    this.cellHeigth = size / row;
    this.cells = this.create2DArray(row, col);
    this.init();
  }

  init() {
    // Cell.margin = this.size * 0.01;
    console.log(this.r, this.c);
    for (let i = 0; i < this.c; i++) {
      for (let j = 0; j < this.r; j++) {
        var temp = new Cell(this.cellWidth, this.cellHeigth, j * this.cellWidth, i * this.cellHeigth);
        this.cells[j][i] = temp;
        // console.log(temp.x, temp.y);
      }
    }
  }

  draw() {
    for (let y = 0; y < this.c; y++) {
      for (let x = 0; x < this.r; x++) {
        this.cells[x][y].draw();
      }
    }
  }

  create2DArray = (r, c, value) => new Array(r).fill(new Array(c).fill(value));
}