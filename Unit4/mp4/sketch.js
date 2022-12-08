// Spring 2019 Curtis Stieger's group worked on this, then our group in Fall 2022

var fence;
var locationData;
var num;
var distance;
var places = [];
var images = [];
var state = 0;
var catsCollected = 0;
var canvasVariable;
var timer = 1;

function preload() {
  locationData = getCurrentPosition();
}

function setup() {
  images[0] = loadImage('assets/catStart.png');
  images[1] = loadImage('assets/catRules.png');
  images[2] = loadImage('assets/catClues.png');
  images[3] = loadImage('assets/cat1.png');
  images[4] = loadImage('assets/cat2.png');
  images[5] = loadImage('assets/cat3.png');
  images[6] = loadImage('assets/cat4.png');
  images[7] = loadImage('assets/cat5.png');
  images[8] = loadImage('assets/cat6.png');
  images[9] = loadImage('assets/catWin.png');
  canvasVariable = createCanvas(displayWidth, displayHeight);
  canvasVariable.touchStarted();
  num = 0;
  intervalCurrentPosition(positionPing, 5000);
  places.push(new Place(40.50985450, -88.98914693, "Julian Hall 064", .02)); // Starting area in Julian
  places.push(new Place(40.50931521, -88.98866339, "Rose's Office", .02)); // Professor's office in Julian
  places.push(new Place(40.50979896, -88.98923233, "Electrical Room", .02)); // Electrical Room of Julian
  places.push(new Place(40.50946499, -88.98911583, "Music Therapy Room", .02)); // Music Therapy Room of Julian
  places.push(new Place(40.50978191, -88.98909065, "Storage Room", .02)); // Storage Room of Julian
  places.push(new Place(40.50949390, -88.98887783, "Mechanical Room", .02)); // Mechanical Room of Julian
}

function draw() {
  switch(state) {
    case 0: // TITLE
      background(images[0]);
      timer = 1;
      timer--;
      break;
    case 1: // RULES
      background(images[1]);
      timer = 1;
      timer--;
      break;
    case 2: // CLUES
      background(images[2]);
      timer = 1;
      timer--;
      break;
    case 3: // Max
      background(images[3]);
      timer = 1;
      timer--;
      catsCollected++;
      break;
    case 4: // Fancypants
      background(images[4]);
      timer = 1;
      timer--;
      catsCollected++;
      break;
    case 5: // Lucy
      background(images[5]);
      timer = 1;
      timer--;
      catsCollected++;
      break;
    case 6: // Luna
      background(images[6]);
      timer = 1;
      timer--;
      catsCollected++;
      break;
    case 7: // Floof
      background(images[7]);
      timer = 1;
      timer--;
      catsCollected++;
      break;
    case 8: // Grumps
      background(images[8]);
      timer = 1;
      timer--;
      catsCollected++;
      break;
    case 9: // WIN
      background(images[9]);
      timer = 1;
      timer--;
      break;
  }
}

function positionPing(position) {
  textSize(24);
  num++;
  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

  for (var i = 0; i < places.length; i++) {
    if (places[i].fence.insideFence === true){
      state = places[i];
      //places[i].display();
      break;
    }
  }
}

function Place(lat, long, desc, radius) {
  this.lat = lat;
  this.long = long;
  this.fence = false;
  this.desc = desc;
  this.radius = radius;
  this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates

  this.display = function() {
    textSize(20);
    text("You are at " + this.desc, 10, 240);
  }
}

function touchStarted() {
  switch(state) {
    case 0:
      if(timer <= 0) {
        state = 1; // Moves to Rules
        break;
      }
    case 1:
      if(timer <= 0) {
        state = 2; // Moves to Clues
        break;
      }
    case 3:
      if(timer <= 0) {
        if(catsCollected > 5) {
          state = 9; // Moves to Win
        } else {
          state = 2; // Returns to Clues
        }
        break;
      }
    case 4:
      if(timer <= 0) {
        if(catsCollected > 5) {
          state = 9; // Moves to Win
        } else {
          state = 2; // Returns to Clues
        }
        break;
      }
    case 5:
      if(timer <= 0) {
        if(catsCollected > 5) {
          state = 9; // Moves to Win
        } else {
          state = 2; // Returns to Clues
        }
        break;
      }
    case 6:
      if(timer <= 0) {
        if(catsCollected > 5) {
          state = 9; // Moves to Win
        } else {
          state = 2; // Returns to Clues
        }
        break;
      }
    case 7:
      if(timer <= 0) {
        if(catsCollected > 5) {
          state = 9; // Moves to Win
        } else {
          state = 2; // Returns to Clues
        }
        break;
      }
    case 8:
      if(timer <= 0) {
        if(catsCollected > 5) {
          state = 9; // Moves to Win
        } else {
          state = 2; // Returns to Clues
        }
        break;
      }
    case 9:
      if(timer <= 0) {
        if(catsCollected > 5) {
          state = 9; // Moves to Win
        } else {
          state = 2; // Returns to Clues
        }
        break;
      }
  }
}