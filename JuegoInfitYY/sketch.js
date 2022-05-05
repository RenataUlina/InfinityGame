var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var points=0;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Fondo en movimiento
garden=createSprite(200,200);
garden.addImage(gardenImg);


//crea al niño que corre
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // niño corriendo en el eje-x con el ratón
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  drawSprites();

  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 50 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    }else {
      createRed();
    }
  }
if (rabbit.isTouching(apple)||rabbit.isTouchingo(rangeL)||rabbit.isTouching(redL)){
  apple.destroy();
orangeL.destroy();
redL.destroy();
}


}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 4;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.07;
orangeL.velocityY = 4;
orangeL.lifetime = 150;
  
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.07;
redL.velocityY = 4;
redL.lifetime = 150;
}
