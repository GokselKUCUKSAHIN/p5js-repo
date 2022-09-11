/**
 *
 * @param verts {{x: number, y: number, z: number | undefined}[]}
 * @param pt {{x: number, y: number, z: number | undefined}}
 * @return {boolean}
 */
function pointInPoly(verts, pt) {
  let isInside = false;
  const len = verts.length;
  for (let i = 0, j = len - 1; i < len; j = i++) {
    if (((verts[i].y > pt.y) !== (verts[j].y > pt.y)) && (pt.x < (verts[j].x - verts[i].x) * (pt.y - verts[i].y) / (verts[j].y - verts[i].y) + verts[i].x)) {
      isInside = !isInside;
    }
  }
  return isInside;
}
