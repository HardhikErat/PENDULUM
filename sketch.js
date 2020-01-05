var r = 180;
var angle = 0;
var velocity = 0;
var acceleration = 0;
var gravity = 0.8;
var origin;
var bob;

function setup(){
  frameRate(60);
  createCanvas(480, 480);
  background(50);
  origin = createVector(0, 0);
  bob = createVector(0, 0);
  angle = PI / 180 * random(10, 90);
}

function draw(){
  background(100);
  translate(width/2, 200);
  strokeWeight(3);
  
  acceleration = -(gravity/r * sin(angle));
  velocity += acceleration;
  angle += velocity;
    
  velocity *= 1;
  
  bob.set(r * sin(angle), r * cos(angle));
  
  fill(255);
  line(0, 0, bob.x, bob.y);
  ellipse(bob.x, bob.y, 24, 24);

}