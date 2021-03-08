class Automata {

  constructor(size, row, col) {
    this.size = size;
    this.r = row;
    this.c = col;
    this.cells = [];
  }

  draw()
  {

  }

  static create2DArray = (r, c, value) => new Array(r).fill(new Array(c).fill(value));
}