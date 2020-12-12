
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;



var mConstraint;
var engine, world;
var sling1,sling2,sling3,sling4,sling5;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;






function preload()
{
	
}

function setup() {
	canvas=createCanvas(1200,600);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	let canvasmouse=Mouse.create(canvas.elt);
	canvasmouse.pixelRatio=pixelDensity();
	let options = {
		mouse:canvasmouse
	}
	mConstraint=MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

   pendulum1=new Pendulum(200,200,"yellow");
   sling1=new Sling (pendulum1.body,{x:200,y:190});
   pendulum2=new Pendulum(260,200,20,"blue");
   sling2=new Sling(pendulum2.body,{x:260,y:190});
   pendulum3=new Pendulum(320,200,"green");
   sling3=new Sling(pendulum3.body,{x:320,y:190});
   pendulum4=new Pendulum(380,200,"red");
   sling4=new Sling(pendulum4.body,{x:380,y:190});
   pendulum5=new Pendulum(440,200,"pink");
   sling5=new Sling(pendulum5.body,{x:440,y:190});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
   pendulum1.display();
   sling1.display();
   pendulum2.display();
   sling2.display();
   pendulum3.display();
   sling3.display();
   pendulum4.display();
   sling4.display();
   pendulum5.display();
   sling5.display();
 
}


function mouseDragged(){
	
	Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});

}
