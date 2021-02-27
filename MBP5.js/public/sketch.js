let bg;
let bubble1 = [ ], bubble2 = [ ];
let i = 0,j = 0, ind = 0;
let flag = true, flag2 = false;
let ar = [ ];

function setup() {
  bg = loadImage('assets/bgwh.png');
  createCanvas(1080, 720);
  for(let i = 0; i<20; i++)
  {
    bubble1.push(new Bubble1());
  }
  for(let i = 0; i<20; i++)
  {
    bubble2.push(new Bubble2());
  }
  for(let i = 0; i<20; i++)
  {
    ar.push(false);
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
    stroke(255);
    fill(0, 100, 100);
    let t = 'Question '+ind+': \nPress M if the next statement is a myth according to you, Press F if it feels like a Fact\n';
    textAlign(CENTER);
    text(t,(width/2),(height/2));
    fill(color('brown'));
    text(' Spraying alcohol instead of sanitiser will be effective in killing coronavirus',(width/2),(height/2)+100);
  }
  else if(ar[ind] && ind == 1)
  {
    flag2 = true;
    stroke(255);
    fill(0, 100, 100);
    let t = 'Question '+ind+': \nPress M if the next statement is a myth according to you, Press F if it feels like a Fact\n';
    textAlign(CENTER);
    text(t,(width/2),(height/2));
    fill(color('brown'));
    text(' The world has been aware of climate change since the IPCC (Intergovernmental Panel on Climate Change) formed in 1988.',(width/2),(height/2)+100);
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
  if(flag2)
  {
    ind = ind + 1;
    flag2 = false;
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

