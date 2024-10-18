/**
 *
 * @param v1 {p5.Vector}
 * @param v2 {p5.Vector}
 */
function vectorMult(v1, v2) {

  return createVector(v1?.x * v2?.x, v1?.y * v2?.y, v1?.z * v2?.z);
}

function setup() {
  print("Hello");

  const v1 = new p5.Vector(3, 4, 5);
  const mV = new p5.Vector(1, 2);
  p5.Vector.do
  console.log("dot:", p5.Vector.dot(v1, mV));
  console.log("cross:", p5.Vector.cross(v1, mV));
  console.log("vectorMult:", vectorMult(v1, mV));
}