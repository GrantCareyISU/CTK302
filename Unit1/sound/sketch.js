let s1;

function preload() {
  s1 = loadSound("assets/ofeliasdream.mp3");
}

function setup() {
  createCanvas(500, 500);
  s1.play();
}

function draw() {
  background("black");
  fill("white");
  text("The name of the song is ofeliasdream by Benjamin Tissot\nand I chose it because it sounds nice.", 100, 100, 400, 400);
}

function mouseReleased() {
  if(s1.isPlaying()) {
    summer.pause();
  } else {
    summer.play();
  }
}

function touchStarted() {
  getAudioContext().resume();
}