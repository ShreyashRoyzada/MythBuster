let bg,bgim;
let bubble1 = [ ], bubble2 = [ ];
let i = 0,j = 0, ind = 0,n = 0,bgx = 0, pno = 1,a = 1;
let flag = true, flag2 = false,mflag = false,correct = false,gamefinished = false,check = false;
let ar = [ ];
let im = [ ];
let score = 0,scoreB = 0;
var socket;

function setup() {
  bg = loadImage('assets/bg.png');
  bgim = loadImage('assets/bgloop.png');
  createCanvas(1024, 650);  //Can be improved to be responsive
  socket = io.connect();
  socket.on('scoreout',conn);
  socket.on('NoOfClients',ping);
  
  // socket.on('disconnect', function() { pno--; });
  
  for(let i = 0; i<50; i++)
  {
    bubble1.push(new Bubble1());
  }
  for(let i = 0; i<50; i++)
  {
    bubble2.push(new Bubble2());
  }
  for(let i = 0; i<10; i++)
  {
    ar.push(false);
  }
  for(let i = 1; i<=30; i++)
  {
    im.push(loadImage('assets/slides/'+i+'.jpg'));
    
  }
}

function draw() {
  back();
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
      back();
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
      back();
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
      back();
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
      back();
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
      back();
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
      back();
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
      back();
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
      back();
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
      back();
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
      back();
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

  if(!bubble1[i].IsInScreen()){
    i = i + 1;
  }
  if(!bubble2[j].IsInScreen()){
    j = j + 1;
  }
 
}

function ping(nc){
  pno = nc;
}

var num = 1, v = 0;

function conn(data){
  num = data[0];
  v = data[1];
}

function back()
{
  console.log(pno);
  
  image(bgim,bgx,0);
  image(bgim,bgx + bgim.width, 0);
  bgx = bgx - 1;
  if(bgx == (-bgim.width))
  {
    bgx=0;
  }
  var scoreo = score;
  var data = [pno, score] ;
  if(pno == 1){
    v = score;
  }
  socket.emit('score',data);
  while(a<=pno)
  {
  if(a == num){
    score = v;
  }

  let ys = "Player "+a+" - " + score;
  text(ys,width - 100, 20 * a);
  a++;
  }
  a = 1;
  score = scoreo;
  // text(os,width - 100, 40);
}

function keyPressed(){
  if(keyCode === LEFT_ARROW && !(check)) //Myth
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

  if(keyCode === RIGHT_ARROW && !(check)) //Fact
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
  console.log(mouseX,mouseY);
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

