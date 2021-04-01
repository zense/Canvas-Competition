  // Declare all global variables here
  var mu;
  var ia;
  var pa;
  var theta;
  var deviation;
  var e;
  var dev;
  // var flag;

  //mu = prompt("Enter the refrective index of Prism");
  //ia = prompt("Enter the incidence angle");
  //pa = prompt("Enter Prism angle");
  

  function setup() {
      // pa=60;
      // ia=60;
      // mu=2;
     

  }
  function prism(u,angle,incident_angle)
  {
    //To Draw The Triangle
    var apex={
        x:900,
        y:350
    };

    canvas.drawText(50, 200, "Instruction:", (fontSize = 30));
    canvas.drawText(50, 230, "You have to enter the Prism Angle,", (fontSize = 30));
    canvas.drawText(50, 260, "Incident Angle and Refrective Index", (fontSize = 30));
    canvas.drawText(50, 290, "to see the Refraction Pattern.", (fontSize = 30));


    canvas.drawText(1300, 290, "Enter the Prism Angle, Refractive Index ", (fontSize = 30));
    canvas.drawText(1300, 330, "and Incident Angle Below : ", (fontSize = 30));

    //canvas.drawText(400, 800, "Angle Of Deviat :", (fontSize = 30));

    canvas.drawLine(900,350,900+300*Math.tan(angle/2),650);
    canvas.drawLine(900,350,900-300*Math.tan(angle/2),650);
    canvas.drawLine(900+300*Math.tan(angle/2),650,900-300*Math.tan(angle/2),650);

    //To draw Normal 1
    var poin={                                                      //intersection of normal to the triangle
        x:900-700/3*Math.cos(angle/2)*Math.sin(angle/2),
        y:700/3*Math.cos(angle/2)*Math.cos(angle/2)+350
    };
    canvas.drawLine(900,1750/3,900-400*Math.cos(angle/2),1750/3-400*Math.sin(angle/2));
    
    //To draw incident line
    var theta=Math.PI/2-incident_angle+angle/2;
    canvas.drawLine(poin.x,poin.y,poin.x-300*Math.sin(theta),poin.y+300*Math.cos(theta));
    canvas.drawarc(900,350,20,angle);
    canvas.ctx.fillStyle="red";
    //canvas.drawCircle(poin.x-300*Math.sin(theta),poin.y+300*Math.cos(theta),30)
    canvas.ctx.fill();


    if (u<1 && u>0)
    {
      e=incident_angle;
      dev=Math.PI-2*incident_angle;
      canvas.drawLine(poin.x,poin.y,poin.x-300*Math.cos(angle/2 +incident_angle),poin.y-300*Math.sin(angle/2+incident_angle));
    }
     //To Draw refracted line 1
    var r=Math.asin(Math.sin(incident_angle)/u);
    var x=r-angle/2;
    var a=apex.x-(900+300*Math.tan(angle/2));
    var b=650-apex.y;
    var c=apex.x*650-(900+300*Math.tan(angle/2))*apex.y;
    var m=Math.tan(x);
    var d=poin.y-m*poin.x;
    var final_x=(c-d*a)/(a*m+b);
    var final_y=d+m*final_x;
    canvas.ctx.strokeStyle='#ffffff';
    canvas.ctx.stroke();
    canvas.drawLine(poin.x,poin.y,final_x,final_y);
    var r2=angle-r;
    

    //Normal 2
    canvas.drawLine(final_x,final_y,final_x+100*Math.cos(angle/2),final_y-100*Math.sin(angle/2));
    canvas.drawLine(final_x,final_y,final_x-100*Math.cos(angle/2),final_y+100*Math.sin(angle/2));

    var critical=Math.asin(1/u);
    if (angle>2*critical)
    {
      canvas.drawLine(final_x,final_y,final_x+Math.sin(angle/2+r2-Math.PI/2),final_y+Math.sin(angle/2+r2-Math.PI/2));
      e=r2;
    } 


    //emergence ray
    // var r2=angle-r;
    e=Math.asin(Math.sin(r2));
    var e_x=(Math.PI/2-angle/2-e);
    canvas.drawLine(final_x,final_y,final_x+100*Math.cos(e_x),final_y+100*Math.sin(e_x));

    // angle of deviation
    dev=incident_angle+e-angle

    //condition of no emergence

  }
  
  // Function while will be called repeatedly
  function main() {
    canvas.clear();
    // canvas.drawLine(900,350,900+300*Math.tan(pa/2),650);
    // canvas.drawLine(900,350,900-300*Math.tan(pa/2),650);
    // canvas.drawLine(900+300*Math.tan(pa/2),650,900-300*Math.tan(pa/2),650);
    e=0;
    dev=0;
    canvas.drawRectangle(40, 170, 500, 130);
    console.log(mu+" "+ pa + " "+ia);
    prism(mu,(pa*Math.PI)/180, (ia*Math.PI)/180);
    mu = document.getElementById("ref_p").value;
    ia = document.getElementById("inc_a").value;
    pa = document.getElementById("prs_a").value;
    canvas.drawText(570, 800, "Angle Of Emergence(e) :", (fontSize = 30));
    canvas.drawText(920, 800, (e*180)/Math.PI, (fontSize = 30));

    canvas.drawText(570, 900, "Angle Of Deviation(d) :", (fontSize = 30));
    canvas.drawText(920, 900, dev*180/Math.PI, (fontSize = 30));
    
    
  }

  // Override functions here;
  canvas.mainFunction = main;

  var timeStep = 100;
  canvas.startMain(timeStep);
  canvas.setupFunction = setup;