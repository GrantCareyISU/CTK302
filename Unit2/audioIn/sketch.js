let mic;
let vol = 0;

function setup() {
  createCanvas(400, 400); // Creates the background

  // Microphone
  mic = new p5.AudioIn(); // Instantiates the microphone
  mic.start(); // Activates the microphone
}

function draw() {
  background("green"); // Sets the background color to green
  
  // Volume
  vol = mic.getLevel(); // Variable for the level of received volume

  // Text
  textSize(18); // Sets the size of the text
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol.toFixed(3), 10, 60); // Displays text

  // Box
  x = map(vol, 0, 1, 0, width); // Sets the x-axis location of the rectangle
  rect(x, 200, 50, 50); // Creates the rectangle
}

function touchStarted() {
  getAudioContext().resume(); // Resumes audio if on touchscreen
}
