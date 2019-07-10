setScreen("welcomeScreen");
var num = 0;
var ans1 = 0;
var ans2 = 0;
var ans3 = 0;
var ans4 = 0;
var ans5 = 0;
var ans6 = 0;
var ans7 = 0;
var ans8 = 0;
var ans9 = 0;
var ans10 = 0;
var ans11 = 0;
var ans12 = 0;
var ans13 = 0;
var ans14 = 0;
var ans15 = 0;
var ans16 = 0;
var ans17 = 0;
var ans18 = 0;
var ans19 = 0;
var ans20 = 0;
var ans21 = 0;
var ans22 = 0;
var ans23 = 0;
var ans24 = 0;
var ans25 = 0;
var ans26 = 0;
var ans27 = 0;
var ans28 = 0;
var ans29 = 0;
var ans30 = 0;
var ans31 = 0;
var ans32 = 0;
var ans33 = 0;
var ans34 = 0;
var ans35 = 0;
var ans36 = 0;
var ans37 = 0;
var ans38 = 0;
var ans39 = 0;
var ans40 = 0;
var ans41 = 0;
var ans42 = 0;
var ans43 = 0;
var ans44 = 0;
var ans45 = 0;
var ans46 = 0;
var ans47 = 0;
var ans48 = 0;
var ans49 = 0;
var ans50 = 0;
var ans51 = 0;
var ans52 = 0;
var ans53 = 0;
var ans54 = 0;
var ans55 = 0;
var ans56 = 0;
var ans57 = 0;
var ans58 = 0;
var ans59 = 0;
var ans60 = 0;
var ans61 = 0;
var ans62 = 0;
var ans63 = 0;
var ans64 = 0;
var xValue = 0;
var xPosition = 0;
var xCoord = 0;
var yValue = 0;
var yPosition = 0;
var yCoord = 0;
var zValue = 0;
var zPosition = 0;
var zCoord = 0;
var distance;
var zCoords = [-9,9.5,9,-10,-8,-5,-3.63,4.5,-8,-8,-10,4,-4.63,-6,4,5.5,-10,-10,-9,-9,0,-5.25,8.5,0,-8,-7,7.63,-5,-0.38,-6,-9,0.13,-7.1];
//              0 1   2  3   4  5  6    7    8  9  10 11 12   13   15  16  17  18 19 20 21    22  23 24 25 26  27  28   29 30 
//                                                              14                                                           31   32
var distances = [];
var sortedDistances = [];
var usernames = ["teen.politics.official","charlemagnes_corner","rightwingism","leftistbaby","progressive.politico","feldstein.philosophy","southern_leftist","tread.not","teen.politics.official","social.liberals","max_stirner_fanpage","makeliberalismclassicalagain","deafpatriot","angryamericans","libertylover2","refoundingfather","ancomcatz","broken.bones.and.civilizations","kiwimutualist","anpacball","individualist.libertarian","virginiaforbiden","right_wing_imperial","anarchistunity","texansocialdem","liberallibertarian","visionary.arabia","social.dem.official","palmetto_state_bluedog","sovereigntyism","lippie.liberty","massachusite","lib_confederalism"];
var sortedUsernames = [];
var maxDistance;
var maxIndex;
var pfpXCoord = 0;
var pfpYCoord = 0;
var pfpZCoord = 0;
var count = 0;
function calculateDistances(){
  for (var i = 0; i < 32; i++) {
    pfpXCoord =(getXPosition("pfp"+i)-160)/16;
    pfpYCoord =(160-(getYPosition("pfp"+i)-40))/16;
    pfpZCoord =zCoords[i];
    distance =Math.pow((Math.pow((xCoord-pfpXCoord),2)+Math.pow((yCoord-pfpYCoord),2) + Math.pow((zCoord-zCoords[i]),2)),0.5);
    console.log("("+getXPosition("pfp"+i)+","+getYPosition("pfp"+i)+")");
    console.log(((xCoord-((getXPosition("pfp"+i)-160)/16))^2));
    console.log(((yCoord-((160-(getYPosition("pfp"+i)-40))/16))^2));
    console.log(((zCoord-zCoords[i])^2));
    appendItem(distances,distance);
  }
  for (var k = 0; k < 32; k++) {
    console.log(distances);
    maxDistance = distances[0];
    for (var j = 1; j < distances.length; j++) {
      if(maxDistance < distances[j]){
        maxDistance = distances[j];
        maxIndex = j;
      }
    }
    if(maxDistance == distances[0]){
      maxIndex = 0;
    }
    console.log("maxIndex: " + maxIndex);
    insertItem(sortedDistances,0,maxDistance);
    insertItem(sortedUsernames,0,usernames[maxIndex]);
    removeItem(distances,maxIndex);
    removeItem(usernames,maxIndex);
  }
}
function displayMatches(){
  for (var l = 0; l < 10; l++) {
   setText("percent" + l,Math.round(100-(2.8868*sortedDistances[l])) + "%");
   setText("username" + l,sortedUsernames[l]);
   setProperty("percent" + l,"text-color",rgb(sortedDistances[l]*10,(1/sortedDistances[l])*255,0));
   /* showElement("lpfp"+l);
   setPosition("lpfp"+l,160,50+(l*40)); */
   console.log(sortedDistances);
   console.log(sortedUsernames);
  }
}
function endTest(){
  calculatePlacement("x");
  calculatePlacement("y");
  calculatePlacement("z");
  plotResults();
}
function calculatePlacement(variable){
  if (variable === "x"){
  xValue = (ans1 + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8 + ans9 + ans10 + ans11 + ans12 - ans13 - ans14 - ans15 - ans16 - ans17 - ans18 - ans19 - ans20 - ans21 - ans22 - ans23 - ans24)/12;
  xPosition = xValue*16+155;
  xCoord = (xValue).toFixed(2);
  }
  if (variable === "y"){
  yValue = (ans25 + ans26 + ans27 + ans28 + ans29 + ans30 + ans31 + ans32 + ans33 + ans34 - ans35 - ans36 - ans37 - ans38 - ans39 - ans40 - ans41 - ans42 - ans43 - ans44)/10;
  yPosition = yValue*16+195;
  yCoord = (-(yValue)).toFixed(2);
  }
  if (variable === "z"){
  zValue = (ans45 + ans46 + ans47 + ans48 + ans49 + ans50 + ans51 + ans52 + ans53 + ans54 - ans55 - ans56 - ans57 - ans58 - ans59 - ans60 - ans61 - ans62 - ans63 - ans64)/10;
  zPosition = zValue*16+160;
  zCoord = (zValue).toFixed(2); 
  }
}
function plotResults(){
  write("Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setPosition("dot",xPosition,yPosition);
  setPosition("bar",zPosition,364);
}
function nextQuestion(){
  num = num + 1;
  var num1 = num - 1;
  var previousSlider = "slider" + num1;
  var previousQuest = "text_area" + num1;
  var currentSlider = "slider" + num;
  var currentQuest = "text_area" + num;
  if(num > 1){
  hideElement(previousSlider);
  hideElement(previousQuest);
  }
  console.log(currentSlider);
  showElement(currentSlider);
  console.log(currentQuest);
  showElement(currentQuest);
}
function hidePfps(){
  for (var z = 0; z < zCoords.length; z++) {
    hideElement("pfp"+z);
  }
}
function showPfps(){
  for (var q = 0; q < zCoords.length; q++) {
    showElement("pfp"+q);
  }
}
onEvent("button1","click",function(){
  setScreen("gameScreen");
  setStyle("numline", "z-index: -10");
  hide();
  penUp();
  moveTo(0,-3);
  penDown();
  penWidth(15);
  penColor("white");
  turnRight();
  nextQuestion();
});
onEvent("slider1","change",function(){
  moveForward(5);
  ans1 = getNumber("slider1");
  nextQuestion();
});
onEvent("slider2","change",function(){
  moveForward(5);
  ans2 = getNumber("slider2");
  nextQuestion();
});
onEvent("slider3","change",function(){
  moveForward(5);
  ans3 = getNumber("slider3");
  nextQuestion();
});
onEvent("slider4","change",function(){
  moveForward(5);
  ans4 = getNumber("slider4");
  nextQuestion();
});
onEvent("slider5","change",function(){
  moveForward(5);
  ans5 = getNumber("slider5");
  nextQuestion();
});
onEvent("slider6","change",function(){
  moveForward(5);
  ans6 = getNumber("slider6");
  nextQuestion();
});
onEvent("slider7","change",function(){
  moveForward(5);
  ans7 = getNumber("slider7");
  nextQuestion();
});
onEvent("slider8","change",function(){
  moveForward(5);
  ans8 = getNumber("slider8");
  nextQuestion();
});
onEvent("slider9","change",function(){
  moveForward(5);
  ans9 = getNumber("slider9");
  nextQuestion();
});
onEvent("slider10","change",function(){
  moveForward(5);
  ans10 = getNumber("slider10");
  nextQuestion();
});
onEvent("slider11","change",function(){
  moveForward(5);
  ans11 = getNumber("slider11");
  nextQuestion();
});
onEvent("slider12","change",function(){
  moveForward(5);
  ans12 = getNumber("slider12");
  nextQuestion();
});
onEvent("slider13","change",function(){
  moveForward(5);
  ans13 = getNumber("slider13");
  nextQuestion();
});
onEvent("slider14","change",function(){
  moveForward(5);
  ans14 = getNumber("slider14");
  nextQuestion();
});
onEvent("slider15","change",function(){
  moveForward(5);
  ans15 = getNumber("slider15");
  nextQuestion();
});
onEvent("slider16","change",function(){
  moveForward(5);
  ans16 = getNumber("slider16");
  nextQuestion();
});
onEvent("slider17","change",function(){
  moveForward(5);
  ans17 = getNumber("slider17");
  nextQuestion();
});
onEvent("slider18","change",function(){
  moveForward(5);
  ans18 = getNumber("slider18");
  nextQuestion();
});
onEvent("slider19","change",function(){
  moveForward(5);
  ans19 = getNumber("slider19");
  nextQuestion();
});
onEvent("slider20","change",function(){
  moveForward(5);
  ans20 = getNumber("slider20");
  nextQuestion();
});
onEvent("slider21","change",function(){
  moveForward(5);
  ans21 = getNumber("slider21");
  nextQuestion();
});
onEvent("slider22","change",function(){
  moveForward(5);
  ans22 = getNumber("slider22");
  nextQuestion();
});
onEvent("slider23","change",function(){
  moveForward(5);
  ans23 = getNumber("slider23");
  nextQuestion();
});
onEvent("slider24","change",function(){
  moveForward(5);
  ans24 = getNumber("slider24");
  nextQuestion();
});
onEvent("slider25","change",function(){
  moveForward(5);
  ans25 = getNumber("slider25");
  nextQuestion();
});
onEvent("slider26","change",function(){
  moveForward(5);
  ans26 = getNumber("slider26");
  nextQuestion();
});
onEvent("slider27","change",function(){
  moveForward(5);
  ans27 = getNumber("slider27");
  nextQuestion();
});
onEvent("slider28","change",function(){
  moveForward(5);
  ans28 = getNumber("slider28");
  nextQuestion();
});
onEvent("slider29","change",function(){
  moveForward(5);
  ans29 = getNumber("slider29");
  nextQuestion();
});
onEvent("slider30","change",function(){
  moveForward(5);
  ans30 = getNumber("slider30");
  nextQuestion();
});
onEvent("slider31","change",function(){
  moveForward(5);
  ans31 = getNumber("slider31");
  nextQuestion();
});
onEvent("slider32","change",function(){
  moveForward(5);
  ans32 = getNumber("slider32");
  nextQuestion();
});
onEvent("slider33","change",function(){
  moveForward(5);
  ans33 = getNumber("slider33");
  nextQuestion();
});
onEvent("slider34","change",function(){
  moveForward(5);
  ans34 = getNumber("slider34");
  nextQuestion();
});
onEvent("slider35","change",function(){
  moveForward(5);
  ans35 = getNumber("slider35");
  nextQuestion();
});
onEvent("slider36","change",function(){
  moveForward(5);
  ans36 = getNumber("slider36");
  nextQuestion();
});
onEvent("slider37","change",function(){
  moveForward(5);
  ans37 = getNumber("slider37");
  nextQuestion();
});
onEvent("slider38","change",function(){
  moveForward(5);
  ans38 = getNumber("slider38");
  nextQuestion();
});
onEvent("slider39","change",function(){
  moveForward(5);
  ans39 = getNumber("slider39");
  nextQuestion();
});
onEvent("slider40","change",function(){
  moveForward(5);
  ans40 = getNumber("slider40");
  nextQuestion();
});
onEvent("slider41","change",function(){
  moveForward(5);
  ans41 = getNumber("slider41");
  nextQuestion();
});
onEvent("slider42","change",function(){
  moveForward(5);
  ans42 = getNumber("slider42");
  nextQuestion();
});
onEvent("slider43","change",function(){
  moveForward(5);
  ans43 = getNumber("slider43");
  nextQuestion();
});
onEvent("slider44","change",function(){
  moveForward(5);
  ans44 = getNumber("slider44");
  nextQuestion();
});
onEvent("slider45","change",function(){
  moveForward(5);
  ans45 = getNumber("slider45");
  nextQuestion();
});
onEvent("slider46","change",function(){
  moveForward(5);
  ans46 = getNumber("slider46");
  nextQuestion();
});
onEvent("slider47","change",function(){
  moveForward(5);
  ans47 = getNumber("slider47");
  nextQuestion();
});
onEvent("slider48","change",function(){
  moveForward(5);
  ans48 = getNumber("slider48");
  nextQuestion();
});
onEvent("slider49","change",function(){
  moveForward(5);
  ans49 = getNumber("slider49");
  nextQuestion();
});
onEvent("slider50","change",function(){
  moveForward(5);
  ans50 = getNumber("slider50");
  nextQuestion();
});
onEvent("slider51","change",function(){
  moveForward(5);
  ans51 = getNumber("slider51");
  nextQuestion();
});
onEvent("slider52","change",function(){
  moveForward(5);
  ans52 = getNumber("slider52");
  nextQuestion();
});
onEvent("slider53","change",function(){
  moveForward(5);
  ans53 = getNumber("slider53");
  nextQuestion();
});
onEvent("slider54","change",function(){
  moveForward(5);
  ans54 = getNumber("slider54");
  nextQuestion();
});
onEvent("slider55","change",function(){
  moveForward(5);
  ans55 = getNumber("slider55");
  nextQuestion();
});
onEvent("slider56","change",function(){
  moveForward(5);
  ans56 = getNumber("slider56");
  nextQuestion();
});
onEvent("slider57","change",function(){
  moveForward(5);
  ans57 = getNumber("slider57");
  nextQuestion();
});
onEvent("slider58","change",function(){
  moveForward(5);
  ans58 = getNumber("slider58");
  nextQuestion();
});
onEvent("slider59","change",function(){
  moveForward(5);
  ans59 = getNumber("slider59");
  nextQuestion();
});
onEvent("slider60","change",function(){
  moveForward(5);
  ans60 = getNumber("slider60");
  nextQuestion();
});
onEvent("slider61","change",function(){
  moveForward(5);
  ans61 = getNumber("slider61");
  nextQuestion();
});
onEvent("slider62","change",function(){
  moveForward(5);
  ans62 = getNumber("slider62");
  nextQuestion();
});
onEvent("slider63","change",function(){
  moveForward(5);
  ans63 = getNumber("slider63");
  nextQuestion();
});
onEvent("slider64","change",function(){
  moveForward(5);
  ans64 = getNumber("slider64");
  showElement("button2");
  hideElement("slider64");
});
onEvent("button2","click",function(){
  setScreen("testResults");
  setStyle("dot", "z-index: 10");
  hide();
  endTest();
});
onEvent("button3", "click", function(){
  setScreen("creditsScreen");
});
onEvent("button4", "click", function(){
  if(count == 0){
    calculateDistances();
    setScreen("testResults2");
    displayMatches();
    count++;
  } else {
    setScreen("testResults2");
  }
});
onEvent("button5", "click", function(){
  setScreen("testResults");
});
onEvent("radio_button1","click",function(){
  showElement("symbols");
  hideElement("images");
  hideElement("labels");
  hidePfps();
  hideElement("2020");
});
onEvent("radio_button2","click",function(){
  showElement("images");
  hideElement("symbols");
  hideElement("labels");
  hidePfps();
  hideElement("2020");
});
onEvent("radio_button4","click",function(){
  hideElement("images");
  hideElement("symbols");
  showElement("labels");
  hidePfps();
  hideElement("2020");
});
onEvent("radio_button5","click",function(){
  hideElement("images");
  hideElement("symbols");
  hideElement("labels");
  showPfps();
  hideElement("2020");
});
onEvent("radio_button3","click",function(){
  hideElement("images");
  hideElement("symbols");
  hideElement("labels");
  hidePfps();
  showElement("2020");
});