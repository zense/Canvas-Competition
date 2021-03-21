
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
 
