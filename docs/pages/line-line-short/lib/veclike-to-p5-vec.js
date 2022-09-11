/**
 * Converts VectorLike object to p5.Vector
 * @param veclike {{x: number, y: number, z: number | undefined}}
 * @returns {p5.Vector}
 */
function veclikeToP5Vec(veclike) {
  return createVector(veclike.x, veclike.y, veclike.z);
}