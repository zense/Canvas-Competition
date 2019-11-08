 // Declare all global variables here
 const constants = {
    metre: 10, // 10 Pixels / metre
    gravity: 9.8,
    friction: 1.5,
    timeStep: 5,
    velocityConstant: 10
}

// Ball type enumeration
const ballType = {
    NORMAL: 1,
    FIXED: 2,
    FOLLOW: 3
}

// Global list which contains the state
var globalList = {
    balls: [],
    ropes: []
}

// Class Ball
class Ball {
    constructor(x = 0, y = 0, mass = 3.0, density = 1.0) {}

    // Reset all forces and apply gravitational force
    resetForces() {}

    // moves the ball by time `timeStep`. `timeStep` is the amount of time passed since this function was called last
    move(timeStep) {}

    render() {}

    //Distance is a function which calculates Distance between 2 balls
    distance(other) {}

    //Angle is a function which calculates the angle between 2 balls
    angle(other) {}

    connect(other, length = 1, elasticity = 2) {}
}

// Class which connects two balls
class Rope {
    constructor(ball1, ball2, length, elasticity) {}

    exertForces() {}

    render() {}

}



