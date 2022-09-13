let t1, t2, t3, t4;
let i1, i2, i3, i4;

function preload() {
  t1 = loadStrings("assets/birth.txt"); // Loads the first text file
  t2 = loadStrings("assets/earlyLife.txt"); // Loads the second text file
  t3 = loadStrings("assets/breakingPoint.txt"); // Loads the third text file
  t4 = loadStrings("assets/heroicCampaign.txt"); // Loads the fourth text file
  i1 = loadImage("assets/birth.png"); // Loads the first image
  i2 = loadImage("assets/earlyLife.png"); // Loads the second image
  i3 = loadImage("assets/breakingPoint.png"); // Loads the third image
  i4 = loadImage("assets/heroicCampaign.png"); // Loads the fourth image
}

function setup() {
  createCanvas(1500, 650); // Creates the canvas
  storyText = t1; // Sets the default text to the birth story
  time = "black"; // Sets the default time of day to night
  eyes = "yellow"; // Sets the default eyes to glowing
}

function draw() {
  // BACKGROUND COLOR
  background(time); // Allows the time of day to be updated
  noStroke(); // Removes the outlines to make the contents appear to fit together as one single shape
  
  // GROUND
  fill("gray"); // Colors the pavement
  rect(0, 550, width, 200); // Creates the ground
  
  // KEVIN DUSTIN
  fill("darkblue"); // Colors the jeans
  rect(width/2, 450, 50, 150); // Kevin Dustin's right leg
  rect(width/2 + 75, 450, 50, 150); // Kevin Dustin's left leg
  fill("darkgray"); // Colors the ash-covered shirt
  rect(width/2, 250, 125, 200); // Kevin Dustin's shirt
  arc(width/2, 275, 70, 50, PI, HALF_PI); // Kevin Dustin's right shoulder
  rect(width/2 - 35, 275, 35, 125); // Kevin Dustin's right arm
  arc(875, 275, 70, 50, HALF_PI, TWO_PI); // Keivn Dustin's left shoulder
  rect(875, 275, 35, 125); // Kevin Dustin's left arm
  fill("darkred"); // Colors the blood-stained undershirt
  triangle(750, 250, 875, 250, 812.5, 300); // Kevin Dustin's undershirt
  fill("tan"); // Colors Kevin Dustin's skin
  arc(812.5, 250, 50, 40, TWO_PI, PI); // Skin shown by end of shirts
  rect(787.5, 200, 50, 50); // Kevin Dustin's neck
  ellipse(812.5, 175, 90, 120); // Kevin Dustin's head
  fill(eyes); // Colors Kevin Dustin's eyes according to time
  circle(800, 150, 10); // Kevin Dustin's right eye
  circle(825, 150, 10); // Kevin Dustin's left eye
  fill("gray"); // Colors the mask
  arc(812.5, 175, 90, 120, TWO_PI, PI); // Mask used to hide scars
  
  // NEWSPAPER ICONS
  image(i1, 0, 0, 162.5, 162.5); // Places the first image
  image(i2, 0, 162.5, 162.5, 162.5); // Places the second image
  image(i3, 0, 325, 162.5, 162.5); // Places the third image
  image(i4, 0, 487.5, 162.5, 162.5); // Places the fourth image

  // BACKSTORY
  fill("white"); // Colors the story background to be solid white
  rect(1000, 0, 500, 650); // Background for story
  fill("black"); // Colors the text
  textSize(15); // Sets the size of the text
  text(storyText, 1100, 100, 300, 450); // Sets the text itself

  // CHAPTER SELECTION
  if(mouseX < 162.5 && mouseY < 162.5) {
    storyText = t1; // Displays the birth story if mouse is in defined area
  }
  if(mouseX < 162.5 && mouseY > 162.5 && mouseY < 325) {
    storyText = t2; // Displays the early life story if mouse is in defined area
  }
  if(mouseX < 162.5 && mouseY > 325 && mouseY < 487.5) {
    storyText = t3; // Displays the breaking point story if mouse is within defined area
  }
  if(mouseX < 162.5 && mouseY > 487.5 && mouseY < 650) {
    storyText = t4; // Displays the heroic campaign story if mouse is within defined area
  }
}

function mousePressed() {
  if (time === "black") {
    time = "blue"; // Converts background to daytime
    eyes = "black"; // Regular eyes
  }
  else if (time === "blue") {
    time = "black"; // Converts background to nighttime
    eyes = "yellow"; // Glowing eyes
  }
}