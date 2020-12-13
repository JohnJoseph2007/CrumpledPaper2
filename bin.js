class Bin {
    constructor(x, y, height, width){
        this.body = Bodies.rectangle(x, y, height, width, {restitution : 0, isStatic : true});
        this.image = loadImage("sprites/bin.png");
        World.add(world, this.body);
        this.h = height;
        this.w = width;
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        stroke("white");
        fill("white");
        rect(pos.x, pos.y, this.h, this.w);
        imageMode(CORNERS)
        image(this.image, 515, 300, 735, 540);
    }
}