var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 10;
var isPainting = false;

function setWidth(value) {
    if (isNumeric(value)) {
      paintcanvas.width = parseInt(value);
    }
}

function setHeight(value) {
    if (isNumeric(value)) {
      paintcanvas.height = parseInt(value);
    }
}

function isNumeric(value) {
    return !isNaN(value);
}

function startPaint() {
    isPainting = true;
}

function endPaint() {
    isPainting = false;
}

function paintCircle(x, y) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
}

function doPaint(x, y) {
    if (isPainting) {
      paintCircle(x, y);
    }
}

function setColor(newColor) {
    color = newColor;
}

function resizeBrush(newSize) {
    radius = newSize;
}

function clearCanvas () {
    context.clearRect(0, 0, paintcanvas.width,  paintcanvas.height);
}