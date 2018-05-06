var x;
var y;
var ballList = [];

function randCoordinate() {
    x = Math.floor(Math.random()*1300);
    y = Math.floor(Math.random()*500);
}


function createBall (){
var ball = document.createElement("div");
ball.style.width = "75px";
ball.style.height = "75px";
ball.style.background = "red";
ball.style.color = "white";
ball.style.borderRadius= "100%";
ball.style.position= "absolute";
ball.style.top= y+"px";
ball.style.left=x+"px";
document.body.appendChild(ball);
ballList.push(ball);
}
var screen= document.getElementById("screen");
screen.addEventListener("click", moveBalls);

function moveBalls(event) {
    var newPositonX = event.clientX;
    var newPositonY = event.clientY;
    var ballCount =1;
    var lisitem = 0; 
    for (let i = 0; i < ballCount; i++) {
        
        for (let j = 0; j <ballCount; j++) {
            
            ballList[lisitem].style.top=newPositonY+"px";
            ballList[lisitem].style.left=newPositonX+"px";
            newPositonX+=75;
            lisitem ++;
        }
        newPositonX=event.clientX-37.5-(i*37.5);
        newPositonY-=75;
        ballCount+=1;
        
    }



}
////////



