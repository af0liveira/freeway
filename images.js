// define image variables
let roadImg;
let actorImg;
let carImg1;
let carImg2;
let carImg3;
let carImg4;
let carImg5;
let carImg6;
let carsImages;

// canvas properties
let canvasWidth = 600;
let canvasHeight = 400;

// sounds
let soundtrack;
let collisionSound;
let scoreSound;

function preload() {
    roadImg = loadImage("img/estrada.png");

    actorImg = loadImage("img/ator-1.png");

    carImg1 = loadImage("img/carro-1.png");
    carImg2 = loadImage("img/carro-2.png");
    carImg3 = loadImage("img/carro-3.png");
    carImg4 = loadImage("img/carro-2.png");
    carImg5 = loadImage("img/carro-3.png");
    carImg6 = loadImage("img/carro-1.png");
    carsImages = [carImg1, carImg2, carImg3, carImg4, carImg5, carImg6];

    soundtrack = loadSound("sound/trilha.mp3");
    collisionSound = loadSound("sound/colidiu.mp3");
    scoreSound = loadSound("sound/pontos.wav");
}