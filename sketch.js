const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise.png" ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

    // write code to display time in correct format here
       
     if (hour>=12){
         text ("Time:" +hour %12+ " pm",50,100)
     }
     else if(hour==0){ 
         text("Time : 12 AM",100,100); 
    }
    else{
         text("Time : "+ hour%12 + " AM", 50,100);
         }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON = await response.json();

    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
     


    console.log(datetime+"  " +hour);

    if(hour>=00 && hour<=18){
        bg = "sunrise.png";
    
    }else if(hour>=23 && hour>=0){
        bg = "sunset.png";
    }
backgroundImg = loadImage(bg);

} 