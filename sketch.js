//1. Put 3 shapes on the screen; when you mouse over them they change color
//2. Refactor so you pass the same objects into both the function that renders and detects hits

var myRect =function(){
    this.x=20;
    this.y=20;
    this.width=50;
    this.height=50;
    this.color="aliceBlue"
    
    this.renderRect=function(){
      fill(color);
      rect(this.x,this.y,this.width,this.height);
    };
    
    this.isMouseOnRect=function(){
      if(collidePointRect(mouseX,mouseY,this.x,this.y,this.width,this.height)){
        this.color="#333"
      }
    }

function setup() {
  createCanvas(700, 700);
  }
}

function draw() {
  ellipse
}