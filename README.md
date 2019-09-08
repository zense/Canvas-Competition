# Simple Key controller car animation

---

#### Explanation to me code

This is small example of what you can try with the code given to you. I've demonstrated a few concepts, namely:

1. How to take in and use inputs from the keyboard
2. Introducing user-controller motion
3. Implementing a slider

_Sounds like I'm using too many big words? Don't worry, I'm explaining everything below._

#### How to take inputs from the keyboard?

The `canvas.js` file given to you has some code written in it to enable the use of the keyboard.

While you need not bother about how that was done, you need to know a little about them. You can detect when a key was **pressed** and when it was **released**.

Ok... nice to know that, but how do I _use_ it?? 🤔

You will have to define a function with a very _specific_ name to use this feature. Here's the code to do it:

`canvas.keyDownCallback = function(e) { // Do something here };`

Ok, so the code above has to be written exactly like that. The only thing that you can change is what is _inside_ the function.

`e.which` is a way to get the code of the key pressed. Each key on your keyboard has its own unique code. You can find out a key's code by going to [this](https://keycode.info/) website and pressing the desired key. It will show you all the information you need.

So once you know which key was pressed, you can perform a particular piece of code.

#### User controlled motion

Using the key pressed we can program some kind of motion. In this program, the car either moves either left or right when the respective arrow keys are pressed.

Whatever you are drawing on the screen is actually redrawn 200 times every second(by default, you can change this). So if you want to animate something, you can make it move every time it is redrawn.

So if the car in this program was at (100, 100), the next time it is drawn, I move it to (101, 100) when the right arrow key is pressed. These values are only for explanation purpose. You will have to play around with the exact values as per you needs in your program.

To find the code for this, refer to the `drawCar()` function in my code (line number 84).

I add `velocity` to the current position of the car to move it to the right. To move to the left, I subtract `velocity`.

Similarly to move **up** I will have to **subtract** some positive number, while to move **down**, I will **add** some positive number.

#### Implementing a slider

This is something slightly different from the previous ones. It takes in inputs from the _mouse_.

A slider usually contains a line on the background a circular shape that you can drag on the line.

In my program, I have a simple grey rectangle, on top of which I have a black circle which you can slide. By sliding this, you can adjust the velocity of the car.

So what's the maths behind the slider? It's pretty simple:

Assume length of the slider rectangle to be 100 units.

Now when the mouse clicks and drags the slider, it moves to the left or right depending on the position of the mouse. The slider can't move past its left and right limits.

Let the leftmost position be 0, and the rightmost position be 100. Therefore by keeping track of how much the slider has moved from the left, I can assign it a value.

In my program, this value is `slider position/100`. This gives me a value between 0 and 1 (both inclusive). You can directly use the position of the slider as well.

Again, to see the exact code and implementation, refer to the `slider()` function in my program (line number 28).

For further explanations about the code, please raise an issue. I'll be glad to explain in further details, if I have the time.
