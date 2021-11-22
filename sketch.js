var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground,player;
var invisibleGround,zombie;
var zombieImg,bg,boy,skullImg,handImg,deadImg,bg2,coinImg;
var gameOverImg,restartImg;

var handGroup,coinsGroup,skullGroup;
var gameOver,restart,score;

var point,point2,bgm,growl;

function preload(){
    bg=loadImage("images/Cartoon_Forest_BG_03.png");
    boy=loadAnimation("images/PC_AttackSwing1.png");
    boy=loadAnimation("images/knight/sprite_0.png","images/knight/sprite_1.png","images/knight/sprite_2.png","images/knight/sprite_3.png","images/knight/sprite_4.png", "images/knight/sprite_5.png", "images/knight/s03.png","images/knight/s13.png")
  
   
  

    monster6Img=loadAnimation("images/monster6/s1.png","images/monster6/s2.png","images/monster6/s3.png","images/monster6/s5.png","images/monster6/s6.png","images/monster6/s7.png");
    monster10Img=loadAnimation("images/monster10/a1.png","images/monster10/a2.png","images/monster10/a3.png","images/monster10/a4.png","images/monster10/a5.png","images/monster10/a6.png","images/monster10/a7.png","images/monster10/a8.png",);
monster8Img=loadAnimation("images/monster8/b1.png","images/monster8/b2.png","images/monster8/b3.png",);  

     

}

function setup(){
    createCanvas(800,500);
    ground = createSprite(500,-120,0,0);
    ground.scale = 1.4;
    ground.x = ground.width/2;
    ground.velocityX = -4;
    ground.addImage(bg);

    invisibleGround = createSprite(400,470,800,10);
    invisibleGround.visible = false;

    player = createSprite(250,460,20,100);
    player.addAnimation("a",boy);
    player.scale = 0.2
   // player.debug=true;
    player.setCollider("circle",0,0,500);

    invisibleGround = createSprite(400,480,800,10);
    invisibleGround.visible = false;

   
}

function draw(){

    background("black");

    player.velocityY = player.velocityY+0.8;

    if(gameState === PLAY){
      
      if(ground.x<80){
        ground.x=ground.width/2;
        }
    if(keyDown("space")&& player.y>=220){
        player.velocityY = -10;


    }
    spawnMonster10()
    spawnMonster8()
    }


    player.collide(invisibleGround);

drawSprites()
    
}

function spawnMonster10(){
    if(frameCount%100 === 0){
        var monster10 = createSprite(800,450,10,40);
    monster10.addAnimation("monster",monster10Img);
    monster10.scale=1
    monster10.velocityX=-6;
    }
}
function spawnMonster8(){
    if(frameCount%100 === 0){
        var monster8 = createSprite(random(0,800),random(0,500),10,40);
    monster8.addAnimation("monster8",monster8Img);
    monster8.scale=1
    monster8.velocityX=-6;
    }
}