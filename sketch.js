const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blowerMouth;
var button;

function setup() {
  var canvas = createCanvas(600, 700);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blowerMouth = new BlowerMouth(width / 2 + 70, height / 2 + 20, 100, 90);
  button = createButton("assopra");
  button.position(width / 2, height - 100);
  button.class("blowButton");

  button.mousePressed(blow);

}

function draw() {
  background(70);
  Engine.update(engine);

  ball.show();
  blowerMouth.show();
}

function blow() {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:0.05});
  
}

