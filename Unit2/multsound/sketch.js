let s1, s2, s3;
let state = 0;

function preload() {
  s1 = loadSound("assets/november.mp3"); // Loads song 1
  s2 = loadSound("assets/sadday.mp3"); // Loads song 2
  s3 = loadSound("assets/tomorrow.mp3"); // Loads song 3
}

function setup() {
  createCanvas(800, 800); // Creates the background
}

function draw() {
  background(100); // Sets the background to 100
  switch (state) {
    case 0:
      background("black"); // Sets the background color to black
      text('Please click to jam', width/2, height/2); // Displays prompt
      text("0", 100, 100) // Displays text for case 0
    case 1:
      if (!s1.isPlaying()) {
        s1.play(); // Plays the first song
      }
      background("red"); // Sets the background color to red
      text("1", 100, 100); // Displays text for case 1
      break;
    case 2:
      if (!s2.isPlaying()) {
        s2.play(); // Plays the second song
      }
      background("yellow"); // Sets the background color to yellow
      text("2", 100, 100); // Displays text for case 2
      break;
    case 3:
      if (!s3.isPlaying()) {
        s3.play(); // Plays the third song
      }
      background("green"); // Sets the background color to green
      text("3", 100, 100); // Displays text for case 3
      break;
  }
}

function mouseReleased() {
  s1.stop(); // Stops the first song
  s2.stop(); // Stops the second song
  s3.stop(); // Stops the third song
  state++; // Moves to the next state upon mouse click
  if (state > 3) {
    state = 1; // Returns to case 1
  }
}

function touchStarted() {
  getAudioContext().resume(); // Resumes audio if on touchscreen
}