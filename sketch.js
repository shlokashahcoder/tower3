const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint


var engine,world
var ground,polygon,polygonImg
var score = 0
var bg
var backgroundImg

function preload(){
    polygonImg=loadImage("polygon.png")
     getBackgroundImg();
}

function setup(){
    createCanvas(800,400)

    engine=Engine.create()
    world=engine.world;

    ground=new Ground(400,380,800,20)

    stand1=new Stand(400,300,250,10);
    stand2 = new Stand(700,200,200,10);

    polygon=Bodies.circle(50,200,20)
    World.add(world,polygon)
 

    
  //level one
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    //level two
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
    //level three
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    //level four
    box16=new Box(390,155,30,40)


    // another set
    block1 = new Box(640,175,30,40);
    block2 = new Box(670,175,30,40);
    block3 = new Box(700,175,30,40);
    block4 = new Box(730,175,30,40);
    block5 = new Box(760,175,30,40);
    //level two
    block6 = new Box(670,135,30,40);
    block7 = new Box(700,135,30,40);
    block8 = new Box(730,135,30,40);
    //top
    block9 = new Box(700,95,30,40);

    sling=new Slingshot(polygon,{x:100,y:200})
}


function draw(){
    background("backgroundImg")
    Engine.update(engine)

    ground.display()

    stand1.display()
    stand2.display()

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()

    //adding image to the polygon
    imageMode(CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)

    sling.display()

    fill("blue")
    text("Press space to get another chance",600,360)
    text("Score:"+score,700,40)

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();


}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX ,y :mouseY});
}

function mouseReleased(){
    sling.fly()
}

function keyPressed(){
    if(keyCode === 32){
        sling.attach(polygon);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "aqua";
    }
    else{
        bg = "yellow";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}