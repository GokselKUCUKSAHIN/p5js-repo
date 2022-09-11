/**
 *
 * @param verticies {p5.Vector[]}
 * @return {p5.Vector}
 */
function findCentroid(verticies) {
  const center = createVector(0, 0);
  const n = verticies.length;
  let signedArea = 0;
  let prev = verticies[n - 1];
  // For all vertices
  for (let i = 0; i < n; i++) {
    const next = verticies[i];
    const x0 = prev.x;
    const y0 = prev.y;
    const x1 = next.x;
    const y1 = next.y;

    // Calculate value of A
    // using shoelace formula
    let A = (x0 * y1) - (x1 * y0);
    signedArea += A;

    // Calculating coordinates of
    // centroid of polygon
    center.x += (x0 + x1) * A
    center.y += (y0 + y1) * A;
    prev = next;
  }

  signedArea *= 0.5;
  center.x = center.x / (6 * signedArea);
  center.y = center.y / (6 * signedArea);
  return center;
}
