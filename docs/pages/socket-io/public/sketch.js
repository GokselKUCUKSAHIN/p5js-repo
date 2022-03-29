const SIZE = [640, 480]
// let socket = io("http://127.0.0.1:3000");

function setup() {
  // socket.on("connect", () => {
  //   console.log(socket.id);
  // })

  const canvas = createCanvas(...SIZE);
  canvas.parent("p5canvas");
  background(0);
  noLoop();
  // frameRate(10);
}

let count = 0;

function draw() {

}