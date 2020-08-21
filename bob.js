class Bob{
    constructor(x,y) {
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        desity:1.2
    }
    this.body=Bodies.circle(x,y,30,30,options)
    this.width=30;
    this.height=30;

    World.add(world,this.body)
  }
}