let x,y;
let x2,y2;
let score;
let diam;
let r,g,b
let mlt;
let check;
let timer;

function setup() {
  createCanvas(500, 500);
  
  //Initializing Variables
  x = width/2
  y = height/2
  x2=0;
  y2=0;
  score=0
  diam = 80
  r=30
  g=50
  b=120
  mlt=1
  noStroke();
  check = false;
  timer = 0;
  
  //Text Formatting
  textAlign(CENTER)
  textSize(30)
}

function draw() {
  background(220);
  
  //Displaying circle and the text
  fill(r,g,b)
  circle(x,y,diam)
  fill("rgb(7,7,29)")
  text(score,width/2,50)
  
  if(check == true){
    diam-=4;
    
  }
   if(diam < 7){
    x = lerp(x,x2,0.1)
    y = lerp(y,y2,0.1) 
    check = false
    }
  
  if(round(x)===round(x2) && round(y) === round(y2)){
    if(diam<80){
      diam+=5
    }
  }
  
  
  timer++;
  if(timer>150){
    x2 = random(80, 420);
    y2 = random(80, 420);
    check = true;
    timer = 0;
  }
}

function mousePressed(){
  let d = dist(x,y,mouseX,mouseY);
  
  if(d < diam/2){
    score++
    check = true;
    x2 = random(80, 420);
    y2 = random(80, 420);
    timer = 0;
  }
  
  //changes the color after a certain number of clicks
  if(score%mlt==0){
    r=random(200);
    g=random(200);
    b=random(200);
    
    //increases the # of clicks for the color to change
    mlt++
    mlt=score+mlt
  }
  
  console.log(mlt + " , " + score)
}