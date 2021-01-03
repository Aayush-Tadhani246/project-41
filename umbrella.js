class Umbrella{
    constructor(x,y,radius){
        var options ={
            isStatic:true,
            'restitution': 0.3, 
            'friction': 0.5, 
            'density': 0.3,
        }
        this.image = loadImage("WI/walking_1.png");       
        this.body = Bodies.circle(x,y,radius/2,options);
        this.x = x;
        this.y = y;
        
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 300,300);
        pop();
    }
}
