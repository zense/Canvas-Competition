// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpointfetchData
request.open('GET','https://api.rootnet.in/covid19-in/stats/latest.json', true);
var req;
request.onload = function () {
  // Begin accessing JSON data here
  req = JSON.parse(this.response);
  createGui(req.data);
}
// Send request
request.send();



function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined" ) {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }        
}

function createGui(data){
  var sortedData = [];
  for(i = 0; i < 6; i++){
    sortedData[i] = [];
    for(j = 0; j < 6; j++){
      sortedData[i][j] = data.regional[6 * i + j];
      sortedData[i][j].graph = false;
    }
  }
  var mapStateCodes = {
    "Andhra Pradesh":	"ap",
    "Arunachal Pradesh":	"ar",
    "Assam":	"as",
    "Bihar":	"br",
    "Chattisgarh": "cg",
    "Delhi": "dl",
    "Goa"	:	"ga",
    "Gujarat":	"gj",
    "Haryana": "hr",
    "Himachal Pradesh":	"hp",
    "Jammu and Kashmir":	"jk",
    "Jharkhand":	"jh",
    "Karnataka":	"ka",
    "Kerala":	"kl",
    "Lakshadweep":	"ld",
    "Madhya Pradesh":	"mp",
    "Maharashtra":	"mh",
    "Manipur":	"mn",
    "Meghalaya":	"ml",
    "Mizoram":	"mz",
    "Nagaland":	"nl",
    "Odisha":	"od",
    "Puducherry":	"py",
    "Punjab":	"pb",
    "Rajasthan":	"rj",
    "Sikkim":	"sk",
    "Tamil Nadu":	"tn",
    "Telangana":	"ts",
    "Tripura":	"tr",
    "Uttar Pradesh":	"up",
    "Uttarakhand":	"uk",
    "West Bengal":	"wb",
    "Andaman and Nicobar Islands": "an",
    "Chandigarh": "ch",
    "Dadra and Nagar Haveli and Daman and Diu": "dddn",
    "Ladakh": "la",
  }
  var dataIndex = 0;
  var mainGraph = false;
  var select = "Home";
  var blockSelector = -1;
  var colors = ["#999900", "#990000", "#99004d", "#660066", "#732626", "#000080", "#004080", "#008000", "#00802b", "#003366"];

  function checkMouse(){
    if(canvas.mouseDown){
      var x = canvas.mouseX;
      var y = canvas.mouseY;
      if(x >= 4 && x <= 92){
        if(y >= 220 && y <= 295){
          select = "Home";
        }else if(y >= 305 && y<= 380){
          select = "Indian States";
        }
      }
      if(select == "Indian States"){
        if(blockSelector == -1){
          if(y >= 10 && y <= 50){
            if(x >= 130 && x<= 170){
              if(dataIndex == 0){
                
              }else{
                dataIndex--;
              }
            }else if(x >= 730 && x <= 770){
              if(dataIndex == 5){

              }else{
                dataIndex++;
              }
            }
          }
        }else{
          if(!sortedData[dataIndex][blockSelector].graph){
            if(x >= 675 && x<=750){
              if(y>= 530 && y<=570){
                sortedData[dataIndex][blockSelector].graph = true;
                
              }
            }
            if(y >= 10 && y <= 50){
              if(x >= 130 && x<= 170){
                blockSelector = -1;
              }
            }
          }else{
            if(x >= 675 && x<=750){
              if(y>= 530 && y<=570){
                sortedData[dataIndex][blockSelector].graph = false;
              }
            }
          }
        }
        // This will check if any of the blocks have been
        // clicked or not.
        if(blockSelector == -1){
          var paddingX = 150;
          var paddingY = 170;
          for(i = 0; i < 6; i++){
            var addX = (i % 3) * 200;
            var addY = Math.floor(i / 3) * 200;
            var posX = paddingX + addX + 10;
            var posY = paddingY + addY + 10;
            if(x >= posX && x<= posX + 180){
              if(y>= posY && y <= posY + 180){
                blockSelector = i;
              }
            }
          }
        }
      }else if(select == "Home"){
        if(!mainGraph){
            if(x >= 675 && x<=750){
              if(y>= 530 && y<=570){
                mainGraph = true;
                
              }
            }
          }else{
            if(x >= 675 && x<=750){
              if(y>= 530 && y<=570){
                mainGraph = false;
              }
            }
          }
      }
    }
    main();
  }

  function setup() {
    select = "Home";
    main();
    // getRequest()
  }

  function navBar(selected) {
    var rightPadding = 4;
    var unselectedB = "#000000";
    var selectedB = "#170132";
    var unselectedBor = "#c2c2c2";
    var selectedBor = "#BB86FC";
    canvas.setDrawMode("fill")
    if(selected == "Home") {
      canvas.setColor(selectedB);
      roundRect(canvas.ctx, rightPadding, 220, 92, 75, 10, true, false);
      canvas.setColor(selectedBor);
      roundRect(canvas.ctx, rightPadding, 220, 92, 75, 10, false, true);
      canvas.setColor(unselectedB);
      roundRect(canvas.ctx, rightPadding, 305, 92, 75, 10, true, false);
      canvas.setColor(unselectedBor);
      roundRect(canvas.ctx, rightPadding, 305, 92, 75, 10, false, true);
      startPage();
    } else if(selected == "Indian States") {
      canvas.setColor(unselectedB);
      roundRect(canvas.ctx, rightPadding, 220, 92, 75, 10, true, false);
      canvas.setColor(unselectedBor);
      roundRect(canvas.ctx, rightPadding, 220, 92, 75, 10, false, true);
      canvas.setColor(selectedB);
      roundRect(canvas.ctx, rightPadding, 305, 92, 75, 10, true, false);
      canvas.setColor(selectedBor);
      roundRect(canvas.ctx, rightPadding, 305, 92, 75, 10, false, true);
      indianStates();
    }
    canvas.ctx.font='30px sans-serif';
    canvas.setColor("#BB86FC");
    canvas.drawText(20, 265, "Home", 20);
    canvas.drawText(20, 340, "Indian", 20);
    canvas.drawText(18, 360, "States", 20);
  }

// Page draws graph
  function drawGraph(obj){
    var stateName = obj.loc;
    if(stateName == "Andaman and Nicobar Islands"){
      stateName = "Andaman & Nicobar";
    }else if(stateName == "Dadra and Nagar Haveli and Daman and Diu"){
      stateName = "Dadra and Nag..";
    } else if(stateName == "Jammu and Kashmir"){
    stateName = "Jammu & Kashmir";
    }
    canvas.setDrawMode("fill");
    canvas.setColor(obj.color);
    roundRect(canvas.ctx, 200, 200, 500, 350, 15, true, false);
    canvas.setColor("#FFFFFF");
  }


// Shows the full page of india and states
  function showBlock(obj){
    var stateName = obj.loc;
    var fontSize = 30
    if(stateName == "Andaman and Nicobar Islands"){
      stateName = "Andaman & Nicobar";
    }else if(stateName == "Dadra and Nagar Haveli and Daman and Diu"){
      stateName = "Dadra and Nag..";
    } else if(stateName == "Jammu and Kashmir"){
      stateName = "Jammu & Kashmir";
    }
    canvas.setDrawMode("fill");
    canvas.setColor(obj.color);
    roundRect(canvas.ctx, 200, 200, 500, 350, 15, true, false);
    if(!obj.hasOwnProperty('printText')){
    canvas.setColor("#FFFFFF");
    var primary = 280;
    canvas.drawText(220, primary + 80, "Total Cases: ", fontSize);
    canvas.drawText(220, primary + 140, "Recovery: ", fontSize);
    canvas.drawText(220, primary + 200, "Deaths: ", fontSize);
    canvas.setColor("#3385ff");
    if(obj.loc != "Cases in India"){
      canvas.drawText(450, primary + 80, obj.confirmedCasesIndian + obj.confirmedCasesForeign, fontSize);
    }else {
      canvas.drawText(450, primary + 80, obj.total, fontSize);
    }
    canvas.setColor("#33ff33");
    canvas.drawText(450, primary + 140, obj.discharged, fontSize);
    canvas.setColor("#ff3333");
    canvas.drawText(450, primary + 200, obj.deaths, fontSize);
    if(obj.color == "#333333"){
      canvas.setColor("#BB86FC");
    }else {
      canvas.setColor("#03DAC5");
    }
    canvas.drawText(220, primary, stateName, 50);
    roundRect(canvas.ctx, 675, 530, 75, 40, 10, true, false);
    canvas.setColor("#000000");
    canvas.drawText(683, 555, "Graph", 20);
    }
  }

  function blockTest(str, posX, posY) {
    canvas.setColor("#FFFFFF");
    var strArr = str.split(' ');
    if(strArr.length == 1){
      canvas.drawText(posX + 20, posY + 90, strArr[0], 18);
    }else if(strArr.length == 2){
      canvas.drawText(posX + 20, posY + 80, strArr[0], 18);
      canvas.drawText(posX + 20, posY + 100, strArr[1], 18);
    }else if(strArr.length == 3){
      canvas.drawText(posX + 20, posY + 70, strArr[0], 18);
      canvas.drawText(posX + 20, posY + 90, strArr[1], 18);
      canvas.drawText(posX + 20, posY + 110, strArr[2], 18);
    }else if(strArr.length == 4){
      canvas.drawText(posX + 20, posY + 60, strArr[0], 18);
      canvas.drawText(posX + 20, posY + 80, strArr[1], 18);
      canvas.drawText(posX + 20, posY + 100, strArr[2], 18);
      canvas.drawText(posX + 20, posY + 120, strArr[3], 18);
    }else if(strArr.length == 8){
      canvas.drawText(posX + 20, posY + 20, strArr[0], 18);
      canvas.drawText(posX + 20, posY + 40, strArr[1], 18);
      canvas.drawText(posX + 20, posY + 60, strArr[2], 18);
      canvas.drawText(posX + 20, posY + 80, strArr[3], 18);
      canvas.drawText(posX + 20, posY + 100, strArr[4], 18);
      canvas.drawText(posX + 20, posY + 120, strArr[5], 18);
      canvas.drawText(posX + 20, posY + 140, strArr[6], 18);
      canvas.drawText(posX + 20, posY + 160, strArr[7], 18);
    }
  }

  function block(x, y, color, name="Andaman and Nicobar Islands") {
    var paddingX = 10;
    var paddingY = 10;
    canvas.setDrawMode("fill");
    canvas.setColor(color);
    roundRect(canvas.ctx, x + paddingX, y + paddingY, 180, 180, 10, true, false);
    blockTest(name, x + paddingX , y + paddingY);
  }
  var loadedGraph;

  function drawPage() {
    var list = sortedData[dataIndex];
    var paddingX = 150;
    var paddingY = 170;
    if(blockSelector == -1){
      list.forEach(function(value, index){
        if(!value.hasOwnProperty('color')){
          value.color = colors[Math.floor(Math.random() * 10)];
        }
        var addX = (index % 3) * 200;
        var addY = Math.floor(index / 3) * 200;
        block(paddingX + addX, paddingY + addY, value.color, value.loc);
      });
      paddingX = 125;
      paddingY = 15;
      canvas.setColor("#03DAC5");
      if(dataIndex != 0){
        // roundRect(canvas.ctx, paddingX, paddingY, 45, 30, 10, true, false);
        canvas.drawCircle(150, 30, 20);
      }
      if(dataIndex != 5){
        // roundRect(canvas.ctx, paddingX + 600, paddingY, 45, 30, 10, true, false);
        canvas.drawCircle(150 + 600, 30, 20);
      }
      canvas.setColor("#000000");
      canvas.drawText(paddingX + 15, paddingY + 26, "<", 30);
      canvas.drawText(paddingX + 15 + 600, paddingY + 26, ">", 30);
    }else{
      // If graph page is not open
      if(!sortedData[dataIndex][blockSelector].graph){
        showBlock(sortedData[dataIndex][blockSelector]);
        paddingX = 125;
        paddingY = 15;
        canvas.setColor("#03DAC5");
        canvas.drawCircle(150, 30, 20);
        canvas.setColor("#000000");
        canvas.drawText(paddingX + 15, paddingY + 26, "<", 30);
      }else{
        if(loadedGraph != mapStateCodes[sortedData[dataIndex][blockSelector].loc]){
          loadedGraph = mapStateCodes[sortedData[dataIndex][blockSelector].loc];
          states(loadedGraph);
        }
        showBlock({loc: "aha", color: "#FFFFFF", printText: "No"});
        // canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.setColor("#BB86FC");
        roundRect(canvas.ctx, 675, 530, 75, 40, 10, true, false);
        canvas.setColor("#000000");
        canvas.drawText(683, 555, "Back", 20);
        var ctx2 = document.getElementById("myChart");
        canvas.ctx.drawImage(ctx2, 250, 250, 400, 300);
        setTimeout(function(){
          main();
        }, 100);
      }
    }
  }

  function indianStates(){
    drawPage();
  }

  // Hud and the title code
  function createHud(){
    canvas.setDrawMode("fill");
    canvas.setColor("#333333");
    canvas.drawRectangle(0, 0, 100, 600);
    canvas.setColor("#000000");
    canvas.drawRectangle(100, 0, 700, 600);
    canvas.setColor("#FFFFFF")
    canvas.drawText(195, 130, "Covid-19 Report", 70);
  }

  function startPage(){
    if(mainGraph){
      if(loadedGraph != "mainGraph"){
        india();
        loadedGraph = "mainGraph";
      }
      showBlock({loc: "aha", color: "#FFFFFF", printText: "No"});
      // canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.setColor("#BB86FC");
      roundRect(canvas.ctx, 675, 530, 75, 40, 10, true, false);
      canvas.setColor("#000000");
      canvas.drawText(683, 555, "Back", 20);
      var ctx2 = document.getElementById("myChart");
      canvas.ctx.drawImage(ctx2, 250, 250, 400, 300);
      setTimeout(function(){
        main()
      }, 100);
    }else{
      var stateName = "Cases in India";
      var fontSize = 30;
      var obj = data.summary;
      canvas.setDrawMode("fill");
      canvas.setColor("#333333");
      roundRect(canvas.ctx, 200, 200, 500, 350, 15, true, false);
      canvas.setColor("#FFFFFF");
      var primary = 280;
      canvas.drawText(220, primary + 80, "Total Cases: ", fontSize);
      canvas.drawText(220, primary + 140, "Recovery: ", fontSize);
      canvas.drawText(220, primary + 200, "Deaths: ", fontSize);
      canvas.setColor("#3385ff");
      canvas.drawText(450, primary + 80, obj.total, fontSize);
      canvas.setColor("#33ff33");
      canvas.drawText(450, primary + 140, obj.discharged, fontSize);
      canvas.setColor("#ff3333");
      canvas.drawText(450, primary + 200, obj.deaths, fontSize);
      canvas.setColor("#03DAC5");
      canvas.drawText(220, primary, stateName, 50);
      roundRect(canvas.ctx, 675, 530, 75, 40, 10, true, false);
      canvas.setColor("#000000");
      canvas.drawText(683, 555, "Graph", 20);
    }
  }

  // Function while will be called repeatedly 
  function main() {
    canvas.clear();
    createHud();
    navBar(select);
    // canvas.draw();
  }
  // function mainlol(){}

  // Override functions here; 
  // canvas.mainFunction = mainlol;

  canvas.height = window.width;
  canvas.width = window.height;
  // var timeStep = 50;
  // canvas.startMain(timeStep);
  // canvas.setupFunction = setup;
  setup();
  canvas.mouseDownCallback = checkMouse;
}