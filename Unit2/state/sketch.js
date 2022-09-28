let state = 0

function setup() {
  createCanvas(500, 500); // Creates the canvas
}

function draw() {
  switch(state) {
    case 0:
      background("black"); // Makes the background black
      for (let i=0; i < width; i+=25) {
        for (let j=0; j < height; j+=25) {
          fill(getRandomColor()); // Randomly colors the rectangle
          rect(i, j, 20, 20); // Creates a rectangle for each iteration
        }
      }
      break;
    case 1:
      background("yellow"); // Makes the background yellow
      for (let i=0; i < width; i+=25) {
        for (let j=0; j < height; j+=25) {
          fill(getRandomColor()); // Randomly colors the circle
          circle(i, j, 20); // Creates a circle for each iteration
        }
      }
      break;
    case 2:
      background("red");
      for (let i = 0; i < width; i+=25) {
        for (let j = 0; j < height; j += 25) {
          fill(getRandomColor()); // Randomly colors the rectangle
          let r = Math.floor(Math.random()*20); // Randomly sizes the rectangle
          rect(i, j, r, r); // Creates a rectangle for each iteration
        }
      }
      break;
    case 3:
      background("green"); // Makes the background green
      for (let i = 0; i < width; i+=25) {
        for (let j = 0; j < height; j += 25) {
          fill(getRandomColor()); // Randomly colors the circle
          let r = Math.floor(Math.random()*20); // Randomly sizes the circle
          circle(i, j, r); // Creates a circle for each iteration
        }
      }
      break;
    case 4:
      background("blue"); // Makes the background blue
      for (let i=0; i < width; i+=25) {
        for (let j=0; j < height; j+=25) {
          let rand = Math.round(Math.random()); // Randomly picks zero for rectangle or one for circle
          if (rand === 0) {
            fill(getRandomColor()); // Randomly colors the rectangle
            rect(i, j, 20, 20); // Creates a rectangle for each iteration
          } else if (rand === 1) {
            fill(getRandomColor()); // Randomly colors the circle
            circle(i, j, 10); // Creates a circle for each iteration
          }
        }
      }
      break;
  }
}

function mouseReleased() {
  if (state >= 4) {
    state = 0;
  } else {
    state++;
  }
}

function getRandomColor() {
  let r = Math.floor(Math.random()*256); // Generates a random number for the red value
  let g = Math.floor(Math.random()*256); // Generates a random number for the green value
  let b = Math.floor(Math.random()*256); // Generated a random number for the blue value
  return 'rgb(' + r + ',' + g + ',' + b + ')'; // Compiles the random numbers to fit the color format
}