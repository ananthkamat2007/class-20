
var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedRect= createSprite(100,200,50,100);
 movingRect = createSprite(500,200,100,50);
 movingRect.shapeColor="green";
 fixedRect.shapeColor="green";
 movingRect.debug=true;
 fixedRect.debug=true;
  movingRect.velocityX= -3;
  fixedRect.velocityX=3;

}

function draw() {
  background(255,255,255);  
  // movingRect.x= mouseX;
  // movingRect.y=mouseY;

  //console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 ){
    // movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    // fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    
      // movingRect.shapeColor="red";
      // fixedRect.shapeColor="red";
      movingRect.velocityX =  movingRect.velocityX * (-1);
      fixedRect.velocityX =  fixedRect.velocityX * (-1);


    }
    // else{
    //   movingRect.shapeColor="green";
    //   fixedRect.shapeColor="green";

    // }
  drawSprites();
}