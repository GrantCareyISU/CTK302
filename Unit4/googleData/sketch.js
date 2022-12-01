var results = [];
let url = "";
let images = [];

function preload() {
  images[0] = loadImage("assets/elon.jpg");
  images[1] = loadImage("assets/morbin.jpeg");
  images[2] = loadImage("assets/rickroll.jpg");
  images[3] = loadImage("assets/datboi.png");
}

function setup() {
  let key = "10A2BDWsZ_qH5P8U6zk_x32hRv_1CuaxMzwZF-Dt4XXQ"; // this is KEY of the URL from the sheet
  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.
  loadJSON(url, gotData);
  createCanvas(1500, 700);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

function gotData(data) {
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    results.push(
      new FormData(
        data[i]["What is your name?"],
        data[i]["If two mind readers are reading each other's minds at the same time, whose mind is being read?"],
        data[i]["Favorite joke?"],
        data[i]["What is your favorite shape?"]));
  }
}

function draw() {
  background("blue");
  for (let i = 0; i < results.length; i++) {
    results[i].display();
  }
}

// my Bubble class
class FormData {
  constructor(name, psychic, joke, shape) {
    // only the order of these parameters matters!
    this.name = name;
    this.psychic = psychic;
    this.joke = joke;
    this.shape = shape;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("red");
    noFill();
    switch(this.shape) {
      case "Egg (circle)":
        ellipse(this.pos.x, this.pos.y+10, 120, 120);
        break;
      case "Spongebob (Square... duh)":
        rect(this.pos.x, this.pos.y+10, 120, 120);
        break;
      case "Illuminati (Pyramid/Triangle)":
        triangle(this.pos.x-120, this.pos.y+120, this.pos.x, this.pos.y-50, this.pos.x+120, this.pos.y+120);
        break;
    }
    switch(this.joke) {
      case "Elon Musk somehow making Twitter worse than it already was?":
        images[0].pos.x = this.pos.x;
        images[0].pos.y = this.pos.y;
        images[0].mask(this.shape);
        break;
    }
    fill("white");
    text(
      this.name + "\n" + this.psychic + "\n" + this.joke + "\n",
      this.pos.x,
      this.pos.y
    );
  }
}