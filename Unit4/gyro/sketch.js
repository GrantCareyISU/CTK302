let alpha = 0, beta = 0 , gamma = 0;
let i1;
let f1;
let xPosition = 0;
let yPosition = 0;
let x = 0, y = 0, z = 0 ;

function preload() {
  i1 = loadImage("assets/datBoi.png")
  f1 = loadFont("assets/stoicheion.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background('#c6f5ff');
  textFont(f1);
  xPosition = map(gamma, -60, 60, 0, width);
  yPosition = map(beta, -30, 30, 0, height);
  push();
  translate(xPosition, yPosition);
  rotate(radians(alpha));
  image(i1, 0, 0, 500, 500);
  pop();
  textAlign(LEFT);
  textSize(20);
  fill('black');
  text("orientation data:", 25, 25);
  textSize(15);
  text("alpha: " + alpha, 25, 50);
  text("beta: " + beta, 25, 70);
  text("gamma: " + gamma, 25, 90);
  textSize(20);
  text("acceleration data:", 25, 125);
  textSize(15);
  text("x = " + x.toFixed(2), 25, 150);
  text("y = " + y.toFixed(2), 25, 170);
  text("z = " + z.toFixed(4), 25, 190);
  fill('white');
  noStroke();
  textSize(300);
  textAlign(CENTER);
  text("Dat Boi", width / 2, height / 2);
}

window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});

window.addEventListener('devicemotion', function(e) {
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});
