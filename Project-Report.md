<h1 align = "center">Scribble Board</h1>
<h4 align = "right">TEAM - INFIN8LOOP&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</h4>
<h4 align = "right">CREATORS - Rachit Agrawal, Saket Gurjar</h4>
<h2>Idea Behind our Project</h2>
<p>Often there are times, when one needs a rough pad while on computer just for jotting down ideas in his/her mind or just for sketching. Our project provides you with an easy to use virtual scribble board to put your thoughts onto and implement them easily while increasing your efficiency ! Our scribble board provides a user with numerous features :</p>
<h3> Tools </h3>
<ul>
  <li> Brush : A tool for scribbling free hand on the board. Just drag on the board and the corresponding path will be drawn with the selected colour, transparency and line width </li>
  <li> Eraser : A tool for erasing the contents on the screen. Just drag on the board and the corresponding path will be erased with the selected line width </li>
  <li> TextBox : A tool for writing text on the the screen. Enter the text to be written in the text box which appears at the bottom left corner of your screen. Make sure to enter \n at the end of each line to indicate the presence of a new line. Clicking on the drawing screen will draw the text on the board with the selected colour, transparency and line width</li>
  <li> Line : A tool for drawing lines across the board. Just drag on the board and the corresponding line between the starting point and the finish point will be drawn with the selected colour, transparency and line width </li>
  <li> Rectangle: A tool for drawing rectangles across the board. Just drag on the board and the corresponding rectangle between the starting point and the finish point will be drawn with the selected colour, transparency and line width</li>
  <li> Ellipse: A tool for drawing ellipses across the board. Just drag on the board and the corresponding ellipse between the starting point and the finish point will be drawn with the selected colour, transparency and line width </li>
  <li> Clear Screen : A tool for clearing out the board screen. Just click on the tool to clear the screen.</li>
</ul>
<p> Note - Only one tool can be selected at once</p>

<p>Default Screen Of Scribble Board</p>
![Default Screen Of Scribble Board](https://user-images.githubusercontent.com/34854802/111913173-f5491d80-8a92-11eb-9da0-a1c3956b8c74.PNG)

<h3> Colours And Transparency</h3>
<p> Our board provides a user with an option to choose from a total of 16,777,216 colour combinations. These combinations can be selected by chosing the respective RGB component by clicking on the red, green and blue bar provided above the tools. An arrow at the bottom of each bar indicates the current red, green, or blue component chosen. The left most position indicates a value of 0 and the right most position indicates a value of 255. The corresponding colour formed by selecting the RGB values is shown in a square, present at at the left of the red colour bar. The default colur on loading the scribble board is white.</p>
<p>Similarly a bar has been provided for controlling the transparency of the colour selected. The left most position indicates full transparency where as the right most position indicates full opacity.</p>
<p>These colour combinations along with the transparency can be selected and used with brush tool, textbox tool, line tool, rectangle tool and ellipse tool.</p>

<h3>Line Width</h3>
<p> Our board also provides with an option to choose the line width while using brush tool, eraser tool, textbox tool, line tool, rectangle tool and ellipse tool. This width can range from 0.1 to 30. The default value for it is 0.1. To change the line width for any tool, click on the the bar containing '+' and '-' symbols at it's ends. An arrow at the bottom of the bar indicates the value chosen. The corresponding width along with the colour is previewed as a circle on the right of the bar.</p>

<p>Different tools and features used in the board</p>
![Different tools used in the board](https://user-images.githubusercontent.com/34854802/111913377-e2831880-8a93-11eb-99e1-947773f5efed.PNG)

<h2>Implementation</h2>
<p> We began implementing our project by dividing the canvas into 2 parts, one part for the board where the drawing occurs and the other for the tools and colour,transparency and line width selection. Then we made rectangles for each of the tools and selections and coloured them accordingly and added some images of different tools to the corresponding tools. We made an event listener which tracks the clicking down of mouse. It has various conditions for tracking where the mouse is clicked. If the mouse is clicked on a tool the tool gets selected, if it is clicked on the selection bars then relative to where it is clicked on the bar the RGB value, the transparency value and the line width is set. If the mouse is clicked on the scribbling area, then another event listener which gets activated whenever the mouse is moved checks which tool is currently selected and according to the properties of that tool action is taken on the scribbling board. Another event listener checks when the mouse click is released.</p>
<p> To implement the draw and erase tools a function was defined under the mousemove event which draws a line to the current x and y values of the mouse with the selected colour, transparency and line width. If erase tool is selected the colour is set to the background colour and transparency to 0. To implement line, rectangle, and ellipse tools we took the initital position of the mouse when the dragging was started and the final position of the mouse when dragging ended. Then the line, or rectangle or the ellipse was drawn by making some manipulations to these initial and final coordinates. To implement the clear screen the drawing part of the screen was filled with a rectangle with the colour same as background colour.</p>
<p> For implementing the RGB selection alongwith the transparency and line width selection a function was made which took the x coordinates of the left most edge of the selection bar and the current position of the mouse and then mapped the distance between them to the corresponding selection by applying a formula and returned that value. The RGB values, transparency values and line width values where mapped within the range 0 to 255, 0 to 1 and 0.1 to 30 respectively.</p>
<p> For implementing the text box, input was taken by a HTML input textbox which kept updating the value of the string. The strokeText method of the canvas was used to show the text on the screen with the position as where the mouse was clicked.</p>

<h2>Problems Faced During Implementation</h2>
<p> We faced quite a few problems during implementation. Some of the major ones are listed below
<ul>
<li>During the implementation of the transparency feature we faced an issue that the patterns drawn were having many dark spots in them and the output was not uniform. This was happening because the canvas used to overlap some points during drawing which because of being transparent on getting stacked upon each other made dark spots in the pattern. To overcome this problem we made two hidden canvases freezecanvas and offscreencanvas. Whenever we draw something it is drawn onto the offscreencanvas with 0 transparency and then the offscreencanvas is drawn onto the main canvas with the corresponding transparency. Then the current contents of the main canvas are drawn onto the freeze canvas. Whenever drawing mode is selected and mouse is clicked on the drawing area the offscreencanvas is cleared. During dragging the mouse the main canvas is cleared and then the freezecanvas contents are drawn into it with 0 transparency and offscreencanvas contents are drawn into it with the selected transparency</li>
<li>Implementing text box was a tough job. We tried implementing the text box with a dialogue box however it was not aesthatically pleasing. So for a better representation we created a HTML 'div' object which contained a form containing a textbox. The string in the text box was accessed using it's id mentioned during initialisation. Although this was working but it was not possible to draw multiline text on the board as the escape character used by HTML to indicate a new line was a space. So we decided to let user input \n at the end of each line. We split the string by "\n" and then used a loop to iterate over each line and draw it on the board. Some characters like 'g' where getting drawn on the toolbox area beyond the drawing screen. So we implemented an if check for the same</li>
<li>Another problem faced was that while trying to draw beyond the borders of the screen the line was not getting drawn at the borders of the screen. So we made a check to draw at the borders of the screen if the mouse gets dragged beyond the boundaries</li>
</ul>

<h2>Learnings from the Project</h2>
<p>We learnt a great deal while making this project. We learnt about canvas, javascript and a bit about HTML and CSS. We were able to discover the wide scope of the canvas tool to implement UI for various purposes. We discovered the field of web development and it was a good start into the same.</p>
<p>We also learned about collaborating in a team and making a group project. We also realised the importance of version control systems such as github during our progress. Overall we learnt a lot and it was fun and exciting </p>
