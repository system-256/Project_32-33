class Cons {
    constructor(bodyA, pointB) {
        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'length': 3,
            'stiffness': 0.07
        }
        this.cons = Constraint.create(options);
        World.add(world, this.cons);
    }

    display() {
        var pos1 = bodyA.position;
        var pos2 = this.secondPoint;
        stroke('black');
        line(pos1.x, pos1.y, pos2.x, pos2.y);
        push();
        pop();
    }

    attach(body) {
        this.cons.bodyA = body;
    }

    release() {
        this.cons.bodyA = null;
    }
}