var link,linkPos,linkMov
var gameState,edges,life,score;
var bgImg,music,gameOver
var edges,b1,b2,b3,b4,b5,b6,b7,b8,b9;
var og1,og2,og3,og4;
var oui,odi,oli,ori;
var ldi,lui,lli,lri;
var lda,lua,lla,lra;
var lsd,lsu,lsl,lsr;
var lbd,lbu,lbl,lbr;
var arrowGroup,arrow,aru,ard,arl,arr;
var fiu,fid,fir,fil;
var fg1,fg2,fg3,fg4
var boomerang,arrowCount;
var horisword,vertisword,horishield,vertishield;
var num,num1
var lifeB,scoreB

function preload() {
  bgImg=loadImage("assets/bg.jpg")
  music=loadSound("assets/02 Overworld (1).mp3")
  gameOver=loadSound("assets/07 Game Over (1).mp3")

  boomy=loadAnimation("assets/boomerang.png")
  oui=loadAnimation("assets/u1.png","assets/u2.png")
  odi=loadAnimation("assets/d1.png","assets/d2.png")
  oli=loadAnimation("assets/l1.png","assets/l2.png")
  ori=loadAnimation("assets/r1.png","assets/r2.png")

  ldi=loadAnimation("assets/down.png")
  lui=loadAnimation("assets/up1.png")
  lri=loadAnimation("assets/rite2.png")
  lli=loadAnimation("assets/left2.png")

  lsd=loadAnimation("assets/dstab.png")
  lsu=loadAnimation("assets/ustab.png")
  lsr=loadAnimation("assets/rstab.png")
  lsl=loadAnimation("assets/lstab.png")

  lda=loadAnimation("assets/down1.png","assets/down.png")
  lua=loadAnimation("assets/up1.png","assets/up2.png")
  lra=loadAnimation("assets/rite2.png","assets/right2.png")
  lla=loadAnimation("assets/left1.png","assets/left2.png")
  hudImg=loadImage("assets/HUD.png")

  aru=loadAnimation("assets/uarrow.png")
  ard=loadAnimation("assets/darrow.png")
  arl=loadAnimation("assets/larrow.png")
  arr=loadAnimation("assets/rarrow.png")

  lbd=loadAnimation("assets/dair.png")
  lbu=loadAnimation("assets/uair.png")
  lbl=loadAnimation("assets/lair.png")
  lbr=loadAnimation("assets/rair.png")

  fiu=loadAnimation("assets/uflame1.png","assets/uflame2.png")
  fid=loadAnimation("assets/dflame1.png","assets/dflame2.png")
  fir=loadAnimation("assets/rflame1.png","assets/rflame2.png")
  fil=loadAnimation("assets/lflame1.png","assets/lflame2.png")

}

function setup(){
  createCanvas(600,600)

  bounceGroup=createGroup();
  shields=createGroup();
  aG=createGroup();
  fg1=createGroup();
  s1=createSprite(340,415,75,75)
  s2=createSprite(340,565,75,75)
  s3=createSprite(340,715,75,75)
  s4=createSprite(490,485,75,75)
  s5=createSprite(490,635,75,75)
  s6=createSprite(640,565,75,75)

  s7=createSprite(1840,565,75,75)
  s8=createSprite(1990,485,75,75)
  s9=createSprite(1990,635,75,75)
  s10=createSprite(2140,565,75,75)
  s11=createSprite(2140,415,75,75)
  s12=createSprite(2140,715,75,75)

  g1=createSprite(2370,630,75,75)

  t1=createSprite(900,450,150,150)
  t2=createSprite(1200,450,150,150)
  t3=createSprite(1500,450,150,150)
  t4=createSprite(975,675,150,150)
  t5=createSprite(1425,675,150,150)

  w1=createSprite(35,470,75,925)
  w2=createSprite(2400,250,150,675)
  w3=createSprite(2400,775,150,225)
  w4=createSprite(110,725,75,75)
  w5=createSprite(180,780,75,75)
  w6=createSprite(110,220,75,450)
  w7=createSprite(8865,265,17730,75)
  w8=createSprite(200,330,75,75)
  w9=createSprite(2430,865,6225,75)
  
  bounceGroup.add(s1)
  bounceGroup.add(s2)
  bounceGroup.add(s3)
  bounceGroup.add(s4)
  bounceGroup.add(s5)
  bounceGroup.add(s6)
  bounceGroup.add(s7)
  bounceGroup.add(s8)
  bounceGroup.add(s9)
  bounceGroup.add(s10)
  bounceGroup.add(s11)
  bounceGroup.add(s12)
  bounceGroup.add(g1)
  bounceGroup.add(t1)
  bounceGroup.add(t2)
  bounceGroup.add(t3)
  bounceGroup.add(t4)
  bounceGroup.add(t5)
  bounceGroup.add(w1)
  bounceGroup.add(w2)
  bounceGroup.add(w3)
  bounceGroup.add(w4)
  bounceGroup.add(w5)
  bounceGroup.add(w6)
  bounceGroup.add(w7)
  bounceGroup.add(w8)
  bounceGroup.add(w9)


  link=createSprite(800,800,10,10)
  link.addAnimation("down",ldi)
  link.addAnimation("up",lui)
  link.addAnimation("down2",lda)
  link.addAnimation("right",lri)
  link.addAnimation("left",lli)  
  link.addAnimation("right2",lra)
  link.addAnimation("up2",lua)
  link.addAnimation("left2",lla)
  link.addAnimation("sdown",lsd)
  link.addAnimation("sup",lsu)
  link.addAnimation("sleft",lsl)
  link.addAnimation("sright",lsr)
  link.addAnimation("adown",lbd)
  link.addAnimation("aup",lbu)
  link.addAnimation("aleft",lbl)
  link.addAnimation("aright",lbr)

  horisword=createSprite(-1000,-1000,10,30)
  vertisword=createSprite(-1000,-1000,30,10)
  horisword.visible=false
  vertisword.visible=false
  aG.add(horisword)
  aG.add(vertisword)
  horishield=createSprite(-1000,-1000,5,50)
  vertishield=createSprite(-1000,-1000,50,5)
  horishield.shapeColor="blue"
  vertishield.shapeColor="blue"
  shields.add(horishield)
  shields.add(vertishield)
  arrowCount=10
  life=3
  score=0
  linkPos="down"
  linkMov="still"
  camera.on()
  arrowGroup=new Group()
  okto1=new Enemy(175,550,4,0)
  okto2=new Enemy(1750,450,0,-4)
  okto3=new Enemy(1750,675,-4,0)
  okto4=new Enemy(2250,450,0,-4)
  okto5=new Enemy(1500,575,4,0)
  okto6=new Enemy(1375,450,0,-4)
  okto7=new Enemy(2250,750,0,-4)
  okto8=new Enemy(500,800,4,0)
  okto9=new Enemy(400,575,0,4)
  hud=createSprite(link.x,link.y+50,10,10)
  hud.addImage(hudImg)
  lifeB=createSprite(link.x+200,link.y+275,life*9,20)
  scoreB=createSprite(link.x+203,link.y+275,score*20,20)
  dongo=createSprite()
}
function draw(){
  background(0)
  image(bgImg,0,0,17730,4840)
  if(fg1.isTouching(link)&&frameCount%30===0){
    life=life-1
  }
  
  lifeB.destroy();
  lifeB=createSprite(link.x+203,link.y+234,life*9,20)
  lifeB.shapeColor="green"

  scoreB.destroy();
  scoreB=createSprite(link.x+203,link.y+291,score*20,20)
  scoreB.shapeColor="blue"

  dongo.destroy();
  dongo=createSprite(link.x+73,link.y+250,10,arrowCount*10)
  dongo.shapeColor="red"
  if(life!==0 &&score!==9){
  camera.x=link.x
  camera.y=link.y
  }
  if(life===0){
    camera.x=-2000
    camera.y=-2000
    link.destroy()
  }
  if(score===9){
    camera.x=-2100
    camera.y=-4000
    link.destroy()
  }
  push()
  fill(255)
  textSize(40)
  text("Game Over",-2100,-2000)
  text("You Win!",-2200,-4000)
  pop()

  if(life!==0||score!==9){

  if(arrowCount>10){arrowCount===10}
  if(life>20){life===20}
  hud.x=link.x
  hud.y=link.y+250

  bounceGroup.setVisibleEach(false)
  link.bounceOff(bounceGroup)
  //link.debug=true
  link.setCollider("rectangle",0,0,75,75)
  fg1.bounceOff(shields)
  linkMov="still"
  link.setVelocity(0,0)
  link.scale=0.5
  updateLink()
  

  
 
  if(keyDown("space")){text("x:"+mouseX+","+"y:"+mouseY,mouseX,mouseY)}
  if(keyDown(LEFT_ARROW)){linkMov="moving";linkPos="left";link.velocityX=-4;link.changeAnimation("left2",lla)}
  if(keyDown(DOWN_ARROW)){linkMov="moving";linkPos="down";link.velocityY=4;link.changeAnimation("down",lda)}
  if(keyDown(UP_ARROW)){linkMov="moving";linkPos="up";link.velocityY=-4;link.changeAnimation("up2",lua)}
  if(keyDown(RIGHT_ARROW)){linkMov="moving";linkPos="right";link.velocityX=4;link.changeAnimation("right",lri)}
  if(keyWentDown("w")&&arrowCount!==0){arow()}
  if(keyDown("d")){block()}
  if(keyDown("a")){stab()}
  if(keyWentUp("d")){horishield.x=-1000;horishield.y=-1000;vertishield.x=-1000;vertishield.y=-1000}
  if(keyWentUp("a")){horisword.x=-1000;horisword.y=-1000;vertisword.x=-1000;vertisword.y=-1000}
  drawSprites()
  okto1.display();
  okto2.display();
  okto3.display();
  okto4.display();
  okto5.display();
  okto6.display();
  okto7.display();
  okto8.display();
  okto9.display();
  }
}
function updateLink(){
  if(link.velocityX===0&&link.velocityY===0){
    linkMov="still"
  }
  else{
    linkMov="moving"
  }
  if(linkMov==="still"){
    if(linkPos==="up"){
      link.changeAnimation("up",lui)
  
    }
    if(linkPos==="down"){
      link.changeAnimation("down",ldi)
    
    }
    if(linkPos==="left"){
      link.changeAnimation("left",lli)
  
    }
    if(linkPos==="right"){
      link.changeAnimation("right",lri)
  
    }
  }
  if(linkMov==="moving"){
    if(linkPos==="up"){
      link.changeAnimation("up2",lua)
    }
    if(linkPos==="down"){
      link.changeAnimation("down",lda)
    }
    if(linkPos==="left"){
      link.changeAnimation("left2",lla) 
    }
    if(linkPos==="right"){
      link.changeAnimation("right2",lra)
    }
  }
}
function block(){
 
  if(linkPos==="up"&&link.velocityY===0){
    vertishield.x=link.x
    vertishield.y=link.y-50
  }
  if(linkPos==="down"&&link.velocityY===0){
    vertishield.x=link.x
    vertishield.y=link.y+50
  }
  if(linkPos==="left"&&link.velocityX===0){
    horishield.y=link.y
    horishield.x=link.x-50
  }
  if(linkPos==="right"&&link.velocityX===0){
    horishield.y=link.y
    horishield.x=link.x+50
  }
}
function stab(){
  
  if(linkPos==="up"&&link.velocityY===0){
    link.changeAnimation("sup",lsu)
    horisword.x=link.x-5
    horisword.y=link.y-30
  }
  if(linkPos==="down"&&link.velocityY===0){
    link.changeAnimation("sdown",lsd)
    horisword.x=link.x
    horisword.y=link.y+30
  }
  if(linkPos==="left"&&link.velocityX===0){
    link.changeAnimation("sleft",lsl)
    vertisword.x=link.x-33
    vertisword.y=link.y+3
  }
  if(linkPos==="right"&&link.velocityX===0){
    link.changeAnimation("sright",lsr)
    vertisword.x=link.x+33
    vertisword.y=link.y+3
  }
}

function arow(){
  if (linkPos==="up"&&link.velocityY===0){
    link.changeAnimation("aup",lbu)
  arrow=createSprite(link.x,link.y-20,10,10)
  arrow.addAnimation("uppy",aru)
  arrow.scale=0.6
  arrow.velocityY=-10
  arrowCount=arrowCount-1
  arrowGroup.add(arrow) 
  aG.add(arrow)
  }
  if(linkPos==="down"&&link.velocityY===0){
    link.changeAnimation("adown",lbd)
    arrow=createSprite(link.x,link.y+20,10,10)
  arrow.addAnimation("dppy",ard)
  arrow.scale=0.6
  arrow.velocityY=10
  arrowCount=arrowCount-1
  arrowGroup.add(arrow)
  aG.add(arrow)
  }
  if (linkPos==="left"&&link.velocityX===0){
  link.changeAnimation("aleft",lbl)
  arrow=createSprite(link.x-20,link.y,10,10)
  arrow.addAnimation("rppy",arl)
  arrow.scale=0.6
  arrow.velocityX=-10
  arrowCount=arrowCount-1
  arrowGroup.add(arrow)
  }
  if(linkPos==="right"&&link.velocityX===0){
    link.changeAnimation("aright",lbr)
    arrow=createSprite(link.x+20,link.y,10,10)
  arrow.addAnimation("lppy",arr)
  arrow.scale=0.6
  arrow.velocityX=10
  arrowCount=arrowCount-1
  arrowGroup.add(arrow)
  aG.add(arrow)
  }
}