/**
 *
 * @param verticies {p5.Vector[]}
 * @return {number}
 */
function shoelaceArea(verticies) {
  const n = verticies.length;
  if (n < 3) return 0;
  let area = 0;
  for (let i = 0; i < n - 1; i++) {
    area += verticies[i].x * verticies[i + 1].y - verticies[i + 1].x * verticies[i].y;
  }
  return 0.5 * Math.abs(area + verticies[n - 1].x * verticies[0].y - verticies[0].x * verticies[n - 1].y);
}