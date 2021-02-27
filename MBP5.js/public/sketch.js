function setup() {
  createCanvas(400, 400);
  background(50);
}

function draw() {
  if(mousePressed() == true)
  {
    ellipse(mouseX,mouseY,60,60);
  }

}
