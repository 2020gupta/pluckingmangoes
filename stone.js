class Stone{
    constructor(x,y,radius){
  var options ={
      isStatic:true,
    restitution:0,
    friction:1,
  density:1.2
  }
  
   // this.sling.bodyA = null;
  
  this.body=Bodies.circle(x,y,radius,options)
  this.radius=radius
  World.add(world,this.body)
 this.image=loadImage("stone.png")
    }
    fly(){
      this.sling.bodyA = null;
    }
    display(){
        var pos=this.body.position
        imageMode(RADIUS)
        image(this.image,pos.x,pos.y,this.radius,this.radius)
    }
}