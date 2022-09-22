let x = 0;
let f1;

function preload() {
  f1 = loadFont("assets/CuteNotes.ttf"); // Loads the Cute Notes font
}

function setup() {
  createCanvas(500, 500); // Creates the canvas
}

function draw() {
  background(100); // Sets the background color value to 100
  textSize(128); // Sets the size of the text
  textFont(f1); // Sets the font of the text
  text("Unit 2 RULES!", x, 200); // Creates text at the given position
  x += 5; // Increments the x variable by 5

  if (x > width) {
    x = -1000; // Resets x to 0 if it goes beyond the width
  }
}