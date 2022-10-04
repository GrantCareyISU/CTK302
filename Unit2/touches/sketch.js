let numberOfTouches;
let i1, i2, i3, i4;

function preload() {
  i1 = loadImage("assets/frowney.png"); // Loads image 1
  i2 = loadImage("assets/alone.jpg"); // Loads image 2
  i3 = loadImage("assets/toyStory.jpg"); // Loads image 3
  i4 = loadImage("assets/partyRockAnthem.jpg"); // Loads image 4
}

function setup() {
  createCanvas(400, 400); // Creates background
}

function draw() {
  clear(); // Clears the screen
  numberOfTouches = touches.length; // Sets the number of touches variable to the number of physical touches
  text(numberOfTouches + ' touches', 5, 10); // Displays how many touches there are at the moment
  
  switch(numberOfTouches) {
    case 0: 
      text("Nobody is here.", 5, 22); // Displays if nobody is touching the screen
      image(i1, width/2, height/2, 150, 150) // Displays image 1
      break;
      
      case 1: 
       text("Are you the only one here?", 5, 22); // Displays if only one person is touching the screen
       image(i2, width/2, height/2, 150, 150); // Displays image 2
      break;
      
      case 2:
      text("You got a friend!", 5, 22); // Displays if two people are touching the screen
      image(i3, width/2, height/2, 150, 150); // Displays image 3
      break;
      
      case 3:
     text("Woohoo, a party!", 5, 22); // Displays if three people are touching the screen
     image(i4, width/2, height/2, 150, 150); // Displays image 4
     break;   
  } 
}