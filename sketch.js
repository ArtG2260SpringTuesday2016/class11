//CHANGE COLORS

var data = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];

function setup() {
  createCanvas(600,600);
}

function draw(){

for (var i=0; i < data.length; i++){
  var xPosn = 20*(i); //iterates rectangles
  //var xPosn = 20;
  var yPosn = 300; //position on the canvas
  var rectWidth = 30; 
  var rectHeight= data[i]*10;

  

  var changeColorz = collidePointRect(
    mouseX, 
    mouseY, 
    xPosn, 
    yPosn,
    rectWidth, 
    rectHeight); //when mouse touches rectangles 
  
  
  	if(changeColorz){ 
  		fill('black')
  	} else {
  		fill('#bada55');
  	}
  
  
  //rect(xPosn, yPosn, rectWidth, rectHeight);
  }
}