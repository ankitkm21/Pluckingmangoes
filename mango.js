class Mango {
    constructor(x,y,radius){
        var options = {
            isStatic:true,
            restitution: 0,
            friction: 1,
        }

    this.body = Bodies.circle(x, y, radius/2, options);
    this.radius = radius;
    this.image = loadImage("mango.png");


    World.add(world, this.body);
        }
      display(){
    //imageMode(CENTER);
    
    
    //image(this.image,this.body.position.x, this.body.position.y,70,70)
    var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.radius, this.radius  )
		pop()
      }
      }