function heron(a, b, c) {
  const S = (a + b + c) * 0.5;
  return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

function distance(v1, v2) {
  return Math.sqrt((v1.x - v2.x) ** 2 + (v1.y - v2.y) ** 2);
}