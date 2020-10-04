class Paperball {
  constructor(x, y) {
    var options = {

        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2

    }
    this.body = Bodies.circle(x, y, 5, options, 5);
      
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("red");
    ellipse(0, 0, 15, 15);
    pop();
  }
}
