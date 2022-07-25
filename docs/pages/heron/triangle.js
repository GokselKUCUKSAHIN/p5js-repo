class MyTriangle {
  constructor(p1, p2, p3) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;

    this.strokeColor = [10, 10, 10];
    this.strokeWeight = 1;
    this.fillColor = [151, 119, 190];
  }

  calculateAreaAndCircumference() {
    // A B C
    const AB = distance(this.p1, this.p2);
    const BC = distance(this.p2, this.p3);
    const AC = distance(this.p1, this.p3);
    // console.log(AB, BC, AC);
    this.area = heron(AB, BC, AC);
    this.circumference = AB + BC + AC;
  }


  findMidPointOfEdge(v1, v2) {
    const mx = Math.abs(v1.x + v2.x) * 0.5
    const my = Math.abs(v1.y + v2.y) * 0.5
    return [mx, my];
  }

  intersectingPointOfTwoLines(A, B, C, D) {
    // Line AB represented as a1x + b1y = c1
    const a1 = B.y - A.y;
    const b1 = A.x - B.x;
    const c1 = a1 * A.x + b1 * A.y;

    // Line CD represented as a2x + b2y = c2
    const a2 = D.y - C.y;
    const b2 = C.x - D.x;
    const c2 = a2 * C.x + b2 * C.y;

    const det = a1 * b2 - a2 * b1;

    if (det === 0) return {x: -1, y: -1};
    const x = (b2 * c1 - b1 * c2) / det;
    const y = (a1 * c2 - a2 * c1) / det;
    return {x, y};
  }

  show() {
    push();
    // Polygon
    stroke(this.strokeColor);
    strokeWeight(this.strokeWeight);
    fill(this.fillColor);
    beginShape();
    vertex(this.p1.x, this.p1.y);
    vertex(this.p2.x, this.p2.y);
    vertex(this.p3.x, this.p3.y);
    endShape(CLOSE);

    // Mid Points
    fill(0, 255, 255); // cyan
    const [m1x, m1y] = this.findMidPointOfEdge(this.p1, this.p2);
    // line(this.p3.x, this.p3.y, m1x, m1y);
    // circle(m1x, m1y, 10);
    const [m2x, m2y] = this.findMidPointOfEdge(this.p2, this.p3);
    // line(this.p1.x, this.p1.y, m2x, m2y);
    // circle(m2x, m2y, 10);
    const A = createVector(m1x, m1y);
    const C = createVector(m2x, m2y);
    const ints = this.intersectingPointOfTwoLines(A, this.p3, C, this.p1);

    this.calculateAreaAndCircumference();
    // circle(ints.x, ints.y, 20);
    text(`Area: ${this.area.toFixed(2)} px²\nCircumference: ${this.circumference.toFixed(2)} px`, ints.x, ints.y);

    // const [m3x, m3y] = this.findMidPointOfEdge(this.p1, this.p3);
    // line(this.p2.x, this.p2.y, m3x, m3y);
    // circle(m3x, m3y, 10);

    pop();
  }
}