// NOTE: I did not forget to add the punchline, the joke is that it takes forever to hear my joke
// I added the second state to satisfy the assignment's requirements, though the joke doesn't need it

let timer = 0;
let state = 0;

function setup() {
  createCanvas(1500, 650); // Creates the canvas
  textSize(32); // Sets the size of the text
  textAlign(CENTER, CENTER); // Centers the text
}

function draw() {
  switch(state) {
    case 0:
      background("white"); // Sets background color to white
      text('How long does it take a professor to hear my joke?', width/2, 50); // Displays text for the first state
      break;
    case 1:
      background("yellow"); // Sets background color to yellow
      text('How long does it take a professor to hear my joke?', width/2, 50); // Displays text for the second state, wasting time :)
  }

  timer++; // Increments the timer
  if (timer < 5*60) {
    state = 0; // Sets the state to the joke's prompt
  } else if (timer > 5*60 && timer < 5*180) {
    state = 1; // Sets the state to the joke's "answer"
  } else if (timer > 5*180) {
    timer = 0; // Resets the timer
  }
}
