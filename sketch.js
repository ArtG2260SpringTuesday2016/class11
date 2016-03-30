
var anarr = [];
var anarrcol = [];

fillRect = function(x){
  if(collidePointRect(mouseX, mouseY, x, x, x, x)){
  fill('black');
}
}
  
renderrect = function(x){
  fillRect(x)
rect(x, x, x, x)
}


function setup() {
  createCanvas(500, 500);
  background('blue');
  for (var i = 0; i < 15; i++){
    anarr.push(random(0, 255))
    anarrcol.push([random(0, 255),random(0, 255),random(0, 255)])
  }
  
  
  
  
  
  
}

function draw() {
  for (var i = 0; i < anarr.length; i++){
    fill(anarrcol[0, i], anarrcol[1, i], anarrcol[2, i]);
    renderrect(anarr[i]);
  }

}