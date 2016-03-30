
var dataLength = data.length;
var dataArr = [];
var dataArrLength = dataArr.length;
var hit = false;

var Adata = function(){
  this.x=20;
  this.y=20;
  this.width=50;
  this.height=50;
  this.color='pink';
  
this.renderRect = function(x) {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  };  
  
this.render = function(iterator) {
    var x = iterator * 10;
    this.renderRect(x);
    
  }  
  
  
}

function setup() {

   for (var i = 0; i < dataLength; i++) {
    dataArr.push(new Adata(data[i]));
  }
  createCanvas(500,500);
  dataArrLength = dataArr.length;
}

function draw() {
  background(10);
  
for (var i = 0; i < dataArrLength; i++){
    dataArr[i].render(i);
  }

 
 
    
}