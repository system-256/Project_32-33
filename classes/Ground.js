class Ground {
    constructor() {
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(400, 375, 800, 10, options);
        World.add(world, this.body)
    }

    display() {
        var pos = this.body.position;
        fill('green');
        rectMode(CENTER);
        rect(pos.x, pos.y, 800, 10);
        push();
        pop();
    }
}