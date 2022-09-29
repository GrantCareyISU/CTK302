let state = 0
let i1, i2;

function preload() {
  i1 = loadImage("assets/Joke1_1.jpg"); // Loads the joke's prompt
  i2 = loadImage("assets/Joke1_2.jpg"); // Loads the joke's answer
}

function setup() {
  createCanvas(1500, 650); // Creates the canvas
}

function draw() {
  background("black"); // Sets the background color to black
  switch(state) {
    case 0:
      image(i1, width/2 - 450, height/2 - 250, 900, 500); // Displays the first image
      break;
    case 1:
      image(i2, width/2 - 450, height/2 - 250, 900, 500); // Displays the second image
      break;
  }
}

function mouseReleased() {
  if (state === 0) {
    state = 1; // Sets the state to reveal the answer of the joke
  } else {
    state = 0; // Resets the state to reveal the joke prompt
  }
}