class Window {
    constructor(x, y) {
        var options = {
            'friction': 3,
            'density': 1
        }
        this.body = Bodies.rectangle(x, y, 75, 75, options);
        World.add(world, this.body);
        this.width = 75;
        this.height = 75;
        this.image = loadImage('assets/windows.png');
    }

    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        push();
        pop();
    }
}