var myCircle = function(posX,posY,width,height,color){
  this.posX = 100;
  this.posY = 100;
  this.width = 100;
  this.height = 100;
  this.color = "lightpink";
};

this.renderCircle = function(myCircle){
  ellipse(this.posX,this.posY,this.width,this.height);
};


var mySquare = function(posX,posY,width,height,color){
  this.posX = 300;
  this.posX = 300;
  this.width = 100;
  this.height = 100;
  this.color = "lightpurple";
};

this.renderSquare = function(mySquare){
  rect(this.posX,this.posY,this.width,this.height);
};

var myTriangle = function(x1,y1,x2,y2,x3,y3,color){
  this.x1 = 500;
  this.y1 = 500;
  this.x2 = 450;
  this.y2 = 450;
  this.x3 = 550;
  this.y3 = 550;
  this.color = "lightgrey";
};

this.renderTriangle = function(myTriangle){
  triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
};

function setup() {
  createCanvas(600,600);
}

function draw() {
  background("lightblue");
  
  this.renderCircle(myCircle);
  this.renderSquare(mySquare);
  this.renderTriangle(myTriangle);

}