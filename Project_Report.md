
PROJECT NAME: Prism simulator
TEAM NAME: Bit it
TEAM MEMBERS: Hasanabbas Momin,Sooraj Sathish

Inspiration:

Most of our team's initial ideas were on some form of reflection like ping-pong or brick breaker . But we realized that there were a lot of projects on similar lines the past year. We wanted to be a bit unique and we hit upon refraction which did not seem to have been done. We both agreed that refraction through a prism was the best among these as there is a little bit more complexity to it compared to refraction through a slab.

What the project does:

We have built a basic prism refraction simulator. The slope of incidence can be varied by moving the mouse cursor but the point of incidence is kept fixed. This was done as we faced some difficulty in limiting the intial ray to hitting and stopping at one of the sides. The ray is then refracted according to laws of refraction. Also at the other edges if angle of incidence is greater than critical angle then Total internal Reflection takes place. So both reflection and refraction have been implemented here.

Implementation details:

First of all we have hard coded the prism by using the drawLine function three times.

Then the ray has been rendered using the ray function which takes the x and y coordinate of fixed point.The other end of the ray is the mouse cursor.

To find intersection of a ray of light and a side of prism we have defined a function intersection.

Then to simulate refraction at a surface we have defined refraction function which uses Math library functions like atan,tan,sin,asin to calulate the angles and slopes of resultant rays. If at any point the angle of incidence is greater than critical angle then reflection function is called to simulate total internal reflection.

Challenges faced:

In the beginning finding appropriate intersection point was a bit time consuming but one of us soon found a simple solution.
The next major problem was to show the TIR at the correct times. This too we figured out eventually.

Improvements possible:

The ray after TIR is just allowed to pass freely eventhough it should refract again at the third surface and so on.

We could also make our program such that the prism is also variable. That is take the sides of prism as input.`