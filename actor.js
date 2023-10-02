// define actor properties
const actorHeight = 28;
const actorWidth = 28;
const initialActorXCoord = (canvasWidth - actorWidth) / 2;
const initialActorYCoord = 0.96 * canvasHeight - actorHeight / 2;
let actorXCoord = initialActorXCoord;
let actorYCoord = initialActorYCoord;
let actorScore = 0;

// functions related to the actor
function displayActor() {
    image(actorImg, actorXCoord, actorYCoord, actorWidth, actorHeight);
}

function moveActor() {
    if (keyIsDown(UP_ARROW) &&
        actorYCoord > 0) {
        actorYCoord -= 3;
    }
    if (keyIsDown(DOWN_ARROW) &&
        actorYCoord + actorWidth < height) {
        actorYCoord += 3;
    }
    if (keyIsDown(LEFT_ARROW) &&
        actorXCoord > 0) {
        actorXCoord -= 3;
    }
    if (keyIsDown(RIGHT_ARROW) &&
        actorXCoord < width - actorWidth) {
        actorXCoord += 3;
    }
}

function checkCollision() {
    let actorXCenter = actorXCoord + actorWidth / 2;
    let actorYCenter = actorYCoord + actorHeight / 2;
    for (let i = 0; i < carsImages.length; i++) {
        collided = collideRectCircle(carsXCoords[i], carsYCoords[i], carLength, carWidth, actorXCenter, actorYCenter, actorHeight / 2);
        if (collided) {
            collisionSound.play();
            resetActorPosition();
            decreaseScore();
        }
    }
}

function checkActorCrossed() {
    actorCrossed = actorYCoord + actorHeight < 0.1 * height;
    if (actorCrossed) {
        incrementScore();
        scoreSound.play();
        resetActorPosition();
    }
}

function resetActorPosition() {
    actorXCoord = initialActorXCoord;
    actorYCoord = initialActorYCoord;
}

function displayScore() {
    let scoreTextSize = 25;
    textAlign(CENTER);
    textSize(scoreTextSize);
    fill(color(255, 255, 60));
    text(actorScore, width / 5, height / 10 - scoreTextSize / 2);
}

function incrementScore() {
    actorScore += 1;
}

function decreaseScore() {
    if (scoreNotEmpty()) {
        actorScore -= 1;
    }
}

function scoreNotEmpty() {
    return actorScore > 0;
}