let i1, i2, i3;
let timer = 0;
let state = 0;

function preload() {
  i1 = loadImage("assets/Apollo.jpg");
  i2 = loadImage("assets/BestFriends.jpg");
  i3 = loadImage("assets/RickRoll.png");
  imageMode(CENTER);
}

function setup() {
  createCanvas(1500, 650); // Creates the canvas
  textSize(32);
  textAlign(CENTER, CENTER);
}

function draw() {
  background("white"); // Sets the background color to white
  switch(state) {
    case 0:
      text('My dog, Apollo', width/2, 50); // Displays text for the first state
      image(i1, width/2 - 250, height/2 - 250, 500, 500); // Displays the first image
      break;
    case 1:
      text('My best friends', width/2, 50); // Displays text for the second state
      image(i2, width/2 - 250, height/2 - 250, 500, 500); // Displays the second image
      break;
    case 2:
      text('My favorite prank', width/2, 50); // Displays text for the third state
      image(i3, width/2 - 250, height/2 - 250, 500, 500); // Displays the third image
      break;
  }

  timer++; // Increments the timer
  if (timer < 5*60) {
    state = 0;
  } else if (timer > 5*60 && timer < 5*180) {
    state = 1;
  } else if (timer > 5*200 && timer < 5*600) {
    state = 2;
  } else if (timer > 5*600) {
    timer = 0;
  }
}
