
var canvas = document.getElementById("myCanvas");

function drawCircle(){    
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawLine(){
    var ctx = canvas.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();    
}

function drawSquare(){
    var ctx = canvas.getContext("2d");
    ctx.moveTo(10,10);
    ctx.lineTo(10,60);
    ctx.lineTo(60,60);
    ctx.lineTo(60,10);
    ctx.lineTo(10,10);
    ctx.stroke();
}
function drawName(){
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.strokeText("Raul",150,150);

}