function setup() {
  createCanvas(600,600)
  
  myRect:
  this.x = 120;
  this.y = 60;
  this.width = 100;
  this.height = 100;
  this.color = 'orange';


}

function draw() {
  var check = collidePointCircle(mouseX, mouseY, 50,50,80,80);
  if(check){
   fill('blue')
}else{
  fill('red')
}

  ellipse(50,50,80,80)

 check = collidePointRect(mouseX, mouseY, this.x,this.y,this.width,this.height);
  if(check){
   fill(this.color)
}else{
  fill('hotpink')
} 

  rect(this.x,this.y,this.width,this.height)
  
 check = collidePointTriangle(mouseX,mouseY, 300,200,350,300,250,300);
  if(check){
   fill('yellow')
}else{
  fill('green')
} 

  triangle(300,200,350,300,250,300)
   
  
  
}


