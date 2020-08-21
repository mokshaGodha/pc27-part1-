class Rope{
    constructor(bodyA,bodyB){
        var options ={
            bodyA : bodyA,
            bodyB : bodyB,
            length : 100,
            stiffness: 0.5
        }
       this.chain = Matter.Constraint.create(options);
       World.add(world,this.chain);
       console.log(this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}