// game main code

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  soundtrack.loop();
  soundtrack.setVolume(0.3);
}

function draw() {
  background(roadImg);

  displayScore();
  displayActor();
  displayCars();

  moveCars();
  resetCarsPositions();

  moveActor();
  checkCollision();
  checkActorCrossed();
}
