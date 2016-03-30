////1, change color shape
var Circle = function(name,x,y,size, fillColor) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.name = name;

  this.renderEllipse = function () {
    fill(fillColor)
    ellipse(this.x, this.y, this.size, this.size)
  }

  this.distanceToMouse = function() {
    return dist(mouseX, mouseY, this.x, this.y);
  }
}

var myCircle = new Circle("blue", 50,50,20, 'blue');
var myOtherCircle = new Circle("red", 200,200,20, 'red');
var myThirdCircle = new Circle("red", 300,300,20, 'yellow');
var myCircles = [myCircle, myOtherCircle, myThirdCircle];


function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(153);
  for (var i = 0; i < myCircles.length; i++) {
    myCircles[i].renderEllipse();
    if (i > 0) {
        if (myCircles[0].distanceToMouse() < 30){
         var redCircle = new Circle("blue",50,50,50,'green');
          redCircle.renderEllipse();
        }  
        if (myCircles[1].distanceToMouse() < 30){
          ellipse(200,200,50,50)
        }
        if (myCircles[2].distanceToMouse() < 30){
          ellipse(300,300,50,50)
        }
    }

  }
}
