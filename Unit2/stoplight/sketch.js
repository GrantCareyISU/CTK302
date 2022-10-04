let state = 0;
let timer = 0;
let x = 0;
let v = 5;
let criminal = false;
let i1;
let c = 0;
let cv = 5;
let s1;

function preload() {
  i1 = loadImage("assets/copCar.png");
  s1 = loadSound("assets/siren.mp3");
}

function setup() {
  createCanvas(800, 700); // Creates background
  textAlign(CENTER, CENTER);
}

function draw() {
  // CANVAS
  background("blue"); // Sets the background to 100

  // CAR
  fill("red"); // Colors the car red
  rect(x, 600, 100, 50); // Creates and positions the car
  x += v; // Moves the rectangle using velocity
  if (x >= width) {
    x = 0; // Loops the car
  }

  // STOPLIGHT
  fill("yellow"); // Colors the stoplight
  rect(200, 0, 300, 500); // Creates and positions the stoplight
  switch (state) {
    case 0:
      v = 5; // Sets the speed of the car
      fill("gray"); // Colors the inactive lights
      ellipse(350, 75, 125, 125); // Red Stoplight
      ellipse(350, 225, 125, 125); // Yellow Stoplight
      fill("green"); // Lights the GO light
      ellipse(350, 385, 125, 125); // Green stoplight
      break;
    case 1:
      v = 5; // Sets the speed of the car
      fill("gray"); // Colors the inactive light
      ellipse(350, 75, 125, 125); // Red Stoplight
      fill("yellow"); // Colors the SLOW DOWN light
      ellipse(350, 225, 125, 125); // Yellow Stoplight
      fill("gray"); // Colors the inactive light
      ellipse(350, 385, 125, 125); // Green stoplight
      break;
    case 2:
      if(x === 300 && criminal === false) {
        v = 0; // Stops the car
      } else if (criminal === true) {
        s1.play();
        v = 5;
        image(i1, c, 600, 100, 50);
        c += cv;
        if (c > width) {
          c = 0;
        }
      }
      fill("red"); // Colors the STOP light
      ellipse(350, 75, 125, 125); // Red Stoplight
      fill("gray"); // Colors the inactive lights
      ellipse(350, 225, 125, 125); // Yellow Stoplight
      ellipse(350, 385, 125, 125); // Green stoplight
      break;
  }

  timer++
  if(timer > 3*60) {
    timer = 0; // Restarts timer
    state++; // Moves to the next state
    if(state > 2) {
      state = 0; // Resets to Green light
    }
  }

  // ILLEGAL
  textSize(16); // Sizes the text
  fill("black"); // Colors the text
  text("Hold ENTER to break the law!", width/2 - 25, 10); // Prompts people to break the law
}

function keyPressed() {
  if (keyCode === ENTER) {
    criminal = true; // Run the program ;)
  } else {
    criminal = false; // Run the program ;)
  }
}