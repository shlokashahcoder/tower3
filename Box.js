class Box{
    constructor(x,y,width,height){
        var options={
            restitution:0.4,
            friction:0.0,
            density:1
        }
        this.visibility = 255
        this.body=Bodies.rectangle(x,y,width,height)
        World.add(world,this.body)
        this.width=width
        this.height=height
    }

    display(){
if (this.body.speed<3){

        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER)
        stroke("black")
        fill("white")
        rect(0,0,this.width,this.height)
        pop()
    }
    else{
        World.remove(world,this.body)
        push();
        this.visibility = this.visibility-5
        tint(255,this.Visiblity);
        pop();
    }
}

    score(){
        if(this.visibility<0 && this.visibility>-105){
            score++
        }

}
}