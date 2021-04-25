class Stone {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      restitution: 0,
      friction: 1,
      density: 1.2
    }

    this.x = x
    this.y = y
    this.radius = radius;

    this.body = Bodies.circle(this.x, this.y, this.radius / 2, options);
    // this.radius = radius;
    this.image = loadImage("stone.png");
    World.add(world, this.body);
  }


  display() {
    /*push();
    translate(this.body.position.x,this.body.position.y);
  imageMode(CENTER);

image(this.image,0,0,this.radius*2,this.radius*2);
pop();*/

    var stonepos = this.body.position;
    push()
    translate(stonepos.x, stonepos.y);
    // rectMode(CENTER)
    // rotate(this.body.angle)
    fill(255, 0, 255)
    imageMode(CENTER);
    ellipseMode(RADIUS)
    image(this.image, 0, 0, this.radius * 2, this.radius * 2)
    pop()
  }
}