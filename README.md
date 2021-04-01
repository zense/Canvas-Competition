
## Slab And Prism Refractore
----------------------------
#### Team Name:-ENIAC
#### Team Members:-
- Shubhanshu Agrawal IMT2020078
- Vyom Sharma IMT2020026

### Idea Of Project 
--------------------
<p>
Basic idea of the project is to show ray diagrams of refraction through glass slab and prism and give the emergence angle.
We used snell's law to calculate angles and coordinates of rays passing.
</br>
<img src="https://www.gstatic.com/education/formulas2/355397047/en/snell_s_law.svg" alt="">

In glass slab we traced out the ray diagram and calculate the angle of emergence by taking refractive index as user input.

In prism we traced out ray diagram and calculated angle of emergence and angle of deviation by taking refractive index,incident angle and refractive angle as user input.

</p>

### Instructions For Users
--------------------

- Clone the github repository.
- Run index.html
- Select your desired project
- Prism Refratore:</br> 
&emsp; Insert refractive index,incidence angle and prism angle.


-Glass Slab:</br>
&emsp; Insert Refractive index and move incident ray by clicking on red circle.

### Implementation
--------------------
- Front Page</br>
&emsp; We found a template online and did some change in it.
</br></br>
<img src="Project Image/6.png" alt="">
</br></br>
- Rectangular Slab</br>
<p>
We first made a rectangle using drawRect(in canvas.js) and then we fixed one point of incidence ray on it. The other point of the incidence ray can be moved which changes the incident angle. User need to input refractive index in the given box. Then we calulated the general coordinate on the refracted ray (in the slab) which touches the slab. Then we calculted emergent angle and draw a ray of emergence.
  </br></br>
  <img src="Project Image/1.png" alt="">
 </br>
 We made a default case which have incident angle=60 degrees which will result reflection from first surface and its emergence angle will be 60 degree.
 </br></br>
 <img src="Project Image/2.png" alt="">
 </br>
 We also tried to cover the reflection or refraction from the right side of rectangular slab.
 Also the incidence angle can only vary from 0 to 90 degrees.
 <img src="Project Image/3.png" alt="">
 </p>
 - Prism
 <p>
  Default Page is the set of two lines
  <img src="Project Image/4.png" alt="">
  
  User first need to input refractive index,angle of prism and incidence angle. We made a triangle using drawLine(in canvas.js). Then we made a incident line and a normal to the side of a triangle. We used snell's law to calculate angle of refraction and draw the line of refraction. In the end by using coordinate geometry we calculated point of emergence and emergent ray. 
  <img src="Project Image/5.png" alt="">
 
### Problems we faced
----------------------
Making the incident ray in Glass Slab Refractor to be moved dynamically by the user with the help of mouse.
- There are lot of cases in total internal refraction of Prism and Glass Slab. So we tried to cover as many cases 
  as possible in the given time limit.
- We also have to deal with the co-ordinate system in JS. As we have to calculate the point of intersections of 
   incident rays which is new for us.
   
### What we learnt
-----------------
<p>
Doing this project was great fun. We got to learn some things of a new language. We learnt various aspects of javascript,html and css and how to implement them. We also learnt the concepts of refraction.
</p>
  
  
