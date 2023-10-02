// define car properties
const carWidth = 40;
const carLength = 60;
let carsXCoords = [
    canvasWidth / 2,
    canvasWidth / 2,
    canvasWidth / 2,
    canvasWidth / 2,
    canvasWidth / 2,
    canvasWidth / 2,
];
let carsYCoords = [
    0.10 * canvasHeight,
    0.24 * canvasHeight,
    0.38 * canvasHeight,
    0.53 * canvasHeight,
    0.66 * canvasHeight,
    0.80 * canvasHeight,
];
let carsSpeeds = [4.0, 4.5, 5.0, -5.5, -5.0, -4.0];

function displayCars() {
    // for (let i = 0; i < carsImages.length; i++) {
    for (let i = 0; i < carsImages.length / 2; i++) {
        image(carsImages[i], carsXCoords[i], carsYCoords[i], carLength, carWidth);
    }
    scale(-1, 1);
    for (let i = carsImages.length / 2; i < carsImages.length; i++) {
        image(carsImages[i], -carsXCoords[i], carsYCoords[i], -carLength, carWidth);
    }
}

function moveCars() {
    for (let i = 0; i < carsImages.length; i++) {
        carsXCoords[i] -= carsSpeeds[i];
    }
}

function resetCarsPositions() {
    for (let i = 0; i < carsImages.length; i++) {
        if (carsSpeeds[i] > 0 &&
            carsXCoords[i] < -carLength) {
            carsXCoords[i] = width + carLength;
        }
        if (carsSpeeds[i] < 0 &&
            carsXCoords[i] > width) {
            carsXCoords[i] = -carLength;
        }
    }
}