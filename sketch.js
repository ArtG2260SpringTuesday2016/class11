var data = myData

function draw(){
  createCanvas(600,700);
    for (var i=0; i < data.length; i++){
      var xPosn = 70*(i);
      var yPosn = 700;
      var rectWidth = 45;
      var rectHeight= -data[i]*13;
      var colors = collidePointRect(mouseX,mouseY,xPosn,yPosn + rectHeight,rectWidth, rectHeight);
        if(colors){
            fill(0)
          }else{
            fill(120,50,20);
          }
  noStroke();
  rect(xPosn, yPosn, rectWidth, rectHeight);
  }
}
