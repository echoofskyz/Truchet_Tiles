let size = 50
let time = 0;
let offset = [0, 0];
let cellGrid = {};
let img0;
let img1;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  stroke(255);
  frameRate(30);
  strokeCap(PROJECT);
}

function drawMaze() {
  for (let dx = -size; dx < windowWidth + size; dx += size) {
    for (let dy = -size; dy < windowHeight + size;
        dy += size) {
      let gx = floor(dx / size) 
        - floor(offset[0] / size)
        - (offset[0] < 0 ? 1 : 0);
      let gy = floor(dy / size) 
        - floor(offset[1] / size)
        - (offset[1] < 0 ? 1 : 0);
      if (!([gx, gy] in cellGrid)) {
        cellGrid[[gx, gy]] = random() < .5 ? 0 : 1;
      }
      strokeWeight(size / 10);
      stroke(255);
      cellGrid[[gx, gy]]
        ? line(dx + offset[0] % size,
            dy + offset[1] % size,
            dx + offset[0] % size + size,
            dy + offset[1] % size + size,)
        : line(dx + offset[0] % size + size,
            dy + offset[1] % size,
            dx + offset[0] % size,
            dy + offset[1] % size + size,);
    }
  }
}

function draw() {
  background(0);
  drawMaze();
  offset[0] -= (mouseX - windowWidth / 2) / windowWidth * 4;
  offset[1] -= (mouseY - windowHeight / 2) / windowHeight * 4;
}

function windowResized() {
  resizeCanvas(windowWidth - 20, windowHeight - 20);
}
