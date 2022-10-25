let state = 0;
let bg;
let b1, b2;
let playerApollo, playerHand;
let p1Pos;
let p2Pos;
let toys = [];
let toyType;
let currentToy;
let timer = 30 * 60;

function preload() {
  bg = loadImage("assets/mp3_Menu.jpg");
  playerApollo = loadImage("assets/mp3_Apollo.png");
  playerHand = loadImage("assets/mp3_Hand.png");
  toy1 = loadImage("assets/mp3_Toy1.png");
  toy2 = loadImage("assets/mp3_Toy2.png");
  toy3 = loadImage("assets/mp3_Toy3.png");
  toy4 = loadImage("assets/mp3_Toy4.png");
}

function setup() {
  createCanvas(1530, 690); // Creates the background size
  textAlign(CENTER); // Centers text
  rectMode(CENTER); // Centers rectangles
  b1 = createButton("SINGLEPLAYER"); // Creates button for singleplayer mode
  b2 = createButton("MULTIPLAYER"); // Creates button for multiplayer mode
  p1Pos = createVector(width/2, height/2); // Creates the position for Player 1
  p2Pos = createVector(25, 25); // Creates the position for Player 2
  for(let i=0; i<12; i++) {
    toys.push(new Toy()); // Creates a new toy
  }
}

function draw() {
  switch(state) {
    case 0:
      // MENU
      background(bg); // Sets the background image
      b1.show(); // Displays Singleplayer button
      b2.show(); // Displays Multiplayer button
      b1.position(width/2 - 200, 250); // Positions the Singleplayer button
      b2.position(width/2 + 200, 250); // Positions the Multiplayer button
      b1.mousePressed(singlePlayer); // Goes to Singleplayer Mode on click
      b2.mousePressed(multiPlayer); // Goes to Multiplayer Mode on click
      rect(width/2, height/2, 750, 150); // Creates a rectangle to view the text
      textSize(32); // Sets the size of the text
      text("Player 1: Use WASD to help Apollo collect his toys!", width/2, height/2 - 15); // Displays text prompt
      text("Player 2: Use the arrow keys to steal the his toys!", width/2, height/2 + 35) // Displays optional text prompt
      break;

    case 1:
      // SINGLEPLAYER PREREQUISITES
      clear(); // Empties the canvas
      b1.hide(); // Removes the Singleplayer button from the screen
      b2.hide(); // Removes the Multiplayer button from the screen
      background("black"); // Sets the background color to black
      timer--; // Decreases timer value
      if(timer <= 0) {
        state = 4; // Sends to loss state
      }
      // SINGLEPLAYER LOADING
      image(playerApollo, p1Pos.x, p1Pos.y, 200, 200); // Displays Player 1
      for(let i=0; i<12; i++) {
        toys[i].display(); // Shows a toy
        toys[i].move(); // Moves the toy
        if(toys[i].pos.dist(p1Pos) < 50) {
          toys.splice(i, 1); // Deletes the stick upon collision
        }
      }
      // SINGLEPLAYER GAMEPLAY
      p1CheckKeys(); // Calls function to check if keys are pressed
      p1CheckPosition(); // Calls function to keep Player 1 within bounds
      break;

    case 2:
      clear(); // Empties the canvas
      background("black"); // Sets the background color to black
      timer--; // Decreases timer value
      if(timer <= 0) {
        state = 4; // Goes to loss state
      }
      break;
  }
}

function singlePlayer() {
  state = 1; // Goes to Singleplayer state
}

function multiPlayer() {
  state = 2; // Goes to Multiplayer state
}

function p1CheckKeys() {
  if(keyIsDown("87")) {
    p1Pos.y -= 5; // Moves Player 1 up
  }
  if(keyIsDown("65")) {
    p1Pos.x -= 5; // Moves Player 1 left
  }
  if(keyIsDown("83")) {
    p1Pos.y += 5; // Moves Player 1 down
  }
  if(keyIsDown("68")) {
    p1Pos.x += 5; // Moves Player 1 right
  }
}

function p1CheckPosition() {
  if(p1Pos.x <= 0) {
    p1Pos.x = 0; // Keeps Player 1 from vanishing to the left
  }
  if(p1Pos.x >= width) {
    p1Pos.x = width; // Keeps Player 1 from vanishing to the right
  }
  if(p1Pos.y <= 0) {
    p1Pos.y = 0; // Keeps Player 1 from vanishing to the top
  }
  if(p1Pos.y >= height - 200) {
    p1Pos.y = height - 200; // Keeps Player 1 from vanishing to the bottom
  }
}

class Toy {
  // CONSTRUCTOR
  constructor() {
    this.pos = createVector(random(0, 690), random(0, 690)); // Sets the toy to a random position
    this.velocity = createVector(random(-3, 3), random(-3, 3)); // Sets the velocity to a random speed
  }

  // METHODS
  checkToy() {
    toyType = random(0, 4);
    switch(toyType) {
      case 0:
        currentToy = toy1;
        break;
      case 1:
        currentToy = toy2;
        break;
      case 2:
        currentToy = toy3;
        break;
      case 3:
        currentToy = toy4;
        break;
    }
  }
  display() {
    this.checkToy();
    image(currentToy, this.pos.x, this.pos.y, 100, 100); // Displays the image of the stick
  }
  move() {
    this.pos.add(this.velocity); // Applies movement to the toy
  }
}