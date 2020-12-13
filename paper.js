class Paper {
    constructor(){
        var options = {
            restitution : 0.3,
            isStatic : false,
            friction : 0.5,
            density : 1.2
        }
        this.image = loadImage("sprites/paper.png");
        this.body = Bodies.circle(200, 500, 20, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        fill("cyan");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50, 50);
    }
}