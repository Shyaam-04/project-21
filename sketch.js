var box;
var block1, block2, block3, block4;
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    box = createSprite(random(20,750),500,30,30);
    box.velocityX = 5;
    box.velocityY = 3;
    box.shapeColor = "white";
    block1 = createSprite(30,590,180,10);
    block1.shapeColor = "green";
    block2 = createSprite(250,590,180,10);
    block2.shapeColor = "red";
    block3 = createSprite(480,590,180,10);
    block3.shapeColor = "blue";
    block4 = createSprite(700,590,180,10);
    block4.shapeColor = "orange";
    //block2 = createSprite()

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    music.play();
    edges = createEdgeSprites();
    box.bounceOff(edges);
    if(block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor = "green";
    }
    if(block2.isTouching(box)&& box.bounceOff(block2)){
        box.shapeColor = "red";
    }
    if(block3.isTouching(box)){
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = "blue";
        music.stop();
    }
    if(block4.isTouching(box)&&box.bounceOff(block4)){
        box.shapeColor = "orange";
    }


    //add condition to check if box touching surface and make it box
drawSprites();
}

