class Bubble1{
    constructor(){
      this.x = width/2;
      this.y = height/2;
      this.r = 1;
      this.angle = random(-1,1);
      this.color = color('red');
      this.v = random([-5,-4,-3,3,4,5]);
      this.diameter = 50;
    
    }
    
    move(){
      this.x = (width/2) + (this.r*(sqrt(1-(this.angle*this.angle))));
      this.y = (height/2) + (this.r*this.angle);
      this.r = this.r+this.v;
  
    }
    
    clicked()
    {
      let d = dist(mouseX,mouseY,this.x,this.y);
      if(d < (this.diameter/2))
      {
        return true;
      }
      return false;
    }
  
    show(){
      stroke(this.color);
      strokeWeight(4);
      fill(190);
      ellipse(this.x,this.y,this.diameter,this.diameter);
    }
  
}

class Bubble2{
    constructor(){
      this.x = width/2;
      this.y = height/2;
      this.r = 1;
      this.angle = random(-1,1);
      this.color = color('blue');
      this.v = random(-10,10);
      this.diameter = 50;
    }
    
    move(){
      this.x = (width/2) + (this.r*(sqrt(1-(this.angle*this.angle))));
      this.y = (height/2) + (this.r*this.angle);
      this.r = this.r+this.v;
  
    }
    
    clicked()
    {
      let d = dist(mouseX,mouseY,this.x,this.y);
      if(d < (this.diameter/2))
      {
        return true;
      }
      return false;
    }
  
    show(){
      stroke(this.color);
      strokeWeight(4);
      fill(190);
      ellipse(this.x,this.y,this.diameter,this.diameter);
    }
}