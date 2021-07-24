var bg, bgImg, fisherman,fishermanImg
var shark , sharkImg , sharkImg2
var fish1,fish1Img,fish1Group1
var fish2,fish2Img,fish2Group2
var fish3,fish3Img,fish3Group3
var fish4,fish4Img,fish4Group4
var fish5, fish5Img,fish5Group5
var edges
function preload (){
bg = loadImage ("pond.jpg")
fishermanImg = loadImage ("th-removebg-preview (1).png")
sharkImg = loadAnimation ("sharkm2-removebg-preview.png","mshark1-removebg-preview.png","mshark3-removebg-preview.png")
fish2Img = loadImage("fish2-removebg-preview.png")
fish3Img = loadImage("fish3-removebg-preview.png")
fish4Img = loadImage("fish4-removebg-preview.png")
fish1Img = loadImage("fish1-removebg-preview.png")
fish5Img = loadImage ("fish5.png")
sharkImg2 = loadAnimation ("fm2.png","fm1.png","fm3.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  fisherman = createSprite(1000, 200, 50, 50);
  fisherman.addImage(fishermanImg)

  shark = createSprite (1000,400,10,10)
  shark.addAnimation("sharkImg",sharkImg)
  shark.scale=1
  shark.velocityX = -5
  edges = createEdgeSprites()
  fish1Group1 = createGroup()
  
 
  fish2Group2 = createGroup()
  
 
  fish3Group3 = createGroup()
 
 
  fish4Group4 = createGroup()

  fish5Group5 = createGroup()
 
}

function draw() {
  background(bg); 
  shark.collide(edges[3])
 
  shark.collide(edges[2])
  if (shark.collide(edges[0])){
    shark.addAnimation("sharkImg",sharkImg2)
    shark.velocityX = 5
  }
  if (shark.collide(edges[1])){
    shark.addAnimation("sharkImg",sharkImg)
    shark.velocityX = -5
  }
  spawnFish1() 
  spawnFish2()
  spawnFish3()
  spawnFish4()
  spawnFish5()
  drawSprites();
}
function spawnFish1 (){
  if(frameCount%200==0){
    fish1 = createSprite(1800,700,10,10)
    fish1.addImage(fish1Img)
    fish1.y = Math.round(random(350,800))
    fish1.scale = 0.1
    fish1.velocityX = -3
  }
}
function spawnFish2 (){
  if(frameCount%250==0){
    fish2 = createSprite(1800,600,10,10)
    fish2.y = Math.round(random(350,800))
    fish2.addImage(fish2Img)
    fish2.scale = 0.1
    fish2.velocityX = -2
  }
}
function spawnFish3 (){
  if(frameCount%230==0){
    fish3 = createSprite(0,500,10,10)
    fish3.y = Math.round(random(350,800))
    fish3.addImage(fish3Img)
    fish3.scale = 0.2
    fish3.velocityX = 3
  }
}
function spawnFish4 (){
  if(frameCount%300==0){
    fish4 = createSprite(1800,700,10,10)
    fish4.y = Math.round(random(350,800))
    fish4.addImage(fish4Img)
    fish4.scale = 0.1
    fish4.velocityX = -1
  }
}
function spawnFish5 (){
  if(frameCount%220==0){
    fish5 = createSprite(0,700,10,10)
    fish5.y = Math.round(random(350,800))
    fish5.addImage(fish5Img)
    fish5.scale =0.1
    fish5.velocityX = 2
  }
}