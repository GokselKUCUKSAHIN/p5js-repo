class Tuple {
  constructor(a = 0, b = 0) {
    this._a = a;
    this._b = b;
  }

  get a() {
    return this._a;
  }

  get b() {
    return this._b;
  }

  set a(value) {
    this._a = value;
  }

  set b(value) {
    this._b = value;
  }

  getTuple() {
    return [this.a, this.b];
  }
}