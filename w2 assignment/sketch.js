//circle 1 variables
let x1,y1,d1;

//circle 2 variables
let x2,y2,d2;

//circel 3 variables
let x3, y3, d3;


function setup() {
  createCanvas(400, 400);
  
  //circle 1 postiion
  x1=0;
  y1=height/2;
  d1=50;

  //circle 2 position
  x2=400;
  y2=height/1.5;
  d2=50;

  //circle 3 position
  x3=400;
  y3=height/4;
  d3=50;
}

function draw() {
  background(0);
// circle 1: once x runs off the edge, it will become 0  
  if(x1>width){
    x1=0;
  }
  
  if(x2<0){
    x2=400;
  }

  if(x1<width/2){
    fill('yellow');
  }

  else{
    fill('red');
  }
  circle(x1,y1,d1);

  //circle 1 moves to the right
  x1+=1.7;

// circle 2: once x runs off the edge, it will become 400  
  if(x2<width/2){
    fill('yellow');
  }

  else{
    fill('green');
  }
  circle(x2,y2,d2);
  
  //circle 2 moves to the left
  x2-=2;

//circle 3: same as circle 1
 if(x3<0){
    x3=400;
  }

  if(x3<width/2){
    fill('blue');
  }

  else{
    fill('red');
  }
  circle(x3,y3,d3);

  //circle 3 moves to the left
  x3-=3; if(x3>width){
  }
}