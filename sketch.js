function setup() {
  createCanvas(500,500);
  
}

  var hit = false;
  var posnx = 100;
  var posny = 100;
  var height1 = 100;
  var width1 = 100;

function draw() {
  background('#333');
 
  for (var i=0; i < hit.length; i++){
    var change = collidePointRect(mouseX,mouseY,posnx,posny,height1,width1);
      if (change){
        fill('red')}
      else{
        fill('blue')}
  }
    rect(posnx,posny,height1,width1);
 print("colliding? " + hit);
}
    
  


