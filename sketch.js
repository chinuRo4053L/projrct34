

function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here

}

function draw() {
  background(0);

}
function mouseDragged(){
Matter.Body.setposition(hero.body,{x:mouseX,y:mouseDragged.Y})
}
constructor(x,y,r)
{
var options={
density:1,
frictionAit:1
}
this.x=x
this.y=y
this,r=r
this.image=loadImage("superhero-01.png");
this.body=bodies.circle(this.x,this.y,(this.r)/2,options)
World.add(world,this.body);
}







