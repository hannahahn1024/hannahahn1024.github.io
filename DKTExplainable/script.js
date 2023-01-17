
//---------INTRO PAGE---------
var introNext = document.getElementById('introNext');

introNext.onclick = function(){
  document.getElementById('constellationExample').style.display = "block";
  document.getElementById('intro').style.display = "none";
}

//--------CONSTELLATION STUFF-----
var treeButton = document.getElementById('treeButton');
var constellationButton = document.getElementById('constellationButton');
var cReset = document.getElementById('constellationReset');
var treeConstNext = document.getElementById('constellationExampleNext');
var treeConstBack = document.getElementById('constellationExampleBack');

//click on image to make message in cloud pop up
constellationButton.onclick = function(){
  document.getElementById('rightCloudPopUp').style.display = 'inline';
}
treeButton.onclick = function(){
  document.getElementById('wrongCloudPopUp').style.display = 'inline';
}
// button to reset cloud
cReset.onclick = function(){
  document.getElementById('wrongCloudPopUp').style.display = 'none';
}
// button to go to next page
treeConstNext.onclick = function(){
  document.getElementById('brainVsComputer').style.display = "block";
  document.getElementById('constellationExample').style.display = "none";
}
// button to go to back page
treeConstBack.onclick = function(){
  document.getElementById('constellationExample').style.display = "none";
  document.getElementById('intro').style.display = "block";
  document.getElementById('rightCloudPopUp').style.display = "none";
}


//----------HUMAN VS COMPUTER STUFF----------

var brainVCPUBack =  document.getElementById('brainVCPUBack');
var brainVCPUNext = document.getElementById('brainVCPUNext');
// button to go to back page
brainVCPUBack.onclick = function(){
  document.getElementById('constellationExample').style.display = "block";
  document.getElementById('brainVsComputer').style.display = "none";
  document.getElementById('rightCloudPopUp').style.display = "none";
}

// button to go to next page
brainVCPUNext.onclick = function(){
  document.getElementById('brainVsComputer').style.display = "none";
  document.getElementById('flagsMaster').style.display = "block";
  document.getElementById('flag1Display').style.display = "none";
  document.getElementById('flag2Display').style.display = "none";
  document.getElementById('flag3Display').style.display = "none";
}


//---------FLAGS--------------------
var flag1 = document.getElementById('flag1');
var flag2 = document.getElementById('flag2');
var flag3 = document.getElementById('flag3');

flag1.onclick = function(){
  document.getElementById('flag1Display').style.display = "block";
}
flag2.onclick = function(){
  document.getElementById('flag2Display').style.display = "block";
}
flag3.onclick = function(){
  document.getElementById('flag3Display').style.display = "block";
}

var closeflag1 = document.getElementById('flags1Close');
var closeflag2 = document.getElementById('flags2Close');
var closeflag3 = document.getElementById('flags3Close');


//clicking on flag makes extended explanation pop up
closeflag1.onclick = function(){
  document.getElementById('flag1Display').style.display = "none";
}

closeflag2.onclick = function(){
  document.getElementById('flag2Display').style.display = "none";
}

closeflag3.onclick = function(){
  document.getElementById('flag3Display').style.display = "none";
}

var flagsBack = document.getElementById('flagsMasterBack');
var flagsNext = document.getElementById('flagsMasterNext');
// button to go to back page
flagsBack.onclick = function(){
  document.getElementById('flagsMaster').style.display = "none";
  document.getElementById('brainVsComputer').style.display = "block";
}
// button to go to next page
flagsNext.onclick = function(){
  document.getElementById('flagsMaster').style.display = "none";
  document.getElementById('featuresOfDKT').style.display = "block";
}


//--------BUBBLES-----------
var bubbleBack = document.getElementById("bubblesBack");
var bubbleNext = document.getElementById("bubblesNext");
// button to go to back page
bubbleBack.onclick = function(){
  document.getElementById('flagsMaster').style.display = "block";
  document.getElementById('featuresOfDKT').style.display = "none";
  document.getElementById('flag1Display').style.display = "none";
  document.getElementById('flag2Display').style.display = "none";
  document.getElementById('flag3Display').style.display = "none";
}
// button to go to next page
bubbleNext.onclick = function(){
  document.getElementById('thoughtBubble').style.display = "block";
  document.getElementById('featuresOfDKT').style.display = "none";
}

//--------DKT EXPO----------
var thoughtBubbleBack = document.getElementById("thoughtBubbleBack");
var thoughtBubbleNext = document.getElementById("thoughtBubbleNext");
// button to go to back page
thoughtBubbleBack.onclick = function(){
  document.getElementById('thoughtBubble').style.display = "none";
  document.getElementById('featuresOfDKT').style.display = "block";
}
// button to go to next page
thoughtBubbleNext.onclick = function(){
  document.getElementById('thoughtBubble').style.display = "none";
  document.getElementById('training').style.display = "block";
  document.getElementById('training1').style.display = "block";
  document.getElementById('training3').style.display = "none";
}


//--------TRAINING------------
var train = document.getElementById('training1Close');
var completeTraining = document.getElementById('training2Close');
var reset = document.getElementById('training3Close');

//buttons move you through the phases of training
train.onclick = function(){
  document.getElementById('training1').style.display = "none";
  document.getElementById('training2').style.display = "block";
}
// button to complete training
completeTraining.onclick = function(){
  document.getElementById('training2').style.display = "none";
  document.getElementById('training3').style.display = "block";
}
// button to reset training
reset.onclick = function(){
  document.getElementById('training3').style.display = "none";
  document.getElementById('training1').style.display = "block";
}

var trainBack = document.getElementById('trainingBack');
var trainNext = document.getElementById('trainingNext');
// button to go to back page
trainBack.onclick = function(){
  document.getElementById('training').style.display = "none";
  document.getElementById('thoughtBubble').style.display = "block";
}
// button to go to next page
trainNext.onclick = function(){
  document.getElementById('training').style.display = "none";
  document.getElementById('gameIntro').style.display = "block";
}
//--------GAME INTRO ---------

var gameIntroBack = document.getElementById('gameIntroBack');
var gameIntroNext = document.getElementById('gameIntroNext');
var tryIt = document.getElementById('tryIt');
// button to go to back page
gameIntroBack.onclick = function(){
  document.getElementById('training').style.display = "block";
  document.getElementById('gameIntro').style.display = "none";
}
// button to go to next page
gameIntroNext.onclick = function(){
  document.getElementById('bigPicture').style.display = "block";
  document.getElementById('gameIntro').style.display = "none";
}
// button to try the game
tryIt.onclick = function(){
  document.getElementById('game').style.display = "block";
  document.getElementById('gameIntro').style.display = "none";
}


//---------GAME---------------


//holds all the question
//a python script later to write more questions or something might be good
//PINK: addition
//GREEN: multiplication
//YELLOW: subtraction
//RED: division
//BLUE: fraction reduction
const mathQuestions = [
  {
    question: "5 + 6 = __",
    choices: ["9","11","15","30"],
    color: "pink",
    relatedColors: ["yellow", "green"],
    corAnswer: "11"
  },{
    question: "12 + 4 = __",
    choices: ["20","8","14","16"],
    color: "pink",
    relatedColors: ["yellow", "green"],
    corAnswer: "16"
  },{
    question: "15 + 17 = __",
    choices: ["32","28","35","29"],
    color: "pink",
    relatedColors: ["yellow", "green"],
    corAnswer: "32"
  },{
    question: "6 x 4 = __",
    choices: ["18","30","24","28"],
    color: "green",
    relatedColors: ["red"],
    corAnswer: "24"
  },{
    question: "9 x 7 = __",
    choices: ["49","56","48","63"],
    color: "green",
    relatedColors: ["red"],
    corAnswer: "63"
  },{
    question: "24 - 7 = __",
    choices: ["12","15","18","17"],
    color: "yellow",
    relatedColors: ["red"],
    corAnswer: "17"
  },{
    question: "12 / 4 = __",
    choices: ["3","6","12","9"],
    color: "red",
    relatedColors: ["green", "blue"],
    corAnswer: "3"
  },{
    question: "6/4 = __",
    choices: ["4/2","3","3/2","9/8"],
    color: "blue",
    relatedColors: ["red"],
    corAnswer: "3/2"
  },{
    question: "12 x 6 = __",
    choices: ["36","64","72","82"],
    color: "green",
    relatedColors: ["red"],
    corAnswer: "72"
  },{
    question: "12/9 = __",
    choices: ["3","3/4","4/3","4"],
    color: "blue",
    relatedColors: ["red"],
    corAnswer: "4/3"
  },{
    question: "16 - 9 = __",
    choices: ["13","7","11","5"],
    color: "yellow",
    relatedColors: ["red"],
    corAnswer: "7"
  },{
    question: "72 - 14 = __",
    choices: ["58","46","48","56"],
    color: "yellow",
    relatedColors: ["red"],
    corAnswer: "58"
  },{
    question: "56 / 8 = __",
    choices: ["7","9","6","8"],
    color: "red",
    relatedColors: ["green", "blue"],
    corAnswer: "7"
  },{
    question: "24 + 18 = __",
    choices: ["32","38","42","48"],
    color: "pink",
    relatedColors: ["yellow", "green"],
    corAnswer: "42"
  },{
    question: "6 x 7 = __",
    choices: ["48","42","54","58"],
    color: "green",
    relatedColors: ["red"],
    corAnswer: "42"
  },{
    question: "64 / 8 = __",
    choices: ["4","12","16","8"],
    color: "red",
    relatedColors: ["green", "blue"],
    corAnswer: "8"
  }
  // },{
  //   question: ,
  //   choices: ,
  //   color: ,
  //   relatedColors: ,
  //   corAnswer:
  // },{
  //   question: ,
  //   choices: ,
  //   color: ,
  //   relatedColors: ,
  //   corAnswer:
  // },{
  //   question: ,
  //   choices: ,
  //   color: ,
  //   relatedColors: ,
  //   corAnswer:
  // },{
  //   question: ,
  //   choices: ,
  //   color: ,
  //   relatedColors: ,
  //   corAnswer:
  // },{
  //   question: ,
  //   choices: ,
  //   color: ,
  //   relatedColors: ,
  //   corAnswer:
  // },
]

var questionSpace = document.getElementById('question');
var buttonParent = document.getElementById('game');
var choiceCollection = buttonParent.getElementsByClassName('answerChoice');
var buttonA = choiceCollection[0];
var buttonB = choiceCollection[1];
var buttonC = choiceCollection[2];
var buttonD = choiceCollection[3];
var rightWrong = document.getElementById('rightWrong');

//the Count variables say how many balls SHOULD be in the jars
//the final version shouldn't display these numbers. They're just for programmer's benefit
let questionNumber = 0;
let pinkCount = 0;
var pinkBalls = document.getElementById("pinkNum");

let greenCount = 0;
var greenBalls = document.getElementById("greenNum");

let yellowCount = 0;
var yellowBalls = document.getElementById("yellowNum");

let redCount = 0;
var redBalls = document.getElementById("redNum");

let blueCount = 0;
var blueBalls = document.getElementById("blueNum");

// displays the first question
function firstQuestion(){
  var str = mathQuestions[0].question;
  var coloredStr = str.fontcolor("pink");
  questionSpace.innerHTML = coloredStr;
  let i = 0;
  while(i<4){
    choiceCollection[i].innerHTML = mathQuestions[0].choices[i];
    i++;
  }
}
firstQuestion();

// makes the question displayed the appropriate font color and changes the question/answer choices
function updateQuestion(){
  questionNumber++;
  var str = mathQuestions[questionNumber].question;
  if (mathQuestions[questionNumber].color == "pink"){
    var coloredStr = str.fontcolor("pink");
  } else if (mathQuestions[questionNumber].color == "green"){
    var coloredStr = str.fontcolor("green");
  } else if (mathQuestions[questionNumber].color == "yellow"){
    var coloredStr = str.fontcolor("#ffd300");
  } else if (mathQuestions[questionNumber].color == "red"){
    var coloredStr = str.fontcolor("red");
  } else if (mathQuestions[questionNumber].color == "blue"){
    var coloredStr = str.fontcolor("blue");
  }
  questionSpace.innerHTML = coloredStr;
  let i = 0;
  while(i<4){
    choiceCollection[i].innerHTML = mathQuestions[questionNumber].choices[i];
    i++;
  }
}

// increases the COUNT of appropriate balls if the question was answered correctly
function addBalls(){
  if (mathQuestions[questionNumber].color == "pink"){
    pinkCount = pinkCount + 2;
    pinkBalls.innerHTML = pinkCount;
    greenCount++;
    greenBalls.innerHTML = greenCount;
    yellowCount++;
    yellowBalls.innerHTML = yellowCount;
  } else if (mathQuestions[questionNumber].color == "green"){
    greenCount += 2;
    greenBalls.innerHTML = greenCount;
    redCount++;
    redBalls.innerHTML = redCount;
  } else if (mathQuestions[questionNumber].color == "yellow"){
    yellowCount += 2;
    yellowBalls.innerHTML = yellowCount;
    redCount++;
    redBalls.innerHTML = redCount;
  } else if (mathQuestions[questionNumber].color == "red"){
    redCount = redCount + 2;
    redBalls.innerHTML = redCount;
    greenCount++;
    greenBalls.innerHTML = greenCount;
    blueCount++;
    blueBalls.innerHTML = blueCount;
  } else if (mathQuestions[questionNumber].color == "blue"){
    blueCount += 2;
    blueBalls.innerHTML = blueCount;
    redCount++;
    redBalls.innerHTML = redCount;
  }
}

// decreases COUNT of appropriate balls if question is answered wrong
function loseBalls(){
  if (mathQuestions[questionNumber].color == "pink"){
    pinkCount--;
    pinkBalls.innerHTML = pinkCount;
    greenCount--;
    greenBalls.innerHTML = greenCount;
    yellowCount--;
    yellowBalls.innerHTML = yellowCount;
  } else if (mathQuestions[questionNumber].color == "green"){
    greenCount--;
    greenBalls.innerHTML = greenCount;
    redCount--;
    redBalls.innerHTML = redCount;
  } else if (mathQuestions[questionNumber].color == "yellow"){
    yellowCount--;
    yellowBalls.innerHTML = yellowCount;
    redCount--;
    redBalls.innerHTML = redCount;
  } else if (mathQuestions[questionNumber].color == "red"){
    redCount--;
    redBalls.innerHTML = redCount;
    greenCount--;
    greenBalls.innerHTML = greenCount;
    blueCount--;
    blueBalls.innerHTML = blueCount;
  } else if (mathQuestions[questionNumber].color == "blue"){
    blueCount--;
    blueBalls.innerHTML = blueCount;
    redCount--;
    redBalls.innerHTML = redCount;
  };
  if (pinkCount<0){
    pinkCount = 0;
    pinkBalls.innerHTML = pinkCount;
  };
  if (greenCount<0){
    greenCount = 0;
    greenBalls.innerHTML = greenCount;
  };
  if (yellowCount<0){
    yellowCount = 0;
    yellowBalls.innerHTML = yellowCount;
  };
  if (redCount<0){
    redCount = 0;
    redBalls.innerHTML = redCount;
  };
  if (blueCount<0){
    blueCount = 0;
    blueBalls.innerHTML = blueCount;
  };

}

// checks and displays if correct answer was chosen
function checkAnswer(chosenAnswer) {
  if (mathQuestions[questionNumber].corAnswer == chosenAnswer){
    rightWrong.innerHTML = "RIGHT!";
    addBalls();
  } else {
    rightWrong.innerHTML = "WRONG!";
    loseBalls();
  }
}

// checks to see if the button that was clicked was the correct answer to the question
buttonA.onclick = function() {
  checkAnswer(buttonA.innerHTML);
  if (mathQuestions[questionNumber].corAnswer == buttonA.innerHTML){
    updatePinkCanvas(pinkTempX, pinkTempY);
    updateGreenCanvas(greenTempX, greenTempY);
    updateYellowCanvas(yellowTempX, yellowTempY);
    updateRedCanvas(redTempX, redTempY);
    updateBlueCanvas(blueTempX, blueTempY);
  } else {
    if (mathQuestions[questionNumber].color == "pink"){
      updatePinkWrong();
    } else if (mathQuestions[questionNumber].color == "green"){
      updateGreenWrong();
    } else if (mathQuestions[questionNumber].color == "yellow"){
      updateYellowWrong();
    } else if (mathQuestions[questionNumber].color == "red"){
      updateRedWrong();
    } else if (mathQuestions[questionNumber].color == "blue"){
      updateBlueWrong();
    }

  }

  updateQuestion();
}
buttonB.onclick = function() {
  checkAnswer(buttonB.innerHTML);
  if (mathQuestions[questionNumber].corAnswer == buttonB.innerHTML){
    updatePinkCanvas(pinkTempX, pinkTempY);
    updateGreenCanvas(greenTempX, greenTempY);
    updateYellowCanvas(yellowTempX, yellowTempY);
    updateRedCanvas(redTempX, redTempY);
    updateBlueCanvas(blueTempX, blueTempY);
  } else {
    if (mathQuestions[questionNumber].color == "pink"){
      updatePinkWrong();
    } else if (mathQuestions[questionNumber].color == "green"){
      updateGreenWrong();
    } else if (mathQuestions[questionNumber].color == "yellow"){
      updateYellowWrong();
    } else if (mathQuestions[questionNumber].color == "red"){
      updateRedWrong();
    } else if (mathQuestions[questionNumber].color == "blue"){
      updateBlueWrong();
    }
  }
  updateQuestion();
}
buttonC.onclick = function() {
  checkAnswer(buttonC.innerHTML);
  if (mathQuestions[questionNumber].corAnswer == buttonC.innerHTML){
    updatePinkCanvas(pinkTempX, pinkTempY);
    updateGreenCanvas(greenTempX, greenTempY);
    updateYellowCanvas(yellowTempX, yellowTempY);
    updateRedCanvas(redTempX, redTempY);
    updateBlueCanvas(blueTempX, blueTempY);
  } else {
    if (mathQuestions[questionNumber].color == "pink"){
      updatePinkWrong();
    } else if (mathQuestions[questionNumber].color == "green"){
      updateGreenWrong();
    } else if (mathQuestions[questionNumber].color == "yellow"){
      updateYellowWrong();
    } else if (mathQuestions[questionNumber].color == "red"){
      updateRedWrong();
    } else if (mathQuestions[questionNumber].color == "blue"){
      updateBlueWrong();
    }
  }

  updateQuestion();
}
buttonD.onclick = function() {
  checkAnswer(buttonD.innerHTML);
  if (mathQuestions[questionNumber].corAnswer == buttonD.innerHTML){
    updatePinkCanvas(pinkTempX, pinkTempY);
    updateGreenCanvas(greenTempX, greenTempY);
    updateYellowCanvas(yellowTempX, yellowTempY);
    updateRedCanvas(redTempX, redTempY);
    updateBlueCanvas(blueTempX, blueTempY);
  } else {
    if (mathQuestions[questionNumber].color == "pink"){
      updatePinkWrong();
    } else if (mathQuestions[questionNumber].color == "green"){
      updateGreenWrong();
    } else if (mathQuestions[questionNumber].color == "yellow"){
      updateYellowWrong();
    } else if (mathQuestions[questionNumber].color == "red"){
      updateRedWrong();
    } else if (mathQuestions[questionNumber].color == "blue"){
      updateBlueWrong();
    }
  }
  updateQuestion();
}

var gameBack = document.getElementById('gameBack');
var gameNext = document.getElementById('gameNext');

// button to go to back page
gameBack.onclick = function(){
  document.getElementById('training').style.display = "block";
  document.getElementById('game').style.display = "none";
}

// button to go to next page
gameNext.onclick = function(){
  document.getElementById('bigPicture').style.display = "block";
  document.getElementById('game').style.display = "none";
}

////STARTING TO WORK WITH CANVAS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//this is where we actually fill up the jars
  //might want to rewrite this entirely so to use a physics engine

let pinkTempX = 0;
let pinkTempY = 0;


var width = 120;
var height = 200;

var rad=10;
var gaps= rad*2;
var widthCount = parseInt(width/gaps);
var heightCount = parseInt(height/gaps);


//drawing pink jar
var pinkCanvas = document.getElementById("pinkCanvas");
pinkCanvas.width = width;
pinkCanvas.height = height;

var pinkContext = pinkCanvas.getContext("2d");
pinkContext.strokeStyle="white";
pinkContext.lineWidth = 12;
pinkContext.strokeRect(0,0,width,height);
pinkContext.translate(120, 200);
pinkContext.rotate(Math.PI);

//add balls to appropriate jars when pink question is answered correctly
function updatePinkCanvas(pinkX, pinkY){
  console.log("width =  "+ widthCount);

  let i = 0;

  for(var y=pinkY; y<heightCount;y++){
    for(var x=pinkX; x<widthCount;x++){
      if (mathQuestions[questionNumber].color == "pink"){
        if (i<2){
          if (i==1 && pinkX == (widthCount-1)){
            x = 0;
            console.log("activated");
          }
          console.log("pink x is " + x);
          pinkContext.fillStyle = "pink";
          pinkContext.beginPath();
          pinkContext.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true);
          pinkContext.closePath();
          pinkContext.fill();
          i++;

        }
      }
    }
  }
  pinkTempY = Math.floor(pinkCount/widthCount);
  pinkTempX = pinkCount%widthCount;

}


let greenTempX = 0;
let greenTempY = 0;

//drawing green jar
var greenCanvas = document.getElementById("greenCanvas");
greenCanvas.width = width;
greenCanvas.height = height;

var greenContext = greenCanvas.getContext("2d");
greenContext.strokeStyle="white";
greenContext.lineWidth = 12;
greenContext.strokeRect(0,0,width,height);
greenContext.translate(120, 200);
greenContext.rotate(Math.PI);


//add balls to appropriate jars when green question is answered correctly
function updateGreenCanvas(greenX, greenY){

  let i = 0;
  for(var y=greenY; y<heightCount; y++){
    for(var x=greenX; x<widthCount; x++){
      if (mathQuestions[questionNumber].color == "green"){
        if (i<2){
          if (i==1 && greenX == (widthCount-1)){
            x = 0;
          }
          greenContext.fillStyle = "green";
          greenContext.beginPath();
          greenContext.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true);
          greenContext.closePath();
          greenContext.fill();
          i++;
          console.log("x is " + x);
        }
      } else if (mathQuestions[questionNumber].color == "pink"){
        if (i<1){
          greenContext.fillStyle = "pink";
          greenContext.beginPath();
          greenContext.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true);
          greenContext.closePath();
          greenContext.fill();
          i++;
        }
      } else if (mathQuestions[questionNumber].color == "red"){
        if (i<1){
          greenContext.fillStyle = "red";
          greenContext.beginPath();
          greenContext.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true);
          greenContext.closePath();
          greenContext.fill();
          i++;
        }
      }
    }
  }

  greenTempY = Math.floor(greenCount/widthCount);
  greenTempX = greenCount%widthCount;

  console.log(greenTempX);
  console.log(greenTempY);
}


var yellowCanvas = document.getElementById("yellowCanvas");
yellowCanvas.width = width;
yellowCanvas.height = height;

// drawing yellow jar
var yellowContext = yellowCanvas.getContext("2d");
yellowContext.strokeStyle="white";
yellowContext.lineWidth = 8;
yellowContext.strokeRect(0,0,width,height);
yellowContext.translate(120, 200);
yellowContext.rotate(Math.PI);

let yellowTempX = 0;
let yellowTempY = 0;


//add balls to appropriate jars when yellow question is answered correctly
function updateYellowCanvas(yellowX, yellowY){

  let i = 0;
  for(var y=yellowY; y<heightCount;y++){
    for(var x=yellowX; x<widthCount;x++){
      if (mathQuestions[questionNumber].color == "yellow"){
        if (i<2){
          if (i==1 && yellowX == (widthCount-1)){
            x = 0;
          }
          yellowContext.fillStyle = "#ffd300";
          yellowContext.beginPath();
          yellowContext.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true);
          yellowContext.closePath();
          yellowContext.fill();
          i++;
        }
      } else if (mathQuestions[questionNumber].color == "pink"){
        if (i<1){
          yellowContext.fillStyle = "pink";
          yellowContext.beginPath();
          yellowContext.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true);
          yellowContext.closePath();
          yellowContext.fill();
          i++;
        }
      }
    }
  }
  yellowTempY = Math.floor(yellowCount/widthCount);
  yellowTempX = yellowCount%widthCount;
}

// drawing red jar
var redCanvas = document.getElementById("redCanvas");
redCanvas.width = width;
redCanvas.height = height;

var redContext = redCanvas.getContext("2d");
redContext.strokeStyle="white";
redContext.lineWidth = 8;
redContext.strokeRect(0,0,width,height);
redContext.translate(120, 200);
redContext.rotate(Math.PI);

let redTempX = 0;
let redTempY = 0;


//add balls to appropriate jars when red question is answered correctly
function updateRedCanvas(redX, redY){

  let i = 0;
  for(var y=redY; y<heightCount;y++){
    for(var x=redX; x<widthCount;x++){
      if (mathQuestions[questionNumber].color == "red"){
        if (i<2){
          if (i==1 && redX == (widthCount-1)){
            x = 0;
          }
          redContext.fillStyle = "red";
          redContext.beginPath();
          redContext.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true);
          redContext.closePath();
          redContext.fill();
          i++;
        }
      } else if (mathQuestions[questionNumber].color == "yellow"){
        if (i<1){
          redContext.fillStyle = "#ffd300";
          redContext.beginPath();
          redContext.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true);
          redContext.closePath();
          redContext.fill();
          i++;
        }
      } else if (mathQuestions[questionNumber].color == "green"){
        if (i<1){
          redContext.fillStyle = "green";
          redContext.beginPath();
          redContext.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true);
          redContext.closePath();
          redContext.fill();
          i++;
        }
      } else if (mathQuestions[questionNumber].color == "blue"){
        if (i<1){
          redContext.fillStyle = "blue";
          redContext.beginPath();
          redContext.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true);
          redContext.closePath();
          redContext.fill();
          i++;
        }
      }
    }
  }
  redTempY = Math.floor(redCount/widthCount);
  redTempX = redCount%widthCount;
}

// drawing blue jar
var blueCanvas = document.getElementById("blueCanvas");
blueCanvas.width = width;
blueCanvas.height = height;

var blueContext = blueCanvas.getContext("2d");
blueContext.strokeStyle="white";
blueContext.lineWidth = 8;
blueContext.strokeRect(0,0,width,height);
blueContext.translate(120, 200);
blueContext.rotate(Math.PI);
let blueTempX = 0;
let blueTempY = 0;


//add balls to appropriate jars when blue question is answered correctly
function updateBlueCanvas(blueX, blueY){

  let i = 0;
  //
  for(var y=blueY; y<heightCount;y++){
    for(var x=blueX; x<widthCount;x++){
      if (mathQuestions[questionNumber].color == "blue"){
        if (i<2){
          if (i==1 && blueX == (widthCount-1)){
            x = 0;
          }
          blueContext.fillStyle = "blue";
          blueContext.beginPath();
          blueContext.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true);
          blueContext.closePath();
          blueContext.fill();
          i++;
        }
      } else if (mathQuestions[questionNumber].color == "red"){
        if (i<1){
          blueContext.fillStyle = "red";
          blueContext.beginPath();
          blueContext.arc(rad+gaps*x,rad+ gaps*y, rad, 0, Math.PI*2, true);
          blueContext.closePath();
          blueContext.fill();
          i++;
        }
      }
    }
  }
  blueTempY = Math.floor(blueCount/widthCount);
  blueTempX = blueCount%widthCount;
}

// Takes out a ball from the appropriate jars when a pink question is answered incorrectly
function updatePinkWrong(){
  if (pinkTempY == 0){
    if (pinkTempX == 0){
      pinkTempY = 0;
      pinkTempX = 0;
    } else {
      pinkTempX--;
    }
  } else {
    if (pinkTempX == 0){
      pinkTempX = widthCount - 1;
      pinkTempY--;
    } else {
      pinkTempX--;
    }
  }
  pinkContext.fillStyle = "white";
  pinkContext.beginPath();
  pinkContext.arc(rad+gaps*pinkTempX,rad+ gaps*pinkTempY, rad, 0, Math.PI*2, true);
  pinkContext.closePath();
  pinkContext.fill();

  if (greenTempY == 0){
    if (greenTempX == 0){
      greenTempY = 0;
      greenTempX = 0;
    } else {
      greenTempX--;
    }
  } else {
    if (greenTempX == 0){
      greenTempX = widthCount - 1;
      greenTempY--;
    } else {
      greenTempX--;
    }
  }
  greenContext.fillStyle = "white";
  greenContext.beginPath();
  greenContext.arc(rad+gaps*greenTempX,rad+ gaps*greenTempY, rad, 0, Math.PI*2, true);
  greenContext.closePath();
  greenContext.fill();

  if (yellowTempY == 0){
    if (yellowTempX == 0){
      yellowTempY = 0;
      yellowTempX = 0;
    } else {
      yellowTempX--;
    }
  } else {
    if (yellowTempX == 0){
      yellowTempX = widthCount - 1;
      yellowTempY--;
    } else {
      yellowTempX--;
    }
  }
  yellowContext.fillStyle = "white";
  yellowContext.beginPath();
  yellowContext.arc(rad+gaps*yellowTempX,rad+ gaps*yellowTempY, rad, 0, Math.PI*2, true);
  yellowContext.closePath();
  yellowContext.fill();
}

// Takes out a ball from the appropriate jars when a green question is answered incorrectly
function updateGreenWrong(){
  if (greenTempY == 0){
    if (greenTempX == 0){
      greenTempY = 0;
      greenTempX = 0;
    } else {
      greenTempX--;
    }
  } else {
    if (greenTempX == 0){
      greenTempX = widthCount - 1;
      greenTempY--;
    } else {
      greenTempX--;
    }
  }
  greenContext.fillStyle = "white";
  greenContext.beginPath();
  greenContext.arc(rad+gaps*greenTempX,rad+ gaps*greenTempY, rad, 0, Math.PI*2, true);
  greenContext.closePath();
  greenContext.fill();

  if (redTempY == 0){
    if (redTempX == 0){
      redTempY = 0;
      redTempX = 0;
    } else {
      redTempX--;
    }
  } else {
    if (redTempX == 0){
      redTempX = widthCount - 1;
      redTempY--;
    } else {
      redTempX--;
    }
  }
  redContext.fillStyle = "white";
  redContext.beginPath();
  redContext.arc(rad+gaps*greenTempX,rad+ gaps*greenTempY, rad, 0, Math.PI*2, true);
  redContext.closePath();
  redContext.fill();
}

// Takes out a ball from the appropriate jars when a yellow question is answered incorrectly
function updateYellowWrong(){
  if (yellowTempY == 0){
    if (yellowTempX == 0){
      yellowTempY = 0;
      yellowTempX = 0;
    } else {
      yellowTempX--;
    }
  } else {
    if (yellowTempX == 0){
      yellowTempX = widthCount - 1;
      yellowTempY--;
    } else {
      yellowTempX--;
    }
  }
  yellowContext.fillStyle = "white";
  yellowContext.beginPath();
  yellowContext.arc(rad+gaps*yellowTempX,rad+ gaps*yellowTempY, rad, 0, Math.PI*2, true);
  yellowContext.closePath();
  yellowContext.fill();

  if (redTempY == 0){
    if (redTempX == 0){
      redTempY = 0;
      redTempX = 0;
    } else {
      redTempX--;
    }
  } else {
    if (redTempX == 0){
      redTempX = widthCount - 1;
      redTempY--;
    } else {
      redTempX--;
    }
  }
  redContext.fillStyle = "white";
  redContext.beginPath();
  redContext.arc(rad+gaps*redTempX,rad+ gaps*redTempY, rad, 0, Math.PI*2, true);
  redContext.closePath();
  redContext.fill();
}

// Takes out a ball from the appropriate jars when a red question is answered incorrectly
function updateRedWrong(){
  if (redTempY == 0){
    if (redTempX == 0){
      redTempY = 0;
      redTempX = 0;
    } else {
      redTempX--;
    }
  } else {
    if (redTempX == 0){
      redTempX = widthCount - 1;
      redTempY--;
    } else {
      redTempX--;
    }
  }
  redContext.fillStyle = "white";
  redContext.beginPath();
  redContext.arc(rad+gaps*redTempX,rad+ gaps*redTempY, rad, 0, Math.PI*2, true);
  redContext.closePath();
  redContext.fill();

  if (greenTempY == 0){
    if (greenTempX == 0){
      greenTempY = 0;
      greenTempX = 0;
    } else {
      greenTempX--;
    }
  } else {
    if (greenTempX == 0){
      greenTempX = widthCount - 1;
      greenTempY--;
    } else {
      greenTempX--;
    }
  }
  greenContext.fillStyle = "white";
  greenContext.beginPath();
  greenContext.arc(rad+gaps*greenTempX,rad+ gaps*greenTempY, rad, 0, Math.PI*2, true);
  greenContext.closePath();
  greenContext.fill();
  if (blueTempY == 0){
    if (blueTempX == 0){
      blueTempY = 0;
      blueTempX = 0;
    } else {
      blueTempX--;
    }
  } else {
    if (blueTempX == 0){
      blueTempX = widthCount - 1;
      blueTempY--;
    } else {
      blueTempX--;
    }
  }
  blueContext.fillStyle = "white";
  blueContext.beginPath();
  blueContext.arc(rad+gaps*blueTempX,rad+ gaps*blueTempY, rad, 0, Math.PI*2, true);
  blueContext.closePath();
  blueContext.fill();
}

// Takes out a ball from the appropriate jars when a blue question is answered incorrectly
function updateBlueWrong(){
  if (blueTempY == 0){
    if (blueTempX == 0){
      blueTempY = 0;
      blueTempX = 0;
    } else {
      blueTempX--;
    }
  } else {
    if (blueTempX == 0){
      blueTempX = widthCount - 1;
      blueTempY--;
    } else {
      blueTempX--;
    }
  }
  blueContext.fillStyle = "white";
  blueContext.beginPath();
  blueContext.arc(rad+gaps*blueTempX,rad+ gaps*blueTempY, rad, 0, Math.PI*2, true);
  blueContext.closePath();
  blueContext.fill();
  if (redTempY == 0){
    if (redTempX == 0){
      redTempY = 0;
      redTempX = 0;
    } else {
      redTempX--;
    }
  } else {
    if (redTempX == 0){
      redTempX = widthCount - 1;
      redTempY--;
    } else {
      redTempX--;
    }
  }
  redContext.fillStyle = "white";
  redContext.beginPath();
  redContext.arc(rad+gaps*redTempX,rad+ gaps*redTempY, rad, 0, Math.PI*2, true);
  redContext.closePath();
  redContext.fill();
}

// Game reset button
var gameReset = document.getElementById('gameReset');

// Clears the game to restart it
gameReset.onclick = function(){
  pinkContext.clearRect(0, 0, width, height);
  greenContext.clearRect(0, 0, width, height);
  yellowContext.clearRect(0, 0, width, height);
  redContext.clearRect(0, 0, width, height);
  blueContext.clearRect(0, 0, width, height);
  pinkTempX = 0;
  pinkTempY = 0;
  greenTempX = 0;
  greenTempY = 0;
  yellowTempX = 0;
  yellowTempY = 0;
  redTempX = 0;
  redTempY = 0;
  blueTempX = 0;
  blueTempY = 0;
  pinkCount = 0;
  greenCount = 0;
  blueCount = 0;
  yellowCount = 0;
  redCount = 0;
  pinkBalls.innerHTML = 0;
  greenBalls.innerHTML = 0;
  yellowBalls.innerHTML = 0;
  redBalls.innerHTML = 0;
  blueBalls.innerHTML = 0;
  questionNumber = 0;
  rightWrong.innerHTML = "Right/Wrong";
  firstQuestion();
}

//--------BIG PICTURE---------
var bigPicBack = document.getElementById('bigPictureBack');
var bigPicHome = document.getElementById('goHome');

// Button to go back a page
bigPicBack.onclick = function(){
  document.getElementById('game').style.display = "block";
  document.getElementById('bigPicture').style.display = "none";
}
// Button to go to the Home page
bigPicHome.onclick = function(){
  document.getElementById('intro').style.display = "block";
  document.getElementById('bigPicture').style.display = "none";
}
