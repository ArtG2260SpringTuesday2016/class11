//1. Put 3 shapes on the screen; when you mouse over them they change color
//2. Refactor so you pass the same objects into both the function that renders and detects hits

var hit=false;
var info=[10,20,60,5,10,8,13,10,19,13];


function setup() {
  createCanvas(900, 900);
}

function draw() {
  // var posnX=20;
  // var posnY=250;
  // var rectHeight=30;
  // var rectWidth=40;
  
  var spacing=10
  for(var i=0; i<info.length; i++){
    spacing+=50
    var dramaticHeight=info[i]*10
    strokeWeight(2);
    stroke(10,10,10);
    
    hit=collidePointRect(mouseX,mouseY,spacing,100,30,dramaticHeight)
    
    if(hit){
      fill(250,10,10);
    }else{
      fill(10,10,10);
    }
    rect(spacing,100,30,dramaticHeight);
  }
  
  
  
//  var collision {
//  if (collideCircleCircle(mouseX,mouseY,20,304,220,20){
//  }
  
  
  
}