  const Engine = Matter.Engine,
 World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles=[];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var particle;
var turn=0;
var gamestate;
var play;
function setup() {
  createCanvas(900, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  text("score:"+score,600,40)  
  text("500",30,500)  
  text("500",100,500)  
  text("500",200,500)  
  text("500",290,500)  
  text("100",390,500)  
  text("100",470,500)  
  text("100",550,500)  
  text("200",650,500)  
  text("200",740,500)  
  text("200",820,500)
 strokeWeight(3);
 stroke("yellow")
 line(0,400,900,400)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   
   /*if(frameCount%20===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }



  
 
 
 //text(mouseX+","+mouseY,mouseX,mouseY)


    if(particle!=null)
   { 
 particle.display();
 
     
 
     if(particle.body.position.y>500){
   
   
   if(particle.body .position.x>0 && particle.body.position.x<324 ){
   score=score+500;
   particle=null;
   if(turn>5)gamestate="end";
   }
   else if(particle.body .position.x>324 && particle.body .position.x<570){
    score=score+100;
   particle=null;
   if(turn>5)gamestate="end"; 
   

 else if (particle.body.position.x>570 && particle.body .position.x<773){
  score=score+200;
  particle=null;
  if(turn>5)gamestate="end"; 
 }
 }
 }

   }
  
 
 


  if(gamestate==="end"){
text("GAME OVER",300,300)
 // textSize("100")
} 





  }
function mousePressed(){
if(gamestate!=="end")
turn++
particle=new Particle(mouseX,10,10,10)


}