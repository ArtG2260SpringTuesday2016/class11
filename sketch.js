var data = [1,3,56,4,2,7,8,3,2,5,7,8,4,4,1,3,56,4,2,7,8,3,2,5,7,8,4,4,1,3,56,4,2,7,8,3,2,5,7,8,4,4];

function setup(){
createCanvas(1000,600);
}

function draw(){

for (var i=0; i < data.length; i++){
  var xPosition = 20*(i+1);
  var yPosition = 550;
  var rectWidth = 18;
  var rectHeight= -data[i]*5;
  noStroke();
  

var check = collidePointRect(mouseX,mouseY,xPosition,yPosition+rectHeight,rectWidth,-rectHeight);


	if(check){ //change color!
		fill('blue')
	}else{
		fill('hotpink');
	}


rect(xPosition, yPosition, rectWidth, rectHeight);
}
}