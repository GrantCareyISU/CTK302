let i1, i2;
let timer = 0;
let state = 0;

function preload() {
  i1 = loadImage("assets/smiley.png");
  i2 = loadImage("assets/frowney.png");
  imageMode(CENTER);
}

function setup() {
  createCanvas(1500, 650); // Creates the canvas
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background("white"); // Sets the background color to white
  fill("gray"); // Colors the button gray
  rect(0, 0, 100, 100); // Displays the button
  switch(state) {
    case 0:
      text('Do NOT push my buttons!', width/2, height/2); // Displays the text for the first state
      image(i1, width - 256, height - 256, 256, 256); // Displays the first image
      break;
    case 1:
      text('You pushed my button!', width/2, height/2); // Displays text for the second state
      image(i2, width - 256, height - 256, 256, 256); // Displays the second image
      break;
  }
}

function mouseReleased() {
  if (mouseX < 100 && mouseY < 100) {
    if (state === 0) {
      state = 1; // Sets the state to 1
    } else {
      state = 0; // Sets the state to 0
    }
  }
}