const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var maxDrops = 100 
drops = []

function preload(){
    lightning = loadAnimation("LI/1.png", "LI/2.png", "LI/3.png", "LI/4.png");    
}

function setup(){
    createCanvas(400, 600);
    
    engine = Engine.create();
	world = engine.world;

    umbrella = new Umbrella(200,470,50)
     for (var i=0; i<maxDrops; i++){
         drops.push(new Drops(random(0,400), random(0,400)));
     }
    
  
    Engine.run(engine);
}

function draw(){
    background(0,0,0);
    umbrella.display();
    for (var i=0; i<maxDrops; i++){
        drops[i].display();
    }
   LiGhTiNg();
   

  drawSprites();      
}   
 function LiGhTiNg(){
if (frameCount%200===0){
    LIGHTNING = createSprite(200,2,50,50);
    LIGHTNING.addAnimation("strike",lightning);
}
if (frameCount%280===0){
   
    LIGHTNING.destroy()
} 
}