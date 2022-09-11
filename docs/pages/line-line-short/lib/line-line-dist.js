/**
 *
 * @param startPt1 {p5.Vector}
 * @param endPt1 {p5.Vector}
 * @param startPt2 {p5.Vector}
 * @param endPt2 {p5.Vector}
 * @returns {number}
 */
function distanceBetweenFeatureLines(startPt1, endPt1, startPt2, endPt2) {
  const u = p5.Vector.sub(endPt1, startPt1);
  const v = p5.Vector.sub(endPt2, startPt2);
  const w = p5.Vector.sub(startPt1, startPt2);

  const a = u.dot(u);           // always >= 0
  const b = u.dot(v);
  const c = v.dot(v);           // always >= 0
  const d = u.dot(w);
  const e = v.dot(w);

  const D = (a * c) - (b * b);  // always >= 0
  let sD = D;                 // default sD = D >= 0
  let tD = D;                 // default tD = D >= 0
  let sN, tN;

  // compute the line parameters of the two closest points
  if (D < Number.EPSILON) {
    // the lines are almost parallel
    sN = 0.0;         // force using point P0 on segment S1
    sD = 1.0;         // to prevent possible division by 0.0 later
    tN = e;
    tD = c;
  }
  else {
    // get the closest points on the infinite lines
    sN = (b * e - c * d);
    tN = (a * e - b * d);
    if (sN < 0.0) {
      // sc < 0 => the s=0 edge is visible
      sN = 0.0;
      tN = e;
      tD = c;
    }
    else if (sN > sD) {
      // sc > 1  => the s=1 edge is visible
      sN = sD;
      tN = e + b;
      tD = c;
    }
  }

  if (tN < 0.0) {
    // tc < 0 => the t=0 edge is visible
    tN = 0.0;
    // recompute sc for this edge
    if (-d < 0.0) {
      sN = 0.0;
    } else if (-d > a) {
      sN = sD;
    } else {
      sN = -d;
      sD = a;
    }
  }
  else if (tN > tD) {
    // tc > 1  => the t=1 edge is visible
    tN = tD;
    // recompute sc for this edge
    if ((-d + b) < 0.0) {
      sN = 0;
    }
    else if ((-d + b) > a) {
      sN = sD;
    }
    else {
      sN = (-d + b);
      sD = a;
    }
  }

  // finally do the division to get sc and tc
  const sc = (Math.abs(sN) < Number.EPSILON ? 0.0 : sN / sD);
  const tc = (Math.abs(tN) < Number.EPSILON ? 0.0 : tN / tD);

  // get the difference of the two closest points
  const sc_mult_u = u.copy().mult(sc);
  const tc_mult_v = v.copy().mult(tc);
  const dP = w.copy().add(sc_mult_u).sub(tc_mult_v);
  return dP.mag();
}


/**
 *
 * @param startPt1 {p5.Vector}
 * @param endPt1 {p5.Vector}
 * @param startPt2 {p5.Vector}
 * @param endPt2 {p5.Vector}
 * @returns {number}
 */
function shortestLinesegment(startPt1, endPt1, startPt2, endPt2) {
  const u = p5.Vector.sub(endPt1, startPt1);
  const v = p5.Vector.sub(endPt2, startPt2);
  const w = p5.Vector.sub(startPt1, startPt2);

  const a = u.dot(u);           // always >= 0
  const b = u.dot(v);
  const c = v.dot(v);           // always >= 0
  const d = u.dot(w);
  const e = v.dot(w);

  const D = (a * c) - (b * b);  // always >= 0
  let sD = D;                 // default sD = D >= 0
  let tD = D;                 // default tD = D >= 0
  let sN, tN;

  // compute the line parameters of the two closest points
  if (D < Number.EPSILON) {
    // the lines are almost parallel
    sN = 0.0;         // force using point P0 on segment S1
    sD = 1.0;         // to prevent possible division by 0.0 later
    tN = e;
    tD = c;
  }
  else {
    // get the closest points on the infinite lines
    sN = (b * e - c * d);
    tN = (a * e - b * d);
    if (sN < 0.0) {
      // sc < 0 => the s=0 edge is visible
      sN = 0.0;
      tN = e;
      tD = c;
    }
    else if (sN > sD) {
      // sc > 1  => the s=1 edge is visible
      sN = sD;
      tN = e + b;
      tD = c;
    }
  }

  if (tN < 0.0) {
    // tc < 0 => the t=0 edge is visible
    tN = 0.0;
    // recompute sc for this edge
    if (-d < 0.0) {
      sN = 0.0;
    } else if (-d > a) {
      sN = sD;
    } else {
      sN = -d;
      sD = a;
    }
  }
  else if (tN > tD) {
    // tc > 1  => the t=1 edge is visible
    tN = tD;
    // recompute sc for this edge
    if ((-d + b) < 0.0) {
      sN = 0;
    }
    else if ((-d + b) > a) {
      sN = sD;
    }
    else {
      sN = (-d + b);
      sD = a;
    }
  }

  // finally do the division to get sc and tc
  const sc = (Math.abs(sN) < Number.EPSILON ? 0.0 : sN / sD);
  const tc = (Math.abs(tN) < Number.EPSILON ? 0.0 : tN / tD);

  // get the difference of the two closest points
  const sc_mult_u = u.copy().mult(sc);
  const tc_mult_v = v.copy().mult(tc);
  const dP = w.copy().add(sc_mult_u).sub(tc_mult_v);
  return dP.mag();
}
