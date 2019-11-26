## Developed for Zense HacKnight 2K19

### Authors
- Satvik Ramaprasad
- Shubhayu Das
- Rohit Katlaa
- Prajwal Agarwal
- Jishnu Kumar
    

## Instructions for users

- You need not understand the code here to be able to use it. 
- Understanding the API below should be enough
-  See [Examples](http://canvas.zense.co.in) to get started.

## API Documentation

### Helpful Canvas Variables
- **canvas.height**: Height
- **canvas.width**: Width
- **canvas.mouseX**: Current Position of mouse x coordinate
- **canvas.mouseY**: Current Position of mouse y coordinate
- **canvas.mouseDown**: Boolean to check if mouse is pressed down
- **canvas.mouseDownX**: Last Position of mouse press x coordinate
- **canvas.mouseDownY**: Last Position of mouse press y coordinate
- **canvas.drawMode**: Fill in a shape or just draw the border

### Helpful Canvas Functions
- **canvas.setDrawMode(mode)**: Set the drawMode variable to "stroke" or "fill"
- **canvas.setColor(color)**: Set the color of the shape(s) to the given color. Default color is black(#000000)
	- **Value can be any one of these types:** 
		1. "red"
		2. "#F54680"
		3. "rgb(100,100,100)"
		4. "rgba(100,100,101,0.3)"
- **canvas.setLineThickness(width)**: Set the thickness of the lines while in "fill draw mode". Default value is 1.
- **canvas.draw()**: Draws the various shapes according to the drawing mode.
- **canvas.drawLine(x1, y1, x2, y2)**: Draws line from (x1, y1) to (x2, y2)
- **canvas.drawCircle(x, y, r)**: Draws circle with center (x, y) and radius r
- **canvas.drawRectangle(x, y, width, height)**: Draws rectangle with top left corner as (x, y) and of dimensions width * height
- **canvas.drawEllipse(x, y, a, b, angle, startAngle, endAngle)**: Draws an Ellipse with center(x,y) with major axis = a, minor axis = b at an angle theta given the startAngle And Endangle
- **canvas.clear()**: Clears the canvas
- **canvas.isKeyDown(key)**: Checks if keyboard key is pressed. Example KeyA for A. 
- **canvas.drawText(x, y, message, fontSize = 30)**: Draws <message> at (x, y) 
- **canvas.activateDoubleBuffer()**: Call in setup to use double buffering in your program.
- **canvas.update()**: Updates the screen with changes made on canvas(use only with double buffering)
- **canvas.drawImg(path,x,y,width,height)**: Draws an image at (x,y). "path" argument is used to mention the path of the image (width and height of the image are optional)

### Optionally Override the following functions
- **canvas.mouseDownCallback()**: Called when mouse is pressed
- **canvas.mouseUpCallback()**: Called when mouse is released
- **canvas.mouseMoveCallback()**: Called when mouse is moved
- **canvas.keyDownCallback()**: Called when key is pressed
- **canvas.keyUpCallback()**: Called when mouse is released
- **canvas.mainFunction()**: Called after every timeStep
    
### Note:(Regarding double buffering) Double buffering is entirely optional, you may not need it in your program. It is only required if you face flickering issues.
