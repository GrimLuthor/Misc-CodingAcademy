"use strict"

var gElCanvas = document.querySelector('canvas')

var gCtx = gElCanvas.getContext('2d')

var gColor = 'black'

var gWidth = 5

var gRectLength = 10

var gRectHeight = 10

var gDrawStyle = 'freeDraw'




function updateColor(elSelector){
    gColor = elSelector.value
}

function updateDrawStyle(elSelector){
    gDrawStyle =  elSelector.value

    if(gDrawStyle==='rectangle'){
        document.querySelector('.rect-vars').style.display = 'block'
    }else{
        document.querySelector('.rect-vars').style.display = 'none'
    }
}

function updateLength(value){
    gRectLength = value
}

function updateHeight(value){
    gRectHeight = value
}


function draw(ev){
    const {offsetX, offsetY} = ev
    switch (gDrawStyle) {
        case 'rectangle':
            drawRect(offsetX,offsetY)
            break;
        case 'circle':
            drawArc(offsetX,offsetY)
            break;
        case 'triangle':
            drawTriangle(offsetX,offsetY)
            break;
    }
}

function drawRect(x,y){
    gCtx.strokeStyle = gColor;
    gCtx.lineWidth = gWidth;
    gCtx.beginPath();
    gCtx.rect(x, y,gRectLength,gRectHeight);
    gCtx.fillStyle = 'white';
    gCtx.fillRect(x, y, gRectLength, gRectHeight);
    gCtx.stroke();
}

function drawArc(x, y) {
    gCtx.strokeStyle = gColor
    gCtx.beginPath();
    gCtx.lineWidth = 6;
    //the x,y cords of the center , The radius of the circle, The starting angle, The ending angle, in radians
    gCtx.arc(x, y, 50, 0, 2 * Math.PI);//use to create a circle //Adds a circular arc to the current path.
    gCtx.stroke();
    gCtx.fillStyle = 'white';
    gCtx.fill();
}


function drawTriangle(){
    console.log('drawing trangle');
}



function showUpdatedWidth(width){
    gWidth = width
    document.querySelector('.sWidth').innerText = width
}








//Regular Drawing (Experimental)

var painting = false

function startPosition(){
    if(gDrawStyle!=='freeDraw') return;
    painting = true
}

function finishedPosition(){
    painting = false
    gCtx.beginPath()
}

function paint(ev){
    if(!painting) return;
    gCtx.lineWidth = gWidth;
    gCtx.lineCap = 'round'
    gCtx.strokeStyle = gColor

    gCtx.lineTo(ev.clientX, ev.clientY);
    gCtx.stroke();
    gCtx.beginPath();
    gCtx.moveTo(ev.clientX, ev.clientY);
}

gElCanvas.addEventListener("mousedown",startPosition);
gElCanvas.addEventListener("mouseup",finishedPosition);
gElCanvas.addEventListener("mousemove",paint);


gElCanvas.addEventListener("mouseover",()=>{document.body.style.cursor = "crosshair"})
gElCanvas.addEventListener("mouseleave",()=>{document.body.style.cursor = "auto"})



// var strHTML = ''
// [].map(img => {
//     strHTML += `$`
// })