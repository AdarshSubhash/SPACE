var sun;
var mercury;
var venus;
var earth;
var mars;
var jupitar;
var saturn;
var uranus;
var neptune;
var angle;
var anglespeed;
var suni;
var mercuryi;
var venusi;
var earthi;
var marsi;
var jupitari;
var saturni;
var uranusi;
var neptunei;

function preload(){
 suni=loadImage("sun.jpg");
mercuryi=loadImage("mercury.jpg");
venusi=loadImage("venus.jpg");
earthi=loadImage("earth.jpg");
marsi=loadImage("mars.jpg");
jupitari=loadImage("jupitar.jpg");
saturni=loadImage("saturn.jpg");
uranusi=loadImage("uranus.jpg");
neptunei=loadImage("neptune.jpg");
}


function setup() {
  createCanvas(1200,700);
  sun=createSprite(600,300,90,90);
  sun.addImage("s",suni);
sun.scale=0.2;
  mercury=createSprite(1100,674,10,10);
  mercury.addImage("m",mercuryi);
 venus=createSprite(970,485,30,30);
venus.addImage("v",venusi);
 earth=createSprite(840,377,30,30);
earth.addImage("e",earthi);
 mars=createSprite(690,460,20,20);
mars.addImage("ma",marsi);
 jupitar=createSprite(600,210,65,65);
jupitar.addImage("j",jupitari);
 saturn=createSprite(360,377,55,55);
saturn.addImage("su",saturni);
 uranus=createSprite(209,635,46,46);
uranus.addImage("u",uranusi);
 neptune=createSprite(30,95,39,39);
neptune.addImage("n",neptunei);
 angle=0;
 anglespeed=0.3;
}

function draw() {
  background(0);
  angleMode(DEGREES)
 translate(width/2,height/2)
  rotate(angle)
  if(sun.collide(mercury)){
    mercury.destroy();
  }

  if(sun.collide(venus)){
    venus.destroy();
  }
  if(sun.collide(earth)){
    earth.destroy();
  }
  if(sun.collide(mars)){
    mars.destroy();
  }
  if(sun.collide(jupitar)){
    jupitar.destroy();
  }
  if(sun.collide(saturn)){
    saturn.destroy();
  }
  if(sun.collide(uranus)){
    uranus.destroy();
  }
  if(sun.collide(neptune)){
   neptune.destroy();
  }
  angle=angle+anglespeed
  if(frameCount%2==0){
    sun.scale=sun.scale+0.2
  }








  drawSprites();
}