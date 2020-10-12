

function setup() {
  createCanvas(480,800);

  var particles = [];
  var plinkos = [];
  var divisions = [];

  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
}
var divisionHeight=300;

function draw() {
  background(255,255,255);  
  drawSprites();
}