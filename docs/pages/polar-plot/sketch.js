const width = 400;
const height = 400;
// let stepSize = 0;
// const strCoords = "-27.5350612052059	-27.6049162687971	-27.8169304571185	-28.1786905354343	-28.7036998567059	-29.4128995425147	-30.3373685385281	-31.5230808320434	-33.0394853278272	-34.9953326327845	-37.5661428899514	-41.0082854709148	-45.1726069134481	-46.2379241598136	-43.0896153848075	-40.3642096978128	-38.6392422651344	-37.6814125646072	-37.2950815540059	-37.2906977484281	-37.3773957209334	-37.1152205667143	-36.1739864408099	-34.7020953885493	-33.1156112006740	-31.7128697014826	-30.6213433028655	-29.8737958675469	-29.4565737302522	-29.3202773758574	-29.3679449298946	-29.4406152600749	-29.3422801565574	-28.9398016544724	-28.2564669304535	-27.4267007998788	-26.5763630318187	-25.7687271977153	-25.0253892297518	-24.3699990554596	-23.8578177056426	-23.5789998763725	-23.6463442161349	-24.1849318687886	-25.3271388463142	-27.1797558559582	-29.5856595752762	-31.2797994991709	-30.7207165656870	-29.4701350237090	-29.1318767302626	-30.3013022505978	-33.7911742738355	-42.3434602749504	-38.1659561050043	-31.7931638911501	-28.9845160279541	-27.7633070016441	-27.1747727094254	-26.5056949631892	-25.6671801504843	-25.2005252551440	-25.7124659189880	-27.8079797668206	-32.3917890721863	-35.1989372286711	-29.5893548921348	-26.2618613473708	-24.8672620952527	-24.4869231947542	-24.3515122509155	-24.1896098411289	-24.5886763662517	-26.5897994976635	-31.7145905363168	-32.6273114967873	-26.2867043606968	-23.7316460207290	-24.2755750084708	-29.0938532864986	-36.1469522956564	-25.7601714726026	-23.3851292793206	-27.6031655118832	-23.8773710119225	-13.4405697265134	-7.72833470521205	-4.07785373020474	-1.74300308640163	-0.426536235825875	0	-0.426536235825875	-1.74300308640163	-4.07785373020474	-7.72833470521211	-13.4405697265135	-23.8773710119227	-27.6031655118832	-23.3851292793206	-25.7601714726026	-36.1469522956564	-29.0938532864986	-24.2755750084708	-23.7316460207290	-26.2867043606969	-32.6273114967874	-31.7145905363168	-26.5897994976635	-24.5886763662517	-24.1896098411289	-24.3515122509155	-24.4869231947542	-24.8672620952527	-26.2618613473708	-29.5893548921348	-35.1989372286711	-32.3917890721863	-27.8079797668206	-25.7124659189879	-25.2005252551440	-25.6671801504843	-26.5056949631893	-27.1747727094254	-27.7633070016442	-28.9845160279541	-31.7931638911501	-38.1659561050043	-42.3434602749501	-33.7911742738355	-30.3013022505978	-29.1318767302626	-29.4701350237090	-30.7207165656870	-31.2797994991709	-29.5856595752762	-27.1797558559582	-25.3271388463141	-24.1849318687886	-23.6463442161349	-23.5789998763725	-23.8578177056426	-24.3699990554596	-25.0253892297518	-25.7687271977153	-26.5763630318187	-27.4267007998788	-28.2564669304535	-28.9398016544724	-29.3422801565574	-29.4406152600749	-29.3679449298946	-29.3202773758574	-29.4565737302522	-29.8737958675469	-30.6213433028655	-31.7128697014826	-33.1156112006740	-34.7020953885493	-36.1739864408099	-37.1152205667143	-37.3773957209334	-37.2906977484280	-37.2950815540059	-37.6814125646072	-38.6392422651344	-40.3642096978128	-43.0896153848075	-46.2379241598136	-45.1726069134479	-41.0082854709148	-37.5661428899514	-34.9953326327845	-33.0394853278272	-31.5230808320434	-30.3373685385281	-29.4128995425147	-28.7036998567059	-28.1786905354343	-27.8169304571185	-27.6049162687971";
// const points = strCoords.split("\t").map((x) => 50 + parseFloat(x));

const data1 = [
  -20.498, -20.463, -20.361, -20.199, -19.986, -19.738,
  -19.471, -19.203, -18.953, -18.741, -18.589, -18.518,
  -18.551, -18.714, -19.038, -19.555, -20.309, -21.346,
  -22.717, -24.434, -26.326, -27.7, -27.572, -26.265,
  -24.86, -23.884, -23.483, -23.702, -24.549, -25.87,
  -26.873, -26.189, -24.198, -22.296, -21.058, -20.631,
  -21.128, -22.798, -26.205, -31.414, -28.69, -23.839,
  -21.269, -20.389, -21.079, -23.858, -31.558, -33.443,
  -23.661, -19.968, -18.638, -19.128, -21.817, -29.139,
  -31.268, -22.336, -19.128, -18.493, -20.142, -25.476,
  -41.845, -23.95, -19.684, -18.697, -20.184, -25.107,
  -36.916, -26.262, -22.978, -24.147, -32.349, -29.403,
  -21.29, -18.703, -19.161, -23.4, -49.58, -23.765,
  -19.499, -19.652, -24.855, -33.659, -20.776, -18.369,
  -22.493, -24.244, -11.274, -5.5834, -2.3181, -0.55952,
  0, -0.55952, -2.3181, -5.5834, -11.274, -24.244, -22.493,
  -18.369, -20.776, -33.659, -24.855, -19.652, -19.499,
  -23.765, -49.58, -23.4, -19.161, -18.703, -21.29, -29.403,
  -32.349, -24.147, -22.978, -26.262, -36.916, -25.107,
  -20.184, -18.697, -19.684, -23.95, -41.845, -25.476,
  -20.142, -18.493, -19.128, -22.336, -31.268, -29.139,
  -21.817, -19.128, -18.638, -19.968, -23.661, -33.443,
  -31.558, -23.858, -21.079, -20.389, -21.269, -23.839,
  -28.69, -31.414, -26.205, -22.798, -21.128, -20.631,
  -21.058, -22.296, -24.198, -26.189, -26.873, -25.87,
  -24.549, -23.702, -23.483, -23.884, -24.86, -26.265,
  -27.572, -27.7, -26.326, -24.434, -22.717, -21.346,
  -20.309, -19.555, -19.038, -18.714, -18.551, -18.518,
  -18.589, -18.741, -18.953, -19.203, -19.471, -19.738,
  -19.986, -20.199, -20.361, -20.463, -20.498
];

const data2 = [
  -19.702, -19.699, -19.691, -19.681, -19.676, -19.686, -19.722,
  -19.798, -19.932, -20.143, -20.459, -20.912, -21.543, -22.411,
  -23.606, -25.27, -27.677, -31.475, -39.001, -43.162, -32.973,
  -28.489, -25.861, -24.256, -23.394, -23.189, -23.662, -24.938,
  -27.282, -30.935, -32.831, -28.928, -25.325, -23.106, -22.003,
  -21.899, -22.865, -25.177, -29.016, -29.805, -25.364, -22.124,
  -20.456, -20.118, -21.159, -24.056, -29.907, -29.385, -23.373,
  -20.358, -19.303, -19.862, -22.125, -25.656, -24.909, -21.178,
  -19.046, -18.643, -19.957, -23.518, -31.939, -38.349, -29.74,
  -30.334, -41.846, -28.82, -22.199, -19.516, -19.287, -21.685,
  -28.685, -27.607, -21.118, -19.15, -20.336, -26.216, -31.39,
  -21.282, -18.402, -19.15, -24.915, -32.407, -20.482, -18.367,
  -22.937, -23.175, -11.011, -5.4727, -2.2753, -0.5495, 0,
  -0.5495, -2.2753, -5.4727, -11.011, -23.175, -22.937,
  -18.367, -20.482, -32.407, -24.915, -19.15, -18.402, -21.282,
  -31.39, -26.216, -20.336, -19.15, -21.118, -27.607, -28.685,
  -21.685, -19.287, -19.516, -22.199, -28.82, -41.846, -30.334,
  -29.74, -38.349, -31.939, -23.518, -19.957, -18.643, -19.046,
  -21.178, -24.909, -25.656, -22.125, -19.862, -19.303, -20.358,
  -23.373, -29.385, -29.907, -24.056, -21.159, -20.118, -20.456,
  -22.124, -25.364, -29.805, -29.016, -25.177, -22.865, -21.899,
  -22.003, -23.106, -25.325, -28.928, -32.831, -30.935, -27.282,
  -24.938, -23.662, -23.189, -23.394, -24.256, -25.861, -28.489,
  -32.973, -43.162, -39.001, -31.475, -27.677, -25.27, -23.606,
  -22.411, -21.543, -20.912, -20.459, -20.143, -19.932, -19.798,
  -19.722, -19.686, -19.676, -19.681, -19.691, -19.699, -19.702
];

const data3 = getPoints([1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0,
  1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1,
  0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0,
  0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1,
  0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
  1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1,
  0, 0, 1, 0, 0, 0, 0, 1, 0]
);

const modifedData = lineerInterpolate(data1).map(x => x + 60);
const modifedData2 = lineerInterpolate(data2).map(x => x + 60);
const modifedData3 = lineerInterpolate(data3).map(x => x + 60);

function randomBoolean() {
  return Math.random() < 0.5;
}

function randomBitstring(len) {
  return [...Array(len)].map(randomBoolean);
}

function lineerInterpolate(array) {
  const result = [];
  for (let i = 0; i < array.length - 1; i++) {
    const current = array[i];
    const next = array[i + 1];
    const lrp = (current + next) * 0.5;
    result.push(current, lrp);
  }
  result.push(array.slice(-1)[0]);
  return result;
}

function linspace(x1, x2, n) {
  const dif = x2 - x1;
  if (dif === 0) {
    return Array(Math.round(n)).fill(0);
  }
  const result = [];
  const step = dif / (n - 1);
  if (step !== 0) {
    for (let i = 0, v = x1; i < n; i++, v += step) {
      result.push(v);
    }
  }
  return result;
}

function setup() {
  const canvas = createCanvas(width, height);
  canvas.parent("p5canvas");
  textFont('Helvetica');
  strokeWeight(1.2);
  noFill();
  // frameRate(10);
  noLoop();
}

function draw() {
  background(240);
  push();
  translate(200, 200);
  drawRadarCircles();
  drawRadarLines();
  drawNumbers(180);
  const arr = lineerInterpolate(getPoints(randomBitstring(105))).map(x => x + 60);
  drawPolarPlot(arr, color(162, 20, 47, 180));
  // drawPolarPlot(modifedData2, color(20, 100, 200, 180), LINES);
  pop();
}

function drawNumbers(r) {
  push();
  fill(0);
  stroke(0);
  strokeWeight(0.1);

  // Circle
  textSize(7);
  textAlign(CENTER, CENTER);
  const step = HALF_PI / 3;
  for (let i = 0, v = HALF_PI + step, t = -150; i < 12; i++, v += step, t += 30) {
    const x1 = cos(v) * (r + 11);
    const y1 = sin(v) * (r + 11);
    text(t, x1, y1);
  }

  // Line
  textAlign(LEFT);
  textSize(6);
  const points = [-180, -150, -120, -90, -60, -30];
  for (let i = 0, t = 0; i < points.length; i++, t -= 10) {
    text(t, points[i] + 2.5, -3.5);
  }
  pop();
}

function drawRadarLines() {
  for (let i = 0, step = PI / 6, current = 0; i < 6; i++, current += step) {
    const x1 = cos(current) * 180;
    const y1 = sin(current) * 180;
    const x2 = cos(current + PI) * 180;
    const y2 = sin(current + PI) * 180;
    drawLine(x1, y1, x2, y2);
  }
}

function drawRadarCircles() {
  for (let i = 60; i <= 360; i += 60) {
    drawCircle(i);
  }
}

function drawCircle(r) {
  push();
  stroke(0);
  strokeWeight(0.7);
  noFill();
  for (let i = 0, step = TWO_PI / (r * 0.25); i < TWO_PI; i += step) {
    arc(0, 0, r, r, i, i + step * 0.5, OPEN);
  }
  pop();
}

function drawLine(x1, y1, x2, y2) {
  push();
  stroke(0);
  strokeWeight(0.7);
  noFill();
  const distance = Math.round(dist(x1, y1, x2, y2));
  const amount = distance / 4.5;
  const xArr = linspace(x1, x2, amount);
  const yArr = linspace(y1, y2, amount);
  beginShape(LINES);
  for (let i = 0; i < xArr.length; i++) {
    vertex(xArr[i], yArr[i]);
  }
  endShape();
  pop();
}

function drawPolarPlot(plot, colour, mode) {
  push();
  !!colour && stroke(colour);
  strokeWeight(1);
  beginShape(mode);
  for (let a = -PI, i = 0, stepSize = PI / plot.length; a < 0; a += stepSize) {
    const r = plot[i++] * 3;
    const x = cos(a) * r;
    const y = sin(a) * r;
    vertex(x, y);
  }
  endShape();
  pop();
}