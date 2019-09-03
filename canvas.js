

canvas = {
    ctx: undefined,
    height: undefined,
    width: undefined,
    mouseX: 0,
    mouseY: 0,
    mouseDown: false,
    mouseDownX: 0,
    mouseDownY: 0,
    keysDown: {},
}

canvas.setup = function () {
    this.ctx = document.getElementById("canvasArea").getContext("2d");
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    document.getElementById("canvasArea").width = this.width;
    document.getElementById("canvasArea").height = this.height;

    this.startListeners();
    this.setupFunction();
}

canvas.drawLine = function(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
}

canvas.drawCircle = function(x1, y1, r) {
    this.ctx.beginPath();
    this.ctx.arc(x1, y1, r, 0, 2 * Math.PI);
    this.ctx.stroke();
}

canvas.drawRectangle = function(x1, y1, width, height) {
    this.ctx.beginPath();
    this.ctx.rect(x1, y1, width, height);
    this.ctx.stroke();
}


canvas.startMain =  function(timeStep = 50) {
    setInterval(this.mainFunction, timeStep);
}

canvas.startListeners = function () {

    window.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.mouseMoveCallback(e);
    });

    window.addEventListener("mousedown", () => {
        this.mouseDownX = this.mouseX; 
        this.mouseDownY = this.mouseY; 
        this.mouseDown = true;
        this.mouseDownCallback();
    });

    window.addEventListener("mouseup", () => { 
        this.mouseDown = false;
        this.mouseUpCallback();
    });

    window.addEventListener('keyup', (e) => {
        console.log(e.code + " was released" );
        this.keysDown[e.code] = false;
        this.keyUpCallback(e);
    });

    window.addEventListener('keydown', (e) => {
        console.log(e.code + " was pressed" );
        this.keysDown[e.code] = true;
        this.keyDownCallback(e);
    });
}

canvas.clear = function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
}

canvas.isKeyDown = function(key) {
    return keysDown[key] == true;
}


// Functions Users Can Override 

canvas.mainFunction = function () {
    console.log("Dummy Main Function - Override canvas.mainFunction");
}

canvas.setupFunction = function() {
    console.log("Dummy Setup Function - Override canvas.setupFunction");
}

canvas.keyDownCallback = function (e) {
    console.log("Dummy KeyDownCallback - Override canvas.KeyDownCallback");
    // console.log("Code: ", e.code);
    // console.log("Event: ", e);
}

canvas.keyUpCallback = function (e) {
    console.log("Dummy keyUpCallback - Override canvas.keyUpCallback");
    // console.log("Code: ", e.code);
    // console.log("Event: ", e);
}

canvas.mouseDownCallback = function () {
    console.log("Dummy mouseDownCallback - Override canvas.mouseDownCallback");
}

canvas.mouseUpCallback = function () {
    console.log("Dummy mouseUpCallback - Override canvas.mouseUpCallback");
}

canvas.mouseMoveCallback = function (e) {
    // console.log("Dummy mouseMoveCallback");
    // console.log("Event: ", e);
}

