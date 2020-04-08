const { Bodies, Body, Engine, World, Constraint, Mouse, MouseConstraint } = Matter;
var engine, world;
var term1, floor;
var window1, window2, window3, window4;
var slingshot, mCons;
var gameState = "shoot";
var timesShot = 3;

function setup() {
    var canvas = createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;
    term1 = new Term(120, 275);
    floor = new Ground();
    window1 = new Window(575, 225);
    window2 = new Window(650, 225);
    window3 = new Window(650, 300);
    window4 = new Window(575, 300);
    slingshot = new Cons(term1.body, { 'x': 120, 'y': 275 });

}

function draw() {
    Engine.update(engine);
    background(255, 255, 255);
    term1.display();
    floor.display();
    for (var i = 1; i < 5; i++) {
        eval("window" + i + ".display();")
        eval("window" + i + ".check();")
    }
    if (timesShot === 3) {
        image1 = loadImage('assets/gameover.png');
        image(image1, 400, 200, 225, 225);
        console.log("\n")
    }
    if (mouseIsPressed) {
        if (gameState == "shoot") {
            Body.setPosition(term1.body, { 'x': mouseX, 'y': mouseY });
        }
    }
    //console.log(mouseX, mouseY);
}


function mouseReleased() {
    console.log("test");
    slingshot.release();
    gameState = "shot";
}

function keyPressed() {
    if (keyCode === ENTER && gameState == "shot" && timesShot < 3) {
        Body.setPosition(term1.body, { 'x': 120, 'y': 275 });
        slingshot.attach(term1.body);
        gameState = "shoot";
        timesShot += 1;
        console.log(timesShot)
    }
}