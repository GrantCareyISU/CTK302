let state = 0;
let i1, i2, i3, i4;
let input;
let b1, b2, b3;
let mic;
let vol = 0;

function preload() {
  i1 = loadImage("assets/mp2_state1.png"); // Loads the first image
  i2 = loadImage("assets/mp2_state2.png"); // Loads the second image
  i3 = loadImage("assets/mp2_state3.png"); // Loads the third image
  i4 = loadImage("assets/mp2_state4.png"); // Loads the fourth image
}

function setup() {
  // CANVAS
  createCanvas(677, 397); // Creates the background canvas

  // VISUAL INPUT
  input = createInput(); // Makes the textbox
  b1 = createButton("SUBMIT"); // Makes and fills the button in the first state
  b2 = createButton("PLANET"); // Makes and fills the first button of the second state
  b3 = createButton("DWARF PLANET"); // Makes and fills the second button of the second state

  // AUDIO INPUT
  mic = new p5.AudioIn(); // Instantiates the microphone
  mic.start(); // Activates the microphone
}

function draw() {
  switch (state) {
    case 0:
      // BACKGROUND
      background(i1); // Sets the image of the first state
      b2.hide(); // Hides the second button
      b3.hide(); // Hides the third button

      // INPUT
      input.show();
      input.position(50, 200); // Places the textbox
      b1.show(); // Shows the first button
      b1.position(100, 250); // Places the submit button
      b1.mousePressed(checkString); // Calls the checkString function upon button press
      
      break;
    case 1:
      // BACKGROUND
      input.remove(); // Removes the textbox
      b1.hide(); // Removes the submit button
      background(i2); // Sets the image of the second state

      // BUTTONS
      b2.show(); // Reveals the second button
      b3.show(); // Reveals the third button
      b2.position(100, 250); // Positions the first button of the second state
      b3.position(450, 250); // Positions the second button of the second state
      b2.mousePressed(goingUp); // Calls function specifically made for this button
      b3.mousePressed(goingDown); // Calls function specifically made for this button
      
      break;
    case 2:
      // BACKGROUND
      b2.hide(); // Hides the second button
      b3.hide(); // Hides the third button
      background(i3); // Sets the image of the third state

      // MICROPHONE
      vol = mic.getLevel(); // Variable for the level of received volume
      if(vol >= 0.7) {
        state = 1; // Returns program to the second state
      }

      break;
    case 3:
      // BACKGROUND
      b2.hide(); // Hides the second button
      b3.hide(); // Hides the third button
      background(i4); // Sets the image of the fourth state

      // MICROPHONE
      vol = mic.getLevel(); // Variable for the level of received volume
      if(vol >= 0.7) {
        state = 1; // Returns program to the second state
      }

      break;
  }
}

function checkString() {
  const userCommand = input.value(); // Saves the user's input value to a variable
  if (userCommand.toUpperCase() === "OPEN") {
    state = 1; // Moves to the next state if the user inputs OPEN
  } else if (userCommand.toUpperCase != "OPEN") {
    input.value(""); // Resets the textbox so it is blank
  }
}

function goingUp() {
  state = 2;
}

function goingDown() {
  state = 3;
}