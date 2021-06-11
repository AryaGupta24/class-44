var bg1
var ease, med, dif;
function preload(){
    bg1 = loadImage("back.png");
    ease = loadImage("easy.png");
    med = loadImage("medium.png");
    dif = loadImage("difficult.png")
}

function setup(){
    createCanvas(windowWidth-10, windowHeight-10);
}

function draw(){
   background(bg1);
   textSize(60)
   fill("white")
   stroke(0)
   strokeWeight(10)
   text("MAZE RUNNER", windowWidth/2-250, 100 )
   fill("black")
   stroke(0 , 255, 255)
   strokeWeight(10)
   text("WELCOME! To The Maze Runner Game", windowWidth/2-550, 200 )
   textSize(40)
   fill("white")
   stroke(0)
   strokeWeight(10)
   text("Choose Level", windowWidth/2-140, windowHeight/2 )
}