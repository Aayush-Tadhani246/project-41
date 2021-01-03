class Drops{
    constructor(x,y){
        var options ={
            isStatic:false,
            'restitution': 0.3, 
            'friction': 0.1, 
            'density': 0.3,
        }
       // console.log(Bodies.circle(x,y,radius/2,options));
        this.drop = Bodies.circle(x,y,10,options);
        this.x = x;
        this.y = y;
        
        World.add(world, this.drop);
    }

    display(){
        var pos = this.drop.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("blue")
        ellipse(0,0, 10,10);
        pop();
         if(this.drop.position.y> height){
             Matter.Body.setPosition(this.drop,{x: random(0,400), y: random(0,400)})
         }
    }
}
