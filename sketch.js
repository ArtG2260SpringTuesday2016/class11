var data = [1,3,56,4,2,7,8,3,2,5,7,8,4,4,1,3,56,4,2,7,8,3,2,5,7,8,4,4,1,3,56,4,2,7,8,3,2,5,7,8,4,4];

function setup(){
createCanvas(1000,600);
}

function draw(){
for (var i=0; i < data.length; i++){

myRect=
  this.x = 20*(i+1);
  this.y = 550;
  this.width = 18;
  this.height = -data[i]*5;


  noStroke();
  

check = collidePointRect(mouseX,mouseY,this.x,this.y+this.height,this.width,-this.height);


	if(check){ //change color!
		fill('blue')
	}else{
		fill('hotpink');
	}


rect(this.x, this.y, this.width, this.height);


check = collidePointCircle(mouseX,mouseY,100,140,200,200);

if(check){ //change color!
		fill('blue')
	}else{
		fill('hotpink');
	}
	
	ellipse(100,140,200,200);
}
}