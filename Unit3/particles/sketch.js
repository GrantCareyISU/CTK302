let bg;
let particles = [];

function preload() {
  bg = loadImage("assets/HAN_GREEDO.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bg);
  particles.push(new Particle());
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].display();
    particles[i].move();
    
    if(particles[i].opacity < 0) {
      particles.splice(i, 1);
    }
  }
  fill("black");
  text(particles.length, 40, 40);
}

class Particle {
  constructor() {
    this.pos = createVector(mouseX, mouseY);
    this.vel = createVector(random(-0.3, 0.3), random(-1, -5));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.opacity = random(255);
  }

  display() {
    fill(this.r, this.g, this.b, this.opacity);
    textSize(32);
    text("HAN SHOT FIRST!", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    this.opacity -= 3;
  }
}
