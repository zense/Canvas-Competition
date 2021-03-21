var global = {

    balls: [],
    lights: []
}

var settings = {
    
    width: 0,
    height: 0,

    FoV: Math.PI/4,

    Xsensitivity: Math.PI/128,
    Ysensitivity: Math.PI/128,

    prevTime: 0,
    frameRate: 0,

    angVelConstant: Math.PI/256
}


//canvas.setup();

alert("Press 'a' to add an object, and 'd' to delete");
alert("Use your left and right arrow keys to look around");

settings.width = 200;
settings.height = 200;


var cam = new Camera(undefined, new Vector(0, 0, 1));   

var demoBall1 = new Ball(new Vector(7, 0, 30), 5, {r: 0, g: 200, b: 0}, {ambient: 0, diffuse: 1, specular: 0});
var demoBall2 = new Ball(new Vector(-7, 0, 30), 5, {r: 200, g: 0, b: 0}, {ambient: 0, diffuse: 1, specular: 0});
var demoLight1 = new Light(new Vector(20, -20, -5), new Vector(0, 0, 0), new Vector(0, 1, 0));

global.balls.push(demoBall1);
global.balls.push(demoBall2);
global.lights.push(demoLight1);


settings.prevTime = new Date().getTime();


function main(){

    var time = new Date().getTime();
    var frameRate = 1000 / (time - settings.prevTime);

    settings.frameRate = (settings.frameRate * 0.9) + (frameRate * 0.1);
    //framerate logic from 'force directed graph'
    
    cam.render();
    cam.ctx.putImageData(cam.pixelData, 0, 0);

    
    for(var x = 0; x < global.balls.length; x++){
        global.balls[x].move();
    }

    for(var x = 0; x < global.lights.length; x++){
        global.lights[x].move();
    }

}

canvas.keyDownCallback = function (e) {

    if(e.key == 'ArrowUp'){

        cam.moveForward();
    }

    if(e.key == 'ArrowDown'){
        
        //yet to code
    }

    if(e.key == 'ArrowLeft'){
        
        cam.V = cam.V.transform(rotateY(settings.Xsensitivity));
    }

    if(e.key == 'ArrowRight'){
        
        cam.V = cam.V.transform(rotateY(-settings.Xsensitivity));
    }

    if(e.key == 'a'){

        var objType = prompt("Enter 'ball' to add a ball or 'light' to add a light");
        
        var Ci_, Cj_, Ck_, R_, r_, g_, b_, ambient_, diffuse_, specular_,
            vx_, vy_, vx_, wx_, wy_, wz_;

        switch(objType){

            case 'ball':
                
                Ci_ = parseFloat(prompt("Enter the x-coordinate of its center"));
                Cj_ = parseFloat(prompt("Enter the y-coordinate of its center"));
                Ck_ = parseFloat(prompt("Enter the z-coordinate of its center"));

                R_ = parseFloat(prompt("Enter its radius"));

                r_ = parseFloat(prompt("Enter its 'r' value", '0'));
                g_ = parseFloat(prompt("Enter its 'g' value", '0'));
                b_ = parseFloat(prompt("Enter its 'b' value", '0'));

                ambient_ = parseFloat(prompt("Enter its 'ambient' value", '0'));
                diffuse_ = parseFloat(prompt("Enter its 'diffuse' value", '1'));
                specular_ = parseFloat(prompt("Enter its 'specular' value", '0'));

                vx_ = parseFloat(prompt("Enter the x-component of its velocity (~0.5)", '0'));
                vy_ = parseFloat(prompt("Enter the y-component of its velocity (~0.5)", '0'));
                vz_ = parseFloat(prompt("Enter the z-component of its velocity (~0.5)", '0'));

                wx_ = parseFloat(prompt("Enter its angular velocity about the x-axis (~0.5)", '0'));
                wy_ = parseFloat(prompt("Enter its angular velocity about the y-axis (~0.5)", '0'));
                wz_ = parseFloat(prompt("Enter its angular velocity about the z-axis (~0.5)", '0'));

                let ball_ = new Ball(new Vector(Ci_, Cj_, Ck_), R_, {r: r_, g: g_, b: b_}, {ambient: ambient_, diffuse: diffuse_, specular: specular_}, new Vector(vx_, vy_, vz_), new Vector(wx_, wy_, wz_));
                global.balls.push(ball_);

                break;

            case 'light':

                Ci_ = parseFloat(prompt("Enter the x-coordinate of its center"));
                Cj_ = parseFloat(prompt("Enter the y-coordinate of its center"));
                Ck_ = parseFloat(prompt("Enter the z-coordinate of its center"));

                vx_ = parseFloat(prompt("Enter the x-component of its velocity (~0.5)", '0'));
                vy_ = parseFloat(prompt("Enter the y-component of its velocity (~0.5)", '0'));
                vz_ = parseFloat(prompt("Enter the z-component of its velocity (~0.5)", '0'));

                wx_ = parseFloat(prompt("Enter its angular velocity about the x-axis (~0.5)", '0'));
                wy_ = parseFloat(prompt("Enter its angular velocity about the y-axis (~0.5)", '0'));
                wz_ = parseFloat(prompt("Enter its angular velocity about the z-axis (~0.5)", '0'));

                let light_ = new Light(new Vector(Ci_, Cj_, Ck_), new Vector(vx_, vy_, vz_), new Vector(wx_, wy_, wz_));
                global.lights.push(light_);

                break;
            
            default:
                alert('Invalid object type!');
        }
    }

    if(e.key == 'd'){

        var conf = prompt("Delete all objects? (Y/N)", "N");

        switch(conf){

            case 'Y':

                global.balls = [];
                global.lights = [];

                break;

            default:

        }
    }
}


canvas.mainFunction = main;
canvas.startMain(1);


// var b1 = new Ball(new Vector(0, 0, 30), 5, {r: 0, g: 0, b: 200}, {ambient: 0, diffuse: 1, specular: 0});
// var b2 = new Ball(new Vector(0, 0, 30), 5, {r: 200, g: 0, b: 0}, {ambient: 0, diffuse: 1, specular: 0});

// global.balls.push(b1);

// var l1 = new Light(new Vector(30, 0, 10));
// global.lights.push(l1);