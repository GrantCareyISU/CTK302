// Spring 2019 Curtis Stieger's group worked on this, then our group in Fall 2022

var fence;
var locationData;
var num;
var distance;
var places = [];
var cats = [];
var state = 0;

function preload() {
  locationData = getCurrentPosition();
}

function setup() {
  cats[0] = loadImage('assets/cat0.png');
  cats[1] = loadImage('assets/cat1.png');
  cats[2] = loadImage('assets/cat2.png');
  cats[3] = loadImage('assets/cat3.png');
  cats[4] = loadImage('assets/cat4.png');
  cats[5] = loadImage('assets/cat5.png');
  createCanvas(displayWidth, displayHeight);
  num = 0;
  intervalCurrentPosition(positionPing, 5000);
  places.push(new Place(40.50985450, -88.98914693, "Julian Hall 064", .02, cats[0])); // Starting area in Julian
  places.push(new Place(40.50931521, -88.98866339, "Rose's Office", .02, cats[1])); // Professor's office in Julian
  places.push(new Place(40.50979896, -88.98923233, "Electrical Room", .02, cats[2])); // Electrical Room of Julian
  places.push(new Place(40.50946499, -88.98911583, "Music Therapy Room", .02, cats[3])); // Music Therapy Room of Julian
  places.push(new Place(40.50978191, -88.98909065, "Storage Room", .02, cats[4])); // Storage Room of Julian
  places.push(new Place(40.50949390, -88.98887783, "Mechanical Room", .02, cats[5])); // Mechanical Room of Julian
}

function draw() {
  switch(state) {
    case 0:
      // Insert welcome image here
      break;
    case 1:
      // Insert directions image here
      break;
    case 2:
      // Insert riddles image here
      break;
  }
}

function positionPing(position) {
  textSize(24);
  num++;
  background(255);
  text("lat: " + position.latitude.toFixed(8), 10, 340);
  text("long: " + position.longitude.toFixed(8), 10, 390);
  text("number of updates: " + num, 10, 440);
  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

  for (var i = 0; i < places.length; i++) {
    if (places[i].fence.insideFence === true){
      places[i].display();
      break;
    }
  }
}

function Place(lat, long, desc, radius, catImage) {
  this.lat = lat;
  this.long = long;
  this.fence = false;
  this.desc = desc;
  this.radius = radius;
  this.fence = new geoFenceCircle(this.lat, this.long, this.radius); //sets geofence location to coordinates

  this.display = function() {
    image(catImage, 10, 10);
    textSize(20);
    text("You are at " + this.desc, 10, 240);
  }
}