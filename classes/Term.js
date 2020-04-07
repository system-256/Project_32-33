class Term {
    constructor(x, y) {
        var options = {
            'friction': 0.5,
            'density': 3
        }
        this.body = Bodies.rectangle(x, y, 75, 75, options);
        World.add(world, this.body);
        this.width = 75;
        this.height = 75;
        this.image = loadImage('assets/terminal.png')
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        push();
        pop();
    }
}