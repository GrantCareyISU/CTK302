let i1;
let x = 0;
let y = 0;

function preload() {
  i1 = loadImage("assets/nyan.png"); // Loads the Nyan Cat image
}

function setup() {
  createCanvas(1500, 700); // Creates the canvas
}

function draw() {
  background("black"); // Sets the background color of space
  noStroke(); // Removes the strokes
  avatar();
}

function avatar() {
  image(i1, x, y, 225, 130); // Inserts Nyan Cat
  
  if(x >= width) {
    x = 0; // Resets Nyan Cat to the left if they reached the right end
    y = y + 100; // Makes Nyan Cat descend upon reaching the right end
  } else {
    x += 5; // Moves Nyan Cat to the right
  }

  if(y >= height) {
    y = 0; // Resets Nyan Cat to the top if they reached the bottom
  }
}