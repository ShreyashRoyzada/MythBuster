let bg;
let bubble1 = [ ], bubble2 = [ ];
let i = 0,j = 0;
let flag = true;

function setup() {
  bg = loadImage('assets/bgwh.png');
  createCanvas(500, 500);
  for(let i = 0; i<20; i++)
  {
    bubble1.push(new Bubble());
  }
  for(let i = 0; i<20; i++)
  {
    bubble2.push(new Bubble());
  }
}

function draw() {
  background(255);
  if(flag)
  {
    image(bg,((width/2)-(bg.width/2)),((height/2)-(bg.height/2)));
    textSize(20);
    
    let t = 'Click to Commence';
    textAlign(CENTER);
    text(t,(width/2),(height/2 + 200));
    fill(0, 100, 100);
  }
  else
  {
    
    bubble1[i].move();
    bubble1[i].show();
    bubble2[j].move();
    bubble2[j].show();
  }
  if(frameCount%200 == 0){
    i = i + 1;
    j = j + 1;
  }
}

function mouseClicked()
{
  flag = false;
}

function mousePressed()
{
  bubble1[i].clicked;
  bubble2[i].clicked;
}

class Bubble{
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.r = 1;
    this.angle = random(-1,1);
    let color = [0 , 255];
    this.v = random(-10,10);
    this.diameter = 25;
  }
  
  move(){
    this.x = (width/2) + (this.r*(sqrt(1-(this.angle*this.angle))));
    this.y = (height/2) + (this.r*this.angle);
    this.r = this.r+this.v;

  }
  
  clicked()
  {
    let d = dist(mouseX,mouseY,this.x,this.y);
    if(d < this.diameter/2)
    {
      console.log("Clicked on Bubble");
    }
  }

  show(){
    stroke(random(color));
    strokeWeight(4);
    fill(152);
    ellipse(this.x,this.y,this.diameter,this.diameter);
  }


}