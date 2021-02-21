function setup() {
  size = 400;
  const canvas = createCanvas(size, size, WEBGL);
  canvas.parent("p5canvas");
  //
  detailX = createSlider(1, 24, 3);
  detailX.position(5, height + 10);
  detailX.style("width", "180px");
  //
  detailY = createSlider(1, 16, 3);
  detailY.position(210, height + 10);
  detailY.style("width", "180px");
  //
  rx = createSlider(0, 5, 0.5, 0.01);
  rx.position(5, height + 30);
  rx.style("width", "120px");
  //
  ry = createSlider(0, 5, 0.5, 0.01);
  ry.position(137.5, height + 30);
  ry.style("width", "120px");
  //
  rz = createSlider(0, 5, 0.5, 0.01);
  rz.position(270, height + 30);
  rz.style("width", "120px");
}

function draw() {
  background(205, 102, 94);
  rotateX(rx.value());
  rotateY(ry.value());
  rotateZ(rz.value());
  cone(120, 260, detailX.value(), detailY.value());
}
