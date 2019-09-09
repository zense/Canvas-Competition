/*
    Developed for Zense Hackathon
    Author - Satvik Ramaprasad,
             Shubhayu Das,
             Rohit Katlaa

    Note - DO NOT CHANGE CONTENTS OF THIS FILE

    Instructions for users
    1) You need not understand the code here to be able to use it. 
    2) Understanding the API below should be enough
    3) See examples to get started

    API Documentation

    Helpful Canvas Variables
        canvas.height // Height
        canvas.width // Width
        canvas.mouseX // Current Position of mouse x coordinate
        canvas.mouseY // Current Position of mouse y coordinate
        canvas.mouseDown // Boolean to check if mouse is pressed down
        canvas.mouseDownX // Last Position of mouse press x coordinate
        canvas.mouseDownY // Last Position of mouse press y coordinate
        canvas.drawMode  // Fill in a shape or just draw the border

    Helpful Canvas Functions
        canvas.setDrawMode(mode)   // Set the drawMode variable to "stroke" or "fill"
        canvas.setColor(color)  // Set the color of the shape(s) to the given color. Default color is black(#000000)
                                // Value can be any one of these types: 
                                //    1. "red"
                                //    2. "#F54680"
                                //    3. "rgb(100,100,100)"
                                //    4. "rgba(100,100,101,0.3)"

        canvas.setLineThickness(width)  // Set the thickness of the lines while in "fill draw mode". Default value is 1.

        canvas.draw()   //  Draws the various shapes according to the drawing mode.
        canvas.drawLine(x1, y1, x2, y2) // Draws line from (x1, y1) to (x2, y2)
        canvas.drawCircle(x, y, r) // Draws circle with center (x, y) and radius r
        canvas.drawRectangle(x, y, width, height) // Draws rectangle with top left corner as (x, y) and of dimensions width * height
        canvas.clear() // Clears the canvas
        canvas.isKeyDown(key) // Checks if keyboard key is pressed. Example KeyA for A. 
        canvas.drawText(x, y, message, fontSize = 30) // Draws <message> at (x, y) 
        
        canvas.drawImg(path,x,y,width,height) // Draws an image at (x,y). "path" argument is used to mention the path of the image (width and height of the image are optional)


    Optionally Override the following functions
        canvas.mouseDownCallback() // Called when mouse is pressed
        canvas.mouseUpCallback() // Called when mouse is released
        canvas.mouseMoveCallback() // Called when mouse is moved
        canvas.keyDownCallback() // Called when key is pressed
        canvas.keyUpCallback() // Called when mouse is released
        canvas.keyUpCallback() // Called when mouse is released
        canvas.mainFunctin() // Called when mouse is released

*/

// Canvas State Variables
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
    drawMode: "stroke",
}

// Canvas Setup function
canvas.setup = function () {
    // extract canvas object and set attributes correctly
    this.ctx = document.getElementById("canvasArea").getContext("2d");
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    document.getElementById("canvasArea").width = this.width;
    document.getElementById("canvasArea").height = this.height;

    // Start listeners
    this.startListeners();

    // Complete custom setup
    this.setupFunction();
}

// Set the drawing mode to solid fill or border stroke
canvas.setDrawMode = function(mode = "stroke") {
    this.drawMode = (mode === "fill")? "fill" : "stroke";
};

// Set the color of the shape(s) for drawing
canvas.setColor = function(color) {
    this.ctx.fillStyle = color;
    this.ctx.strokeStyle = color;
};

// Sets the thickness of the line of the shapes in strokes
canvas.setLineThickness = function(width = 1) {
    this.ctx.lineWidth = width;
};

// Draws the shape according to the drawMode(solid fill or border stroke style)
canvas.draw = function() {
    if(this.drawMode === "stroke"){
        this.ctx.stroke();
    } else {
        this.ctx.fill();
    }
}

// Draws line from (x1, y1) to (x2, y2)
canvas.drawLine = function(x1, y1, x2, y2) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.draw();
}

// Draws circle with center (x, y) and radius r
canvas.drawCircle = function(x1, y1, r) {
    this.ctx.beginPath();
    this.ctx.arc(x1, y1, r, 0, 2 * Math.PI);
    this.draw();
}

// Draws rectangle with top left corner as (x, y) and of dimensions width * height
canvas.drawRectangle = function(x, y, width, height) {
    this.ctx.beginPath();
    this.ctx.rect(x, y, width, height);
    this.draw();
}

// Draws <message> at (x, y) 
canvas.drawText = function(x, y, message, fontSize = 30) {
    this.ctx.font = fontSize + "px Arial";
    this.ctx.fillText(message, x, y);
}

// Clear canvase
canvas.clear = function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
}

// Function which will setup calling of canvas.mainFunction every <timeStep> milliseconds
canvas.startMain =  function(timeStep = 50) {
    setInterval(this.mainFunction, timeStep);
}

// Will start event listeners
// An event listener is a procedure or function in a computer program that waits for an event to occur. 
// Examples of an event are the user clicking or moving the mouse, pressing a key on the keyboard
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

// Checks if keyboard key is pressed. Example KeyA for A. 
canvas.isKeyDown = function(key) {
    return keysDown[key] == true;
}


// Functions Users Can Override in index.html

// Main function which is called every <timeStep> milliseconds when canvas.startMain() is called
canvas.mainFunction = function () {
    console.log("Dummy Main Function - Override canvas.mainFunction");
}

// Custom Setup function for setting up global variables
canvas.setupFunction = function() {
    console.log("Dummy Setup Function - Override canvas.setupFunction");
}

// Called when key is pressed
canvas.keyDownCallback = function (e) {
    console.log("Dummy KeyDownCallback - Override canvas.KeyDownCallback");
}

// Called when key is released
canvas.keyUpCallback = function (e) {
    console.log("Dummy keyUpCallback - Override canvas.keyUpCallback");
}

// Called when mouse is pressed
canvas.mouseDownCallback = function () {
    console.log("Dummy mouseDownCallback - Override canvas.mouseDownCallback");
}

// Called when mouse is released
canvas.mouseUpCallback = function () {
    console.log("Dummy mouseUpCallback - Override canvas.mouseUpCallback");
}

// Called when mouse is moved
canvas.mouseMoveCallback = function (e) {
    // console.log("Dummy mouseMoveCallback - Override canvas.mouseMoveCallback");
}


// This function is used to display any image on the canvas
canvas.drawImg=function(imgPath,x,y,width=-1,height=-1){
    var img = new Image;
    img.src = imgPath;
    if(width!=-1&&height!=-1)
    {
        img.onload = ()=>{
            this.ctx.drawImage(img,x, y,width,height);
        };
    }
    else{
        img.onload =()=>{
            this.ctx.drawImage(img,x, y);
        };
    }
}
