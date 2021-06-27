class Spaceship{
    constructor(x,y,width,height){
        var options = {
        'isStatic': true,
  
        }
        this.body = Bodies.rectangle(x, y, width, height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("spaceship1.png");
    }
    display(){
     
        var pos = this.body.position
        if(keyDown('up'))
        {
     pos.y=pos.y - 10;
        }
        if(keyDown('down'))
        {
            pos.y = pos.y + 10;
        }
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}