


class Ray{

    constructor(C, V){

        this.C = C;
        this.V = V;
    }

    
    collision(ball){

        let eye_center = ball.C.subtract(this.C);
        
        if(!eye_center.mag()) return ball.R;

        let d = eye_center.dot(eye_center)/eye_center.mag();
        //side from eye to ball's center (hypotenuse)

        let d1 = this.V.dot(eye_center)/this.V.mag();
        //side along the ray

        let d2 = Math.sqrt(Math.pow(d, 2) - Math.pow(d1, 2));
        //(shortest) distance of ray from ball's center

        if(d2 > ball.R) return;
        else return (d > ball.R) ? d1 - Math.sqrt(Math.pow(ball.R, 2) - Math.pow(d2, 2)) : d1 + Math.sqrt(Math.pow(ball.R, 2) - Math.pow(d2, 2));
        
    }
}



class Vector{

    constructor(i, j, k){

        this.i = i;
        this.j = j;
        this.k = k;
   }

    mag(){

        return Math.sqrt(Math.pow(this.i, 2) + Math.pow(this.j, 2) + Math.pow(this.k, 2));
    }
    normalize(){
        
        if(this.mag()){

            let m = this.mag();
            
            this.i /= m;
            this.j /= m;
            this.k /= m;
        }
    }
    reflect(N){

        let res = this.subtract(N.transform(scale(2 * this.dot(N))));
        return res;
    }

    add(V){

        let res = new Vector(this.i + V.i, this.j + V.j, this.k + V.k);
        return res;
    }
    subtract(V){

        let res = new Vector(this.i - V.i, this.j - V.j, this.k - V.k);
        return res;
    }
    scalarMultiply(l){

        let res = new Vector((this.i)*l, (this.j)*l, (this.k)*l);
        return res;
    }
    scalarDivide(l){

        let res = new Vector((this.i)/l, (this.j)/l, (this.k)/l);
        return res;
    }

    dot(V){
        
        return (this.i * V.i) + (this.j * V.j) + (this.k * V.k);
    }
    cross(V){

        let res = new Vector((this.j * V.k) - (this.k * V.j), (this.k * V.i) - (this.i * V.k), (this.i * V.j) - (this.j * V.i));
        return res;
    }

    transform(M){

        let i_ = (M[0] * this.i) + (M[4] * this.j) + (M[8] * this.k) + (M[12]);
        let j_ = (M[1] * this.i) + (M[5] * this.j) + (M[9] * this.k) + (M[13]);
        let k_ = (M[2] * this.i) + (M[6] * this.j) + (M[10] * this.k) + (M[14]);

        let res = new Vector(i_, j_, k_);
        return res;
    }

}


function scale(l){

    let m = [
        l, 0, 0, 0,
        0, l, 0, 0,
        0, 0, l, 0,
        0, 0, 0, 1
    ];

    return m;
}

function translate(dx, dy, dz){

    let m = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        dx, dy, dz, 1
    ];

    return m;
}

function rotateX(theta){


    let a = Math.sin(theta);
    let b = Math.cos(theta);

    let m = [
        1, 0, 0, 0,
        0, b, -a, 0,
        0, a, b, 0,
        0, 0, 0, 1
    ];

    return m;
}
function rotateY(theta){


    let a = Math.sin(theta);
    let b = Math.cos(theta);

    let m = [
        b, 0, a, 0,
        0, 1, 0, 0,
        -a, 0, b, 0,
        0, 0, 0, 1
    ];

    return m;
}
function rotateZ(theta){


    let a = Math.sin(theta);
    let b = Math.cos(theta);

    let m = [
        b, -a, 0, 0,
        a, b, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ];

    return m;
}


function trace(ray, depth){

    if(depth > 3) return;

    ray.V.normalize();

    let minDistance = Number.POSITIVE_INFINITY;
    let nearest;


    for(var i = 0; i < global.balls.length; i++){

        let distance = ray.collision(global.balls[i]); 

        if(distance < minDistance && distance > 0){

            minDistance = distance; 
            nearest = global.balls[i];
        }
    }

    if(minDistance == Number.POSITIVE_INFINITY) return {r: 100, g: 100, b: 100};

    ray.V = ray.V.scalarMultiply(minDistance);

    let pointOfContact = ray.C.add(ray.V);
    let normal = pointOfContact.subtract(nearest.C);    
    normal.normalize();

    return surface(ray, normal, nearest, pointOfContact, depth);
}

function surface(ray, normal, ball, pointOfContact, depth){

    //pixel colour = combination of surfaceProperties
    //return ball colour * (ballAmbience + diffuseAmount*ballDiffuse) + reflected colour * (ballSpecular)

    var diffuseAmount = 0;  

    loop1:
    for(var i = 0; i < global.lights.length; i++){

        let lightRay = new Ray(global.lights[i].C, global.lights[i].C.subtract(pointOfContact));
        
        loop2:
        for(var j = 0; j < global.balls.length; j++){
            
            let distance = -lightRay.collision(global.balls[j]);
            
            //console.log(distance, lightRay.V.mag());
            if(distance < lightRay.V.mag() && distance > 0.01) break loop1;
        }
    

        lightRay.V.normalize();

        let deltaDiffuseAmount = normal.dot(lightRay.V);
        if(deltaDiffuseAmount > 0) diffuseAmount += deltaDiffuseAmount;
        
    }
    
    diffuseAmount = Math.min(diffuseAmount, 1);

    //yet to code specular

    return {r: ball.colour.r*((diffuseAmount * ball.surfaceProperties.diffuse) + ball.surfaceProperties.ambient), g: ball.colour.g*((diffuseAmount * ball.surfaceProperties.diffuse) + ball.surfaceProperties.ambient), b: ball.colour.b*((diffuseAmount * ball.surfaceProperties.diffuse) + ball.surfaceProperties.ambient)};
}


class Camera{

    constructor(C = new Vector(0, 0, 0), V = new Vector(0, 0, 1), FoV = settings.FoV){

        this.C = C;
        this.FoV = FoV;

        V.normalize();
        this.V = V;

        this.k = settings.height/settings.width;
        this.camWidth = 2 * Math.tan(this.FoV/2);
        this.camHeight = this.k * this.camWidth;
        
        this.pixelWidth = this.camWidth / (settings.width - 1);
        this.pixelHeight = this.camHeight / (settings.height - 1);

        this.ctx = document.getElementById("canvasArea1").getContext("2d");
        this.pixelData = this.ctx.getImageData(0, 0, settings.width, settings.height);
    }

    render(){

        let widthVector = (new Vector(0, 1, 0)).cross(this.V);
        let heightVector = this.V.cross(widthVector);

        var colour;

        widthVector.normalize();
        heightVector.normalize();
        
        for(var i = 0; i < this.pixelData.data.length; i++){

            let x = i % (settings.width);
            let y = (i - x) / settings.width;

            let posVector = (widthVector.scalarMultiply((x * this.pixelWidth) - (this.camWidth/2))).add(heightVector.scalarMultiply((y * this.pixelHeight) - (this.camHeight/2)));

            colour = trace(new Ray(this.C, this.V.add(posVector)), 0);
            
            this.pixelData.data[4*i] = colour.r;
            this.pixelData.data[4*i+1] = colour.g;
            this.pixelData.data[4*i+2] = colour.b;
            this.pixelData.data[4*i+3] = 255; 
        }
    }

    moveForward(){

        let m = this.V.mag();
        let dV = this.V.scalarDivide(m * 10);

        this.C = this.C.transform(translate(dV.i, dV.j, dV.k));
    }

}

class Light{

    constructor(C, velocity = new Vector(0, 0, 0), angVelocity = new Vector(0, 0, 0)){

        this.C = C;

        this.velocity = velocity;
        this.angVelocity = angVelocity;

        // global.lights.push(this);
    }

    move(){

        this.C.i += (this.velocity.i) * 1;
        this.C.j += (this.velocity.j) * 1;
        this.C.k += (this.velocity.k) * 1;

        this.C = this.C.transform(rotateX((this.angVelocity.i) * settings.angVelConstant * 1));
        this.C = this.C.transform(rotateY((this.angVelocity.j) * settings.angVelConstant * 1));
        this.C = this.C.transform(rotateZ((this.angVelocity.k) * settings.angVelConstant * 1));
    }
} 

class Ball{

    //specular: reflectiveness
    //diffuse: brightness
    //ambient: colour in shadow

    constructor(C, R, colour = {r: 0, g: 0, b: 0}, surfaceProperties = {ambient: 0, diffuse: 0, specular: 0}, velocity = new Vector(0, 0, 0), angVelocity = new Vector(0, 0, 0)){

        this.C = C;
        this.R = R;

        this.velocity = velocity;
        this.angVelocity = angVelocity;

        this.colour = colour;
        this.surfaceProperties = surfaceProperties;

        // global.balls.push(this);
    }

    move(){

        this.C.i += (this.velocity.i) * 1;
        this.C.j += (this.velocity.j) * 1;
        this.C.k += (this.velocity.k) * 1;

        this.C = this.C.transform(rotateX((this.angVelocity.i) * settings.angVelConstant * 1));
        this.C = this.C.transform(rotateY((this.angVelocity.j) * settings.angVelConstant * 1));
        this.C = this.C.transform(rotateZ((this.angVelocity.k) * settings.angVelConstant * 1));
    }
}
