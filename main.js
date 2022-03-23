canvas = document.getElementById("my_canvas");
ctx = canvas.getContext("2d");
var Line_Width, Color, LastX, LastY, mouseEvent;

addEventListener("mousedown", MouseDown);
function MouseDown(i){
    mouseEvent = "MouseDown"
    LineWidth = document.getElementById("line_width").value;
    Color = document.getElementById("color").value;
}

addEventListener("mouseup", MouseUp);
function MouseUp(i){
    mouseEvent = "MouseUp";
}

addEventListener("mouseleave", MouseLeave);
function MouseLeave(){
    mouseEvent = "MouseLeave";
}

addEventListener("mousemove", MouseMove);
function MouseMove(i){
    CurrentX = i.clientX - canvas.offsetLeft;
    CurrentY = i.clientY - canvas.offsetTop;
    console.log(CurrentX, CurrentY, LastX, LastY);
    if(mouseEvent == "MouseDown"){
        console.log("hello");
        ctx.beginPath();
        ctx.strokeStyle = Color;
        ctx.lineWidth = LineWidth;
        ctx.moveTo(LastX, LastY);
        ctx.lineTo(CurrentX, CurrentY);
        ctx.stroke();
    }

    LastX = CurrentX;
    LastY = CurrentY;
}

addEventListener("touchstart", TouchStart);
function TouchStart(i){
    LastX = i.touches[0].clientX - canvas.offsetLeft;
    LastY = i.touches[0].clientY - canvas.offsetTop;
    LineWidth = document.getElementById("line_width").value;
    Color = document.getElementById("color").value;
}

addEventListener("touchmove", TouchMove);
function TouchMove(i){
    LineWidth = document.getElementById("line_width").value;
    Color = document.getElementById("color").value;
    CurrentX = i.touches[0].clientX - canvas.offsetLeft;
    CurrentY = i.touches[0].clientY - canvas.offsetTop;
    console.log(CurrentX, CurrentY, LastX, LastY);
        console.log("hello");
        ctx.beginPath();
        ctx.strokeStyle = Color;
        ctx.lineWidth = LineWidth;
        ctx.moveTo(LastX, LastY);
        ctx.lineTo(CurrentX, CurrentY);
        ctx.stroke();

    LastX = CurrentX;
    LastY = CurrentY;
}
