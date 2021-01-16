class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:3
        }
        this.constraint=Constraint.create(options)
        World.add(world,this.constraint)
        this.pointB=pointB
    }
    fly(){
        this.constraint.bodyA=null;
    }

    attach(body){
        this.constraint.bodyA = body

    }

    display(){
        if(this.constraint.bodyA){
       var  pointA=this.constraint.bodyA.position
        line(pointA.x,pointA.y,this.pointB.x,this.pointB.y)
        }
    }

   
}