let state = 0;
let bg, bg1, bg2;
let b1, b2, b3;
let playerApollo, playerHand;
let p1Pos;
let p2Pos;
let toys = [];
let toyType = [];
let currentToy;
let timer = 10 * 60;

function preload() {
  bg = loadImage("assets/mp3_Menu.jpg");
  bg1 = loadImage("assets/mp3_Win.jpg");
  bg2 = loadImage("assets/mp3_Loss.jpg");
  playerApollo = loadImage("assets/mp3_Apollo.png");
  playerHand = loadImage("assets/mp3_Hand.png");
  toyType[0] = loadImage("assets/mp3_Toy1.png");
  toyType[1] = loadImage("assets/mp3_Toy2.png");
  toyType[2] = loadImage("assets/mp3_Toy3.png");
  toyType[3] = loadImage("assets/mp3_Toy4.png");
}

function setup() {
  createCanvas(1530, 690); // Creates the background size
  textAlign(CENTER); // Centers text
  rectMode(CENTER); // Centers rectangles
  b1 = createButton("SINGLEPLAYER"); // Creates button for singleplayer mode
  b2 = createButton("MULTIPLAYER"); // Creates button for multiplayer mode
  b3 = createButton("RETURN TO MENU"); // Creates button for win/loss states
  p1Pos = createVector(width/2, height/2); // Creates the position for Player 1
  p2Pos = createVector(25, 25); // Creates the position for Player 2
}

function draw() {
  switch(state) {
    case 0:
      // MENU
      clear();
      b3.hide(); // Hides button upon replay
      background(bg); // Sets the background image
      rect(width/2, 100, 500, 100); // Rectangle to view the title
      text('Apollo\'s Playtime', width/2, 100); // Shows the game's title
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

      // SINGLEPLAYER LOADING
      image(playerApollo, p1Pos.x, p1Pos.y, 200, 200); // Displays Player 1
      for(let i=0; i<toys.length; i++) {
        toys[i].display(); // Shows a toy
        toys[i].move(); // Moves the toy
        if(toys[i].pos.dist(p1Pos) < 50) {
          toys.splice(i, 1); // Deletes the stick upon collision
        }
      }

      // SINGLEPLAYER GAMEPLAY
      p1CheckKeys(); // Calls function to check if keys are pressed
      p1CheckPosition(); // Calls function to keep Player 1 within bounds
      p1ToysCollected(); // Calls function to check how many toys are collected

      // TIMER
      timer--;
      if(timer <= 0) {
        state = 4; // Sends to loss state
      }
      break;

    case 2:
      // MULTIPLAYER PREREQUISITES
      clear(); // Empties the canvas
      b1.hide(); // Removes the Singleplayer button from the screen
      b2.hide(); // Removes the Multiplayer button from the screen
      background("black"); // Sets the background color to black

      // MULTIPLAYER LOADING
      image(playerApollo, p1Pos.x, p1Pos.y, 200, 200); // Displays Player 1
      image(playerHand, p2Pos.x, p2Pos.y, 200, 200); // Displays Player 2
      for(let i=0; i<toys.length; i++) {
        toys[i].display(); // Shows a toy
        toys[i].move(); // Moves the toy
        if(toys[i].pos.dist(p1Pos) < 50) {
          toys.splice(i, 1); // Deletes the stick upon collision
        }
      }

      // MULTIPLAYER GAMEPLAY
      p1CheckKeys(); // Calls function to check if keys are pressed
      p1CheckPosition(); // Calls function to keep Player 1 within bounds
      p1ToysCollected(); // Calls function to check how many toys are collected
      p2CheckKeys(); // Calls function to check if arrows are pressed
      p2CheckPosition(); // Calls function to keep Player 2 within bounds
      if(p1Pos.dist(p2Pos) < 50) {
        state = 4; // Player 2 catches Apollo, meaning a loss
      }

      // TIMER
      timer--;
      if(timer <= 0) {
        state = 4; // Sends to loss state
      }
      break;

      case 3:
        clear(); // Empties the canvas
        toyEmpty(); // Calls function that deletes the toys to allow replay
        background(bg1); // Sets the background image
        rect(width/2, 100, 500, 75); // Creates a rectangle to allow the text to be read more easily
        text('YOU PLAYED WITH APOLLO!', width/2, 100); // Text for win state
        b3.show(); // Shows the replay button
        b3.position(width/2, 150); // Positions the replay button
        b3.mousePressed(menu); // Sends the player to the menu upon click
        break;

      case 4:
        clear(); // Empties the canvas
        toyEmpty(); // Calls function that deletes the toys to allow replay
        background(bg2); // Sets the background image
        rect(width/2, 100, 600, 75); // Creates a rectangle to allow the text to be read more easily
        text('HOW DARE YOU MAKE APOLLO SAD!', width/2, 100); // Text for loss state
        b3.show(); // Shows the replay button
        b3.position(width/2, 150); // Positions the replay button
        b3.mousePressed(menu); // Sends the play to the menu upon click
        break;
  }
}

function replay() {
  timer = 10 * 60; // Restarts the timer
  p1Pos.x = width/2; // Repositions Player 1 horizontally
  p1Pos.y = height/2; // Repositions Player 1 vertically
  p2Pos.x = 25; // Repositions Player 2 horizontally
  p2Pos.y = 25; // Repositions Player 2 vertically
  for(let i=0; i<12; i++) {
    toys.push(new Toy()); // Creates a new toy
  }
}

function toyEmpty() {
  for(let i=0; i<toys.length; i++) {
    toys = []; // Removes toys to allow replay
  }
}

function singlePlayer() {
  state = 1; // Goes to Singleplayer state
  replay(); // Allows replay
}

function multiPlayer() {
  state = 2; // Goes to Multiplayer state
  replay();
}

function menu() {
  state = 0; // Returns to the menu
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

function p1ToysCollected() {
  if(toys.length < 8) {
    state = 3; // Goes to win state
  }
}

function p2CheckKeys() {
  if(keyIsDown(UP_ARROW)) {
    p2Pos.y -= 3; // Slowly moves Player 2 up
  }
  if(keyIsDown(LEFT_ARROW)) {
    p2Pos.x -= 3; // Slowly moves Player 2 left
  }
  if(keyIsDown(DOWN_ARROW)) {
    p2Pos.y += 3; // Slowly moves Player 2 down
  }
  if(keyIsDown(RIGHT_ARROW)) {
    p2Pos.x += 3; // Slowly moves Player 2 right
  }
}

function p2CheckPosition() {
  if(p2Pos.x <= 0) {
    p2Pos.x = 0; // Keeps Player 2 from vanishing to the left
  }
  if(p2Pos.x >= width) {
    p2Pos.x = width; // Keeps Player 2 from vanishing to the right
  }
  if(p2Pos.y <= 0) {
    p2Pos.y = 0; // Keeps Player 2 from vanishing to the top
  }
  if(p2Pos.y >= height - 200) {
    p2Pos.y = height - 200; // Keeps Player 2 from vanishing to the bottom
  }
}

class Toy {
  // CONSTRUCTOR
  constructor() {
    this.pos = createVector(random(0, 690), random(0, 690)); // Sets the toy to a random position
    this.velocity = createVector(random(-1, 1), random(-1, 1)); // Sets the velocity to a random speed
    this.type = int(random(0, 4));
  }

  // METHODS
  display() {
    image(toyType[this.type], this.pos.x, this.pos.y, 100, 100); // Displays the image of the stick
  }
  move() {
    this.pos.add(this.velocity); // Applies movement to the toy
  }
}