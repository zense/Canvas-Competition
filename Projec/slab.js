var mu;
var ia;
var x;
var y;
var len;
var flag;

//mu = prompt("Enter the refrective index of Glass Slab");
// mu=document.getElementById("ref_ind").value;
//ia = prompt("Enter the incidence angle");

function setup() {
  ia = Math.PI / 3;
  x = 900 - 200 * Math.sin(Math.PI / 3);
  y = 350 - 200 * Math.cos(Math.PI / 3);
  len = 200;
  flag = 0;
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.activateDoubleBuffer();

  //canvas.activateDoubleBuffer()
}

function glass_slab(u, i) {
  // 1st Normal
  // canvas.drawLine(900,350,900,150);
  // canvas.drawLine(900,350,900,360);
  // canvas.drawLine(900,375,900,365);
  // canvas.drawLine(900,380,900,390);
  // canvas.drawLine(900,395,900,405);

  // canvas.drawRectangle(550,350,700,300);

  //incident rays
  //canvas.drawLine(900,350,x,y);
  canvas.drawText(1400, 330, "Enter Refrective Index Here: ", (fontSize = 30));
  canvas.drawText(10, 160, "Click on the red ball and move", (fontSize = 30));
  canvas.drawText(10, 190, "your courser to change incident angle.", (fontSize = 30));
  // canvas.ctx.fillText();


  canvas.fillStyle = "#ff0f0f";
  canvas.ctx.fill();

  canvas.drawarc(900, 350, 30, 1.5 * Math.PI - i, 1.5 * Math.PI);
  if (u < 1) {
    canvas.drawLine(900, 350, 900 + 400 * Math.sin(i), 350 - 400 * Math.cos(i));
    canvas.drawText(920, 310, "e", (fontSize = 30));
    canvas.drawText(1500, 620, (180 * ia) / Math.PI, (fontSize = 30));
    canvas.drawarc(900, 350, 30, 1.5 * Math.PI, 1.5 * Math.PI + i);
  } else {
    var r = Math.asin(Math.sin(i) / u);
    var p = (300 * Math.sin(i)) / Math.sqrt(u * u - Math.sin(i) * Math.sin(i));
    //console.log(900+p);
    if (900 + p > 1250) {
      //refracted ray
      canvas.drawLine(900, 350, 1250, 350 * (1 + 1 / Math.tan(r)));

      //normal
      canvas.drawLine(
        1000,
        350 * (1 + 1 / Math.tan(r)),
        1400,
        350 * (1 + 1 / Math.tan(r))
      );

      if (u * Math.cos(r) < 1) {
        var e = Math.asin(Math.cos(r) * u);
        canvas.drawLine(
          1250,
          350 * (1 + 1 / Math.tan(r)),
          1400,
          350 * (1 + 1 / Math.tan(r)) + 200 * Math.sin(e)
        );
        canvas.drawText(
          1290,
          350 * (1 + 1 / Math.tan(r)) + 25,
          "e",
          (fontSize = 30)
        );
        var e_an = Math.asin(Math.sqrt(mu * mu - Math.sin(ia) * Math.sin(ia)));
        canvas.drawText(1500, 620, (180 * e_an) / Math.PI, (fontSize = 30));
        canvas.drawarc(1250, 350 * (1 + 1 / Math.tan(r)), 30, 0, e_an);
      } else {
        //reflected ray
        canvas.drawLine(
          1250,
          350 * (1 + 1 / Math.tan(r)),
          1250 - 350 * (Math.tan(r) - 1),
          650
        );
        canvas.ctx.strokeStyle = "#ffffff";
        canvas.ctx.stroke();
        var e = Math.asin(Math.sin(r) * u);
        canvas.drawLine(
          1250 - 350 * (Math.tan(r) - 1),
          650,
          1250 - 350 * (Math.tan(r) - 1) - 200 * Math.sin(e),
          850
        );
        canvas.drawLine();
      }
    } else {
      // 1st Refraction

      canvas.drawLine(900, 350, 900 + p, 650);
      //canvas.drawarc(900,350,30,Math.PI/2-r,Math.PI/2);
      // Normal 2
      canvas.drawLine(900 + p, 650, 900 + p, 850);
      canvas.drawLine(900 + p, 650, 900 + p, 640);
      canvas.drawLine(900 + p, 625, 900 + p, 635);
      canvas.drawLine(900 + p, 620, 900 + p, 610);
      canvas.drawLine(900 + p, 595, 900 + p, 605);

      if (u * Math.sin(r) < 1) {
        canvas.drawLine(900 + p, 650, 900 + p + 200 * Math.tan(i), 850);
        canvas.drawText(900 + p + 8, 650 + 50, "e", (fontSize = 30));
        canvas.drawText(1500, 620, (180 * ia) / Math.PI, (fontSize = 30));
        canvas.drawarc(900 + p, 650, 30, Math.PI / 2 - i, Math.PI / 2);
      } else {
        canvas.drawLine(900 + p, 650, 900 + p + 100 * Math.tan(i), 400);
      }
      // GlassSlab
      //canvas.fillRect(100,100,20,20);
    }
  }
}

function update() {
  x = canvas.mouseX;
  y = canvas.mouseY;
  ia = Math.atan((x - 900) / (y - 350));
}

function check_update() {
  console.log(flag + " " + canvas.mouseDown);
  //if (canvas.mouseDown==true)
  //{
  // console.log(x+" "+y+" "+ia);
  if (
    canvas.mouseX >= 900 - 200 * Math.sin(ia) - 30 &&
    canvas.mouseX <= 900 - 200 * Math.sin(ia) + 30 &&
    canvas.mouseY >= 350 - 200 * Math.cos(ia) - 30 &&
    canvas.mouseY <= 900 - 200 * Math.sin(ia) + 30 &&
    canvas.mouseX < 900 &&
    canvas.mouseY < 350
  ) {
    flag = 1;
  }
  //}
  // if (canvas.mouseDown==false)
  // {
  //   flag=0;
  // }
}

// Function while will be called repeatedly
function main() {
  canvas.clear();
  flag = 0;
  mu = document.getElementById("ref_ind").value;
  //canvas.drawRectangle(1490,360,300,80);
  //canvas.drawText(1520, 390, "Refractive Index", fontSize = 30);
  canvas.drawText(1620, 420, mu, (fontSize = 30));

  canvas.drawRectangle(1490, 460, 300, 80);
  canvas.drawRectangle(5, 130, 550, 70);
  canvas.drawText(1520, 490, "Incident Angle (i)", (fontSize = 30));
  canvas.drawText(1500, 520, (180 * ia) / Math.PI, (fontSize = 30));

  canvas.drawText(880, 310, "i", (fontSize = 30));

  canvas.drawRectangle(1490, 560, 300, 80);
  canvas.drawText(1510, 590, "Emergent Angle (e)", (fontSize = 30));

  canvas.drawLine(900, 350, 900, 150);
  canvas.drawLine(900, 350, 900, 360);
  canvas.drawLine(900, 375, 900, 365);
  canvas.drawLine(900, 380, 900, 390);
  canvas.drawLine(900, 395, 900, 405);
  canvas.ctx.strokeStyle = "#ffffff";
  canvas.ctx.stroke();
  canvas.drawRectangle(550, 350, 700, 300);
  canvas.drawLine(900, 350, 900 - 200 * Math.sin(ia), 350 - 200 * Math.cos(ia));
  canvas.ctx.fillStyle = "red";
  canvas.drawCircle(900 - 200 * Math.sin(ia), 350 - 200 * Math.cos(ia), 30);
  canvas.ctx.fill();
  //update();
  glass_slab(mu, ia);

  check_update();
  if (flag == 1 && canvas.mouseDown == true) {
    update();
  }
  //canvas.update()
  //console.log(ia);
}

//Override functions here;
canvas.mainFunction = main;

var timeStep = 50;
canvas.startMain(timeStep);
canvas.setupFunction = setup;
