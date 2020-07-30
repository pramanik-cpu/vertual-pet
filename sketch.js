//Create variables here
var dog,happydog,database,foodS,foodStock,dogImg,happydogImg;
function preload()
{
  //load images here
  happydogImg=loadImage(dogImg1.png);
  dogimg=loadImage(dogImg.png);
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(200,200);
  dog.addImage(dogImg);

  foodStock=database.ref('foog');
  foodStock.on("values",readStock);

}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStroke(foodS);
  dog.addImage(happydogImg);
}

  drawSprites();
  //add styles here
   fill("red");
   textSize(2);
   stroke(2);
}

function readStock(data){
  foodS=data.val();

}

function writeStroke(x){
  database.ref('/').update({
    food:x
  })
}

