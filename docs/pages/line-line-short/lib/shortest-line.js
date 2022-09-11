/**
 *
 * @param l1s {p5.Vector}
 * @param l1e {p5.Vector}
 * @param l2s {p5.Vector}
 * @param l2e {p5.Vector}
 */
function shortestLine(l1s, l1e, l2s, l2e) {
  const P1 = l1s.copy();
  const P2 = l2s.copy();
  const V1 = l1e.sub(l1s);
  const V2 = l2e.sub(l2s);
  const V21 = P2.sub(P1);

  const v22 = p5.Vector.dot(V2, V2);
  const v11 = p5.Vector.dot(V1, V1);
  const v21 = p5.Vector.dot(V2, V1);
  const v21_1 = p5.Vector.dot(V21, V1);
  const v21_2 = p5.Vector.dot(V21, V2);
  const denom = v21 * v21 - v22 * v11;
  let s, t;
  if (denom < Number.EPSILON) {
    s = 0
    t = (v11 * s - v21_1) / v21;
  } else {
    s = (v21_2 * v21 - v22 * v21_1) / denom;
    t = (-v21_1 * v21 + v11 * v21_2) / denom;
  }
  s = Math.max(Math.min(s, 1), 0);
  t = Math.max(Math.min(t, 1), 0);

  const p_a = P1.add(V1.mult(s));
  const p_b = P2.add(V2.mult(t));

  return [p_a, p_b]
}

/*
def closest_line_seg_line_seg(p1, p2, p3, p4):
    P1 = p1
    P2 = p3
    V1 = p2 - p1
    V2 = p4 - p3
    V21 = P2 - P1

    v22 = np.dot(V2, V2)
    v11 = np.dot(V1, V1)
    v21 = np.dot(V2, V1)
    v21_1 = np.dot(V21, V1)
    v21_2 = np.dot(V21, V2)
    denom = v21 * v21 - v22 * v11

    if np.isclose(denom, 0.):
        s = 0.
        t = (v11 * s - v21_1) / v21
    else:
        s = (v21_2 * v21 - v22 * v21_1) / denom
        t = (-v21_1 * v21 + v11 * v21_2) / denom

    s = max(min(s, 1.), 0.)
    t = max(min(t, 1.), 0.)

    p_a = P1 + s * V1
    p_b = P2 + t * V2

    return p_a, p_b
 */