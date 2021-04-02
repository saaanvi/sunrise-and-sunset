const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


var bg ;

function preload() {
    // create getBackgroundImg( ) here
    BackgroundImg=loadAnimation(sprites/"sunrise1.png",sprites/"sunrise2.png",sprites/"sunrise3.png",sprites/"sunrise4.png",sprites/"sunrise5.png",sprites/"sunrise6.png",sprites/"sunset7.png",sprites/"sunset8.png",sprites/"sunset9.png",sprites/"sunset10.png",sprites/"sunset11.png",sprites/"sunet12.png");

    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    backgroundImg.addAnimation(sunrise1.png,sunrise2.png,sunrise3.png,sunrise4.png,sunrise5,png,sunrise6.png,sunset7.png,sunset8.png,sunset9.png,sunset10.png,sunset11.png,sunset12.png)

}

function draw(){

    // add condition to check if any background image is there to add
     

    Engine.update(engine);

    // write code to display time in correct format here
    


}

async function getBackgroundImg(){

    // write code to fetch time from API
    async function getBackgroundImg(){
        var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
        var responseJSON=await response.json();
        var datetime=responseJSON.datetime;
        var hour=datetime.slice(11,13);
        if(hour>=06&&hour<=13){
            bg="sprites/bg.png"
                
            }
            else{
                bg="sprites/bg2.jpg"
            }
            backgroundImg=loadImage(bg)
        }
    

    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset
    if(hour>=04&&hour<=06){
        bg="sunrise1.png";
    }else if(hour>=04&&hour<=06){
        bg="sunrise2.png";

    }
    else if(hour>=23 && hour<=0){
        bg="sunset10.png";
    }
    else if(hour==0&&hour<=03){
        bg="sunset11.png";
    }
    else {
        bg="sunset12.png";
    }


    //load the image in backgroundImg variable here

}
