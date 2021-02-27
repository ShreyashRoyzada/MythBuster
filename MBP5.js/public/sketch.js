let bg;
let bubble1 = [ ], bubble2 = [ ];
let i = 0,j = 0, ind = 0,n = 0;
let flag = true, flag2 = false,mflag = false,correct = false,gamefinished = false,check = false;
let ar = [ ];
let im = [ ];
let score = 0;

function setup() {
  bg = loadImage('assets/bgwh.png');
  createCanvas(1200, 650);
  for(let i = 0; i<50; i++)
  {
    bubble1.push(new Bubble1());
  }
  for(let i = 0; i<50; i++)
  {
    bubble2.push(new Bubble2());
  }
  for(let i = 0; i<20; i++)
  {
    ar.push(false);
  }
  for(let i = 1; i<=30; i++)
  {
    im.push(loadImage('assets/slides/'+i+'.jpg'));
    
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
  else if(ar[ind] && ind == 0)
  {

    flag2 = true;
    im[n].resize(630,450);
    image(im[n],200,0);
    // image(im[n+1],width/2,(height/2)+100);


    stroke(255);
    fill(0, 100, 100);
    let t = 'Question '+ind+': \nPress Left Arrow Key if the next statement is a myth according to you, Press Right Arrow key if it feels like a Fact\n';
    textAlign(CENTER);
    text(t,(width/2),(height/2)-300);
    

    if(mflag)
    {
      background(255);
      im[n+2].resize(910,650);
      image(im[n+2],(width/2) - (im[n+2].width/2),(height/2) - (im[n+2].height/2));
      if(correct)
      {
        fill(color('brown'));
        text('Correct Answer, Click to Continue',(width/2),(height/2)-250);
        
      }
      else{
        fill(color('brown'));
        text('Incorrect Answer, Click to Continue',(width/2),(height/2)-250);
      }
    }
  }
  else if(ar[ind] && ind == 1)
  {

    flag2 = true;
    im[n].resize(910,650);
    image(im[n],200,0);
    // image(im[n+1],width/2,(height/2)+100);


    stroke(255);
    fill(0, 100, 100);
    let t = 'Question '+ind+': \nPress Left Arrow Key if the next statement is a myth according to you, Press Right Arrow key if it feels like a Fact\n';
    textAlign(CENTER);
    text(t,(width/2),(height/2)-300);
    

    if(mflag)
    {
      background(255);
      im[n+2].resize(910,650);
      image(im[n+2],(width/2) - (im[n+2].width/2),(height/2) - (im[n+2].height/2));
      if(correct)
      {
        fill(color('brown'));
        text('Correct Answer, Click to Continue',(width/2),(height/2)-250);
        
      }
      else{
        fill(color('brown'));
        text('Incorrect Answer, Click to Continue',(width/2),(height/2)-250);
      }
    }
  }
  else if(ar[ind] && ind == 2)
  {

    flag2 = true;
    im[n].resize(910,650);
    image(im[n],200,0);
    // image(im[n+1],width/2,(height/2)+100);


    stroke(255);
    fill(0, 100, 100);
    let t = 'Question '+ind+': \nPress Left Arrow Key if the next statement is a myth according to you, Press Right Arrow key if it feels like a Fact\n';
    textAlign(CENTER);
    text(t,(width/2),(height/2)-300);
    

    if(mflag)
    {
      background(255);
      im[n+2].resize(910,650);
      image(im[n+2],(width/2) - (im[n+2].width/2),(height/2) - (im[n+2].height/2));
      if(correct)
      {
        fill(color('brown'));
        text('Correct Answer, Click to Continue',(width/2),(height/2)-250);
        
      }
      else{
        fill(color('brown'));
        text('Incorrect Answer, Click to Continue',(width/2),(height/2)-250);
      }
    }
  }
  else if(ar[ind] && ind == 3)
  {

    flag2 = true;
    im[n].resize(910,650);
    image(im[n],200,0);
    // image(im[n+1],width/2,(height/2)+100);


    stroke(255);
    fill(0, 100, 100);
    let t = 'Question '+ind+': \nPress Left Arrow Key if the next statement is a myth according to you, Press Right Arrow key if it feels like a Fact\n';
    textAlign(CENTER);
    text(t,(width/2),(height/2)-300);
    

    if(mflag)
    {
      background(255);
      im[n+2].resize(910,650);
      image(im[n+2],(width/2) - (im[n+2].width/2),(height/2) - (im[n+2].height/2));
      if(correct)
      {
        fill(color('brown'));
        text('Correct Answer, Click to Continue',(width/2),(height/2)-250);
        
      }
      else{
        fill(color('brown'));
        text('Incorrect Answer, Click to Continue',(width/2),(height/2)-250);
      }
    }
  }
  else if(ar[ind] && ind == 4)
  {

    flag2 = true;
    im[n].resize(910,650);
    image(im[n],200,0);
    // image(im[n+1],width/2,(height/2)+100);


    stroke(255);
    fill(0, 100, 100);
    let t = 'Question '+ind+': \nPress Left Arrow Key if the next statement is a myth according to you, Press Right Arrow key if it feels like a Fact\n';
    textAlign(CENTER);
    text(t,(width/2),(height/2)-300);
    

    if(mflag)
    {
      background(255);
      im[n+2].resize(910,650);
      image(im[n+2],(width/2) - (im[n+2].width/2),(height/2) - (im[n+2].height/2));
      if(correct)
      {
        fill(color('brown'));
        text('Correct Answer, Click to Continue',(width/2),(height/2)-250);
        
      }
      else{
        fill(color('brown'));
        text('Incorrect Answer, Click to Continue',(width/2),(height/2)-250);
      }
    }
  }
  else if(ar[ind] && ind == 5)
  {

    flag2 = true;
    im[n].resize(910,650);
    image(im[n],200,0);
    // image(im[n+1],width/2,(height/2)+100);


    stroke(255);
    fill(0, 100, 100);
    let t = 'Question '+ind+': \nPress Left Arrow Key if the next statement is a myth according to you, Press Right Arrow key if it feels like a Fact\n';
    textAlign(CENTER);
    text(t,(width/2),(height/2)-300);
    

    if(mflag)
    {
      background(255);
      im[n+2].resize(910,650);
      image(im[n+2],(width/2) - (im[n+2].width/2),(height/2) - (im[n+2].height/2));
      if(correct)
      {
        fill(color('brown'));
        text('Correct Answer, Click to Continue',(width/2),(height/2)-250);
        
      }
      else{
        fill(color('brown'));
        text('Incorrect Answer, Click to Continue',(width/2),(height/2)-250);
      }
    }
  }
  else if(ar[ind] && ind == 6)
  {

    flag2 = true;
    im[n].resize(910,650);
    image(im[n],200,0);
    // image(im[n+1],width/2,(height/2)+100);


    stroke(255);
    fill(0, 100, 100);
    let t = 'Question '+ind+': \nPress Left Arrow Key if the next statement is a myth according to you, Press Right Arrow key if it feels like a Fact\n';
    textAlign(CENTER);
    text(t,(width/2),(height/2)-300);
    

    if(mflag)
    {
      background(255);
      im[n+2].resize(910,650);
      image(im[n+2],(width/2) - (im[n+2].width/2),(height/2) - (im[n+2].height/2));
      if(correct)
      {
        fill(color('brown'));
        text('Correct Answer, Click to Continue',(width/2),(height/2)-250);
        
      }
      else{
        fill(color('brown'));
        text('Incorrect Answer, Click to Continue',(width/2),(height/2)-250);
      }
    }
  }
  else if(ar[ind] && ind == 7)
  {

    flag2 = true;
    im[n].resize(910,650);
    image(im[n],200,0);
    // image(im[n+1],width/2,(height/2)+100);


    stroke(255);
    fill(0, 100, 100);
    let t = 'Question '+ind+': \nPress Left Arrow Key if the next statement is a myth according to you, Press Right Arrow key if it feels like a Fact\n';
    textAlign(CENTER);
    text(t,(width/2),(height/2)-300);
    

    if(mflag)
    {
      background(255);
      im[n+2].resize(910,650);
      image(im[n+2],(width/2) - (im[n+2].width/2),(height/2) - (im[n+2].height/2));
      if(correct)
      {
        fill(color('brown'));
        text('Correct Answer, Click to Continue',(width/2),(height/2)-250);
        
      }
      else{
        fill(color('brown'));
        text('Incorrect Answer, Click to Continue',(width/2),(height/2)-250);
      }
    }
  }
  else if(ar[ind] && ind == 8)
  {

    flag2 = true;
    im[n].resize(910,650);
    image(im[n],200,0);
    // image(im[n+1],width/2,(height/2)+100);


    stroke(255);
    fill(0, 100, 100);
    let t = 'Question '+ind+': \nPress Left Arrow Key if the next statement is a myth according to you, Press Right Arrow key if it feels like a Fact\n';
    textAlign(CENTER);
    text(t,(width/2),(height/2)-300);
    

    if(mflag)
    {
      background(255);
      im[n+2].resize(910,650);
      image(im[n+2],(width/2) - (im[n+2].width/2),(height/2) - (im[n+2].height/2));
      if(correct)
      {
        fill(color('brown'));
        text('Correct Answer, Click to Continue',(width/2),(height/2)-250);
        
      }
      else{
        fill(color('brown'));
        text('Incorrect Answer, Click to Continue',(width/2),(height/2)-250);
      }
    }
  }
  else if(ar[ind] && ind == 9)
  {

    flag2 = true;
    im[n].resize(910,650);
    image(im[n],200,0);
    // image(im[n+1],width/2,(height/2)+100);


    stroke(255);
    fill(0, 100, 100);
    let t = 'Question '+ind+': \nPress Left Arrow Key if the next statement is a myth according to you, Press Right Arrow key if it feels like a Fact\n';
    textAlign(CENTER);
    text(t,(width/2),(height/2)-300);
    

    if(mflag)
    {
      background(255);
      im[n+2].resize(910,650);
      image(im[n+2],(width/2) - (im[n+2].width/2),(height/2) - (im[n+2].height/2));
      if(correct)
      {
        fill(color('brown'));
        text('Correct Answer, Click to Continue',(width/2),(height/2)-250);
        
      }
      else{
        fill(color('brown'));
        text('Incorrect Answer, Click to Continue',(width/2),(height/2)-250);
      }
    }
  }
  else if(ind == 10)
  {
    image(bg,((width/2)-(bg.width/2)),((height/2)-(bg.height/2)));
    textSize(20);
    
    let t = 'Your Score is - '+score+' out of 10\n Click to play again';
    textAlign(CENTER);
    text(t,(width/2),(height/2 + 200));
    fill(0, 100, 100);
    gamefinished = true;
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

function keyPressed(){
  if(keyCode === LEFT_ARROW) //Myth
  {
    mflag = true;
    check = true;
    //right answers
    if(ind == 0 || ind == 1 || ind == 3 || ind == 8)
    {
      correct = true;
      score = score + 1;
    }
  }

  if(keyCode === RIGHT_ARROW) //Fact
  {
    mflag = true;
    check = true;
    //right answers
    if(ind == 2 || ind == 4 || ind == 5 || ind == 6 || ind == 7 || ind == 9)
    {
      correct = true;
      score = score + 1;
    }
  }
}
function mouseClicked()
{
  flag = false;

  if(gamefinished)
  {
    ind = 0;
    n = 0;
    gamefinished = false;
    flag = true;
    flag2 = false;
    mflag = false;
    correct = false;
    check = false;
    for(let i = 0; i<ar.length; i++)
    {
      ar[i] = false;
    }
  }
  if(flag2 && check)
  {
    n = n + 3;
    ind = ind + 1;
    flag2 = false;
    mflag = false;
    correct = false;
    check = false;
  }

  if(bubble1[i].clicked())
  {
    ar[ind] = true;
  }
  
  if(bubble2[j].clicked())
  {
    ar[ind] = true;
  }
}

