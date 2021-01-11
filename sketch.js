var car;
var wall;

var speed, weight;
var deformation;


function setup() {
  createCanvas(1600, 400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(1500, 200, 60, height/2);
}

function draw() {
  background("black");

  if (car.collide(wall)) {
    deformation = (0.5 * weight * speed * speed)/22500;
  }

  if (deformation < 100) {
    car.shapeColor = "green";
  } else if (deformation > 100 && deformation < 180) {
    car.shapeColor = "yellow";
  } else if (deformation > 180) {
    car.shapeColor = "red";
  }

  drawSprites();
}