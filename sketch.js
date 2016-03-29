function setup() {
  createCanvas(600,600)
}

function draw() {
  var check = collidePointCircle(mouseX, mouseY, 50,50,80,80);
  if(check){
   fill('blue')
}else{
  fill('red')
}

  ellipse(50,50,80,80)

 check = collidePointRect(mouseX, mouseY, 120,60,100,100);
  if(check){
   fill('orange')
}else{
  fill('hotpink')
} 

  rect(120,60,100, 100)
  
 check = collidePointTriangle(mouseX,mouseY, 300,200,350,300,250,300);
  if(check){
   fill('yellow')
}else{
  fill('green')
} 

  triangle(300,200,350,300,250,300)
   
  
  
}


