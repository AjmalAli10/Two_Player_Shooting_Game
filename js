var playerName ="" ;
let plrOnehealth = 100;
let plrTwohealth = 100;
let roundOnescrplr1;
let roundOnescrplr2;
let roundTwoscrplr1;
let roundTwoscrplr2;
let roundThreescrplr1;
let roundThreescrplr2;
let roundFourscrplr1;
let roundFourscrplr2;
let roundFivescrplr1;
let roundFivecrplr2;
document.getElementById("btnTwo").disabled = true;
document.getElementById("btnThree").disabled = true;
document.getElementById("btnFour").disabled = true;
document.getElementById("btnFive").disabled = true;
function startgameOne() {
 console.log("called");
 let ask = prompt("What's Your Name");
 playerName = ask;
 var txt;
 var hit;
    if (confirm("Your Oponent is AJMAL!!")) {
        if (confirm("start hitting Ajmal Now!")) {
          var randomPower = generateRandom(5);
          hitHim(randomPower);
        }
    } 
    else {
        txt = "No";
    }
 //  if (confirm("start hitting Ajmal Now!")) {
 //        hit = "hited";
 // var randomPower = generateRandom(5);
 //     hitHim(randomPower);
 //  } 
 //    else {
 //        hit = "left";
 //    } 
}
function generateRandom(maxLimit = 100){
  let rand = Math.random() * maxLimit;

  rand = Math.floor(rand); // 99

  return Math.trunc(rand);
}
// startgameOne();
function hitHim(randomPower){
  let power = randomPower
console.log(power);
switch (power) {
  case 0:
    power = 0;
    plrTwohealth = plrTwohealth - 0;
    break;
  case 1:
    power = 1;
    plrTwohealth= plrTwohealth - 10;
    break;
  case 2:
    power = 2;
    plrTwohealth = plrTwohealth - 20;
    break;
  case 3:
    power = 3;
    plrTwohealth = plrTwohealth - 30;
    break;
  case 4:
   power = 4;
    plrTwohealth = plrTwohealth - 40;
    break;
  case 5:
    power = 5;
    plrTwohealth = plrTwohealth - 50;
    break;
  
}
 if (plrTwohealth >  0){
var randomPower = generateRandom(5);
  hitBack(generateRandom(randomPower)); 
 }
else if (plrTwohealth  == 0){
        roundResult();
}  
 else if (plrTwohealth  <  0) {
   roundResult();
 }
}
// function chkhealthTwo(){
//     if(plrTwohealth < 100){
//        if (confirm("He hits you back and stll alive...HIT HIM AGAIN")) {
//         hitHim(5);
//     } else {
//         console.log(plrTwohealth);
//     }
//     } 
// }
function hitBack(num){
console.log(num);
     let power = num
switch (power) {
  case 0:
    power = 0;
    plrOnehealth = plrOnehealth - 0;
    break;
  case 1:
    power = 1;
    plrOnehealth= plrOnehealth - 10;
    break;
  case 2:
    power = 2;
    plrOnehealth = plrOnehealth - 20;
    break;
  case 3:
    power = 3;
    plrOnehealth= plrOnehealth - 30;
    break;
  case 4:
   power = 4;
    plrOnehealth = plrOnehealth - 40;
    break;
  case 5:
    power = 5;
    plrOnehealth = plrOnehealth - 50;
    break;
  
}
 if (plrOnehealth >  0){
var randomPower = generateRandom(5);
  hitHim(randomPower); 
 }
else if (plrOnehealth  == 0){
   roundResult();
}  
 else if (plrOnehealth  <  0) {
   roundResult();
 }
}
function roundResult(){
if(plrOnehealth == plrTwohealth){
  roundOnescrplr1 = 0;
  roundOnescrplr2 = 0;
  document.getElementById("gOneplr1").innerHTML = roundOnescrplr1;
  document.getElementById("gOneplr2").innerHTML = roundOnescrplr2;
  if (confirm("Match is Draw!!  Go ahead for the 2nd round")) {
     document.getElementById("btnTwo").disabled = false;
      document.getElementById("btnOne").disabled = true;
    document.getElementById("btnOne").innerHTML = "round1-cmpltd";
    } else {
        document.getElementById("btnTwo").disabled = true;
    }

}
else if (plrOnehealth  < plrTwohealth ){
  roundOnescrplr1 = 0;
  roundOnescrplr2 = 1;
  document.getElementById("gOneplr1").innerHTML = roundOnescrplr1;
  document.getElementById("gOneplr2").innerHTML = roundOnescrplr2;
  if (confirm("AJmal Won...Don't Worry!! Go ahead for the 2nd round")) {
     document.getElementById("btnTwo").disabled = false;
     document.getElementById("btnOne").disabled = true;
    document.getElementById("btnOne").innerHTML = "round1-cmpltd";
    } else {
        document.getElementById("btnTwo").disabled = true;
    } 
}  
else if (plrOnehealth  > plrTwohealth ){
  roundOnescrplr1 = 1;
  roundOnescrplr2 = 0;
  document.getElementById("gOneplr1").innerHTML = roundOnescrplr1;
  document.getElementById("gOneplr2").innerHTML = roundOnescrplr2;
  if (confirm("Congo You Won...Please Go ahead for the 2nd round")) {
     document.getElementById("btnTwo").disabled = false;
    document.getElementById("btnOne").disabled = true;
    document.getElementById("btnOne").innerHTML = "round1-cmpltd";
    } else {
        document.getElementById("btnTwo").disabled = true;
    } 
}  
}
function startgameTwo(){
 plrOnehealth = 100;
 plrTwohealth = 100;
 var txt;
 var hit;
    if (confirm("Lets Start the second round")) {
        txt = "Yes";
    } else {
        txt = "No";
    }
  if(txt = "Yes"){
  if (confirm("Start hiting Azmal Again")) {
        hit = "hited";
 var randomPower = generateRandom(5);
     hitHimtwo(randomPower);
      
    }
    else {
        hit = "left";
    } 
   }
}
function hitHimtwo(randomPower){
  let power = randomPower
console.log(power);
switch (power) {
  case 0:
    power = 0;
    plrTwohealth = plrTwohealth - 0;
    hitBack(5);
    break;
  case 1:
    power = 1;
    plrTwohealth= plrTwohealth - 10;
    break;
  case 2:
    power = 2;
    plrTwohealth = plrTwohealth - 20;
    break;
  case 3:
    power = 3;
    plrTwohealth = plrTwohealth - 30;
    break;
  case 4:
   power = 4;
    plrTwohealth = plrTwohealth - 40;
    break;
  case 5:
    power = 5;
    plrTwohealth = plrTwohealth - 50;
    break;
  
}
 if (plrTwohealth >  0){
var randomPower = generateRandom(5);
  hitBacktwo(generateRandom(randomPower)); 
 }
else if (plrTwohealth  == 0){
        roundResulttwo();
}  
 else if (plrTwohealth  <  0) {
   roundResulttwo();
 }
}
function hitBacktwo(num){
console.log(num);
     let power = num
switch (power) {
  case 0:
    power = 0;
    plrOnehealth = plrOnehealth - 0;
    break;
  case 1:
    power = 1;
    plrOnehealth= plrOnehealth - 10;
    break;
  case 2:
    power = 2;
    plrOnehealth = plrOnehealth - 20;
    break;
  case 3:
    power = 3;
    plrOnehealth= plrOnehealth - 30;
    break;
  case 4:
   power = 4;
    plrOnehealth = plrOnehealth - 40;
    break;
  case 5:
    power = 5;
    plrOnehealth = plrOnehealth - 50;
    break;
  
}
 if (plrOnehealth >  0){
var randomPower = generateRandom(5);
  hitHimtwo(generateRandom(randomPower)); 
 }
else if (plrOnehealth  == 0){
   roundResulttwo();
}  
 else if (plrOnehealth  <  0) {
   roundResulttwo();
 }
}
function roundResulttwo(){
if(plrOnehealth == plrTwohealth){
  roundTwoscrplr1 = 0;
  roundTwoscrplr2 = 0;
  document.getElementById("gTwoplr1").innerHTML = roundTwoscrplr1;
  document.getElementById("gTwoplr2").innerHTML = roundTwoscrplr2;
  if (confirm("Match is Draw!!  Go ahead for the 3rd round")) {
     document.getElementById("btnThree").disabled = false;
    document.getElementById("btnTwo").disabled = true;
    document.getElementById("btnTwo").innerHTML = "round2-cmpltd";
     
    } else {
         document.getElementById("btnThree").disabled = true;
    }

}
else if (plrOnehealth  < plrTwohealth ){
  roundTwoscrplr1 = 0;
  roundTwoscrplr2 = 1;
  document.getElementById("gTwoplr1").innerHTML =  roundTwoscrplr1;
  document.getElementById("gTwoplr2").innerHTML = roundTwoscrplr2;
  if (confirm("Ajmal Won...Don't Worry!! Go ahead for the 3rd round")) {
     document.getElementById("btnThree").disabled = false;
     document.getElementById("btnTwo").disabled = true;
    document.getElementById("btnTwo").innerHTML = "round2-cmpltd";
    } else {
        document.getElementById("btnThree").disabled = true;
    } 
}  
else if (plrOnehealth  > plrTwohealth ){
  roundTwoscrplr1 = 1;
  roundTwoscrplr2 = 0;
  document.getElementById("gTwoplr1").innerHTML = roundTwoscrplr1;
  document.getElementById("gTwoplr2").innerHTML = roundTwoscrplr2;
  if (confirm("Congo You Won...Please Go ahead for the 3rd round")) {
     document.getElementById("btnThree").disabled = false;
    document.getElementById("btnTwo").disabled = true;
    document.getElementById("btnTwo").innerHTML = "round2-cmpltd";
    } else {
        document.getElementById("btnThree").disabled = true;
    } 
}  
}

function startgameThree(){
 plrOnehealth = 100;
 plrTwohealth = 100;
 var txt;
 var hit;
    if (confirm("Lets Start the third round")) {
        txt = "Yes";
    } else {
        txt = "No";
    }
  if(txt = "Yes"){
  if (confirm("Start hiting Ajmal Again")) {
        hit = "hited";
 var randomPower = generateRandom(5);
     hitHimthree(randomPower);
      
    }
    else {
        hit = "left";
    } 
   }
}
function hitHimthree(randomPower){
  let power = randomPower
console.log(power);
switch (power) {
  case 0:
    power = 0;
    plrTwohealth = plrTwohealth - 0;
    hitBack(5);
    break;
  case 1:
    power = 1;
    plrTwohealth= plrTwohealth - 10;
    break;
  case 2:
    power = 2;
    plrTwohealth = plrTwohealth - 20;
    break;
  case 3:
    power = 3;
    plrTwohealth = plrTwohealth - 30;
    break;
  case 4:
   power = 4;
    plrTwohealth = plrTwohealth - 40;
    break;
  case 5:
    power = 5;
    plrTwohealth = plrTwohealth - 50;
    break;
  
}
 if (plrTwohealth >  0){
var randomPower = generateRandom(5);
  hitBackthree(generateRandom(randomPower)); 
 }
else if (plrTwohealth  == 0){
        roundResultthree();
}  
 else if (plrTwohealth  <  0) {
   roundResultthree();
 }
}
function hitBackthree(num){
console.log(num);
     let power = num
switch (power) {
  case 0:
    power = 0;
    plrOnehealth = plrOnehealth - 0;
    break;
  case 1:
    power = 1;
    plrOnehealth= plrOnehealth - 10;
    break;
  case 2:
    power = 2;
    plrOnehealth = plrOnehealth - 20;
    break;
  case 3:
    power = 3;
    plrOnehealth= plrOnehealth - 30;
    break;
  case 4:
   power = 4;
    plrOnehealth = plrOnehealth - 40;
    break;
  case 5:
    power = 5;
    plrOnehealth = plrOnehealth - 50;
    break;
  
}
 if (plrOnehealth >  0){
var randomPower = generateRandom(5);
  hitHimthree(generateRandom(randomPower)); 
 }
else if (plrOnehealth  == 0){
   roundResultthree();
}  
 else if (plrOnehealth  <  0) {
   roundResultthree();
 }
}
function roundResultthree(){
if(plrOnehealth == plrTwohealth){
  roundThreescrplr1 = 0;
  roundThreescrplr2 = 0;
  document.getElementById("gThreeplr1").innerHTML = roundThreescrplr1;
  document.getElementById("gThreeplr2").innerHTML = roundThreescrplr2;
  if (confirm("Match is Draw!!  Go ahead for the 4th round")) {
    document.getElementById("btnFour").disabled = false;
    document.getElementById("btnThree").disabled = true;
    document.getElementById("btnTwo").disabled = true;
    document.getElementById("btnThree").innerHTML = "round3-cmpltd";
     
    } else {
         document.getElementById("btnFour").disabled = true;
    }

}
else if (plrOnehealth  < plrTwohealth ){
  roundThreescrplr2 = 1;
  roundThreescrplr1 = 0;
  document.getElementById("gThreeplr1").innerHTML =  roundThreescrplr1;
  document.getElementById("gThreeplr2").innerHTML = roundThreescrplr2;
  if (confirm("Ajmal Won...Don't Worry!! Go ahead for the 4th round")) {
    document.getElementById("btnFour").disabled = false;
    document.getElementById("btnThree").disabled = true;
    document.getElementById("btnTwo").disabled = true;
    document.getElementById("btnThree").innerHTML = "round3-cmpltd";
    } else {
        document.getElementById("btnFour").disabled = true;
    } 
}  
else if (plrOnehealth  > plrTwohealth ){
   roundThreescrplr1 = 1;
   roundThreescrplr2 = 0;
  document.getElementById("gThreeplr1").innerHTML = roundThreescrplr1;
  document.getElementById("gThreeplr2").innerHTML = roundThreescrplr2;
  if (confirm("Congo You Won...Please Go ahead for the 4th round")) {
    document.getElementById("btnFour").disabled = false;
    document.getElementById("btnThree").disabled = true;
    document.getElementById("btnTwo").disabled = true;
    document.getElementById("btnThree").innerHTML = "round3-cmpltd";
    } else {
        document.getElementById("btnFour").disabled = true;
    } 
}
}

function startgameFour(){
 plrOnehealth = 100;
 plrTwohealth = 100;
 var txt;
 var hit;
    if (confirm("Lets Start the fourth round")) {
        txt = "Yes";
    } else {
        txt = "No";
    }
  if(txt = "Yes"){
  if (confirm("Start hiting Ajmal Again")) {
        hit = "hited";
 var randomPower = generateRandom(5);
     hitHimfour(randomPower);
      
    }
    else {
        hit = "left";
    } 
   }
}
function hitHimfour(randomPower){
  let power = randomPower
console.log(power);
switch (power) {
  case 0:
    power = 0;
    plrTwohealth = plrTwohealth - 0;
    hitBack(5);
    break;
  case 1:
    power = 1;
    plrTwohealth= plrTwohealth - 10;
    break;
  case 2:
    power = 2;
    plrTwohealth = plrTwohealth - 20;
    break;
  case 3:
    power = 3;
    plrTwohealth = plrTwohealth - 30;
    break;
  case 4:
   power = 4;
    plrTwohealth = plrTwohealth - 40;
    break;
  case 5:
    power = 5;
    plrTwohealth = plrTwohealth - 50;
    break;
  
}
 if (plrTwohealth >  0){
var randomPower = generateRandom(5);
  hitBackfour(generateRandom(randomPower)); 
 }
else if (plrTwohealth  == 0){
        roundResultfour();
}  
 else if (plrTwohealth  <  0) {
   roundResultfour();
 }
}
function hitBackfour(num){
console.log(num);
     let power = num
switch (power) {
  case 0:
    power = 0;
    plrOnehealth = plrOnehealth - 0;
    break;
  case 1:
    power = 1;
    plrOnehealth= plrOnehealth - 10;
    break;
  case 2:
    power = 2;
    plrOnehealth = plrOnehealth - 20;
    break;
  case 3:
    power = 3;
    plrOnehealth= plrOnehealth - 30;
    break;
  case 4:
   power = 4;
    plrOnehealth = plrOnehealth - 40;
    break;
  case 5:
    power = 5;
    plrOnehealth = plrOnehealth - 50;
    break;
  
}
 if (plrOnehealth >  0){
var randomPower = generateRandom(5);
  hitHimfour(generateRandom(randomPower)); 
 }
else if (plrOnehealth  == 0){
   roundResultfour();
}  
 else if (plrOnehealth  <  0) {
   roundResultfour();
 }
}
function roundResultfour(){
if(plrOnehealth == plrTwohealth){
  roundFourscrplr1 = 0;
  roundFourscrplr2 = 0;
  document.getElementById("gFourplr1").innerHTML = roundFourscrplr1;
  document.getElementById("gFourplr2").innerHTML = roundFourscrplr2;
  if (confirm("Match is Draw!!  Go ahead for the 5th round")) {
    document.getElementById("btnFive").disabled = false;
    document.getElementById("btnFour").disabled = true;
    document.getElementById("btnTwo").disabled = true;
    document.getElementById("btnFour").innerHTML = "round4-cmpltd";
     
    } else {
         document.getElementById("btnFive").disabled = true;
    }

}
else if (plrOnehealth  < plrTwohealth ){
  roundFourscrplr1 = 0;
  roundFourscrplr2 = 1;
  document.getElementById("gFourplr1").innerHTML = roundFourscrplr1;
  document.getElementById("gFourplr2").innerHTML = roundFourscrplr2;
  if (confirm("Ajmal Won...Don't Worry!! Go ahead for the 5th round")) {
    document.getElementById("btnFive").disabled = false;
    document.getElementById("btnFour").disabled = true;
    document.getElementById("btnTwo").disabled = true;
    document.getElementById("btnFour").innerHTML = "round3-cmpltd";
    } else {
        document.getElementById("btnFive").disabled = true;
    } 
}  
else if (plrOnehealth  > plrTwohealth ){
  roundFourscrplr1 = 1;
  roundFourscrplr2 = 0;
  document.getElementById("gFourplr1").innerHTML = roundFourscrplr1;
  document.getElementById("gFourplr2").innerHTML = roundFourscrplr2;
  if (confirm("Congo You Won...Please Go ahead for the 5th round")) {
    document.getElementById("btnFive").disabled = false;
    document.getElementById("btnFour").disabled = true;
    document.getElementById("btnTwo").disabled = true;
    document.getElementById("btnFour").innerHTML = "round4-cmpltd";
    } else {
        document.getElementById("btnFive").disabled = true;
    } 
}
}

function startgameFive(){
 plrOnehealth = 100;
 plrTwohealth = 100;
 var txt;
 var hit;
    if (confirm("Lets Start the fifth round")) {
        txt = "Yes";
    } else {
        txt = "No";
    }
  if(txt = "Yes"){
  if (confirm("Start hiting Ajmal Again")) {
        hit = "hited";
 var randomPower = generateRandom(5);
     hitHimfive(randomPower);
      
    }
    else {
        hit = "left";
    } 
   }
}
function hitHimfive(randomPower){
  let power = randomPower
console.log(power);
switch (power) {
  case 0:
    power = 0;
    plrTwohealth = plrTwohealth - 0;
    hitBack(5);
    break;
  case 1:
    power = 1;
    plrTwohealth= plrTwohealth - 10;
    break;
  case 2:
    power = 2;
    plrTwohealth = plrTwohealth - 20;
    break;
  case 3:
    power = 3;
    plrTwohealth = plrTwohealth - 30;
    break;
  case 4:
   power = 4;
    plrTwohealth = plrTwohealth - 40;
    break;
  case 5:
    power = 5;
    plrTwohealth = plrTwohealth - 50;
    break;
  
}
 if (plrTwohealth >  0){
var randomPower = generateRandom(5);
  hitBackfive(generateRandom(randomPower)); 
 }
else if (plrTwohealth  == 0){
        roundResultfive();
}  
 else if (plrTwohealth  <  0) {
   roundResultfive();
 }
}
function hitBackfive(num){
console.log(num);
     let power = num
switch (power) {
  case 0:
    power = 0;
    plrOnehealth = plrOnehealth - 0;
    break;
  case 1:
    power = 1;
    plrOnehealth= plrOnehealth - 10;
    break;
  case 2:
    power = 2;
    plrOnehealth = plrOnehealth - 20;
    break;
  case 3:
    power = 3;
    plrOnehealth= plrOnehealth - 30;
    break;
  case 4:
   power = 4;
    plrOnehealth = plrOnehealth - 40;
    break;
  case 5:
    power = 5;
    plrOnehealth = plrOnehealth - 50;
    break;
  
}
 if (plrOnehealth >  0){
var randomPower = generateRandom(5);
  hitHimfive(generateRandom(randomPower)); 
 }
else if (plrOnehealth  == 0){
   roundResultfive();
}  
 else if (plrOnehealth  <  0) {
   roundResultfive();
 }
}
function roundResultfive(){
if(plrOnehealth == plrTwohealth){
  roundFivescrplr1 = 0;
  roundFivescrplr2 = 0;
  document.getElementById("gFiveplr1").innerHTML = roundFivescrplr1;
  document.getElementById("gFiveplr2").innerHTML = roundFivescrplr2;
  if (confirm("This match is Draw.. wait for the main result")){
    document.getElementById("btnFive").disabled = true;
    document.getElementById("btnOne").disabled = true;
    document.getElementById("btnTwo").disabled = true;
    document.getElementById("btnThree").disabled = true;
    document.getElementById("btnFour").disabled = true;
    
    document.getElementById("btnFour").innerHTML = "round5-cmpltd";
     
    } 
    else {
         document.getElementById("btnFive").disabled = true;
    }

}
else if (plrOnehealth  < plrTwohealth ){
  roundFivescrplr1 = 0;
  roundFivescrplr2 = 1;
  document.getElementById("gFiveplr1").innerHTML = roundFivescrplr1;
  document.getElementById("gFiveplr2").innerHTML = roundFivescrplr2;
  if (confirm("Ajmal Won...Wait for the result!!")) {
    document.getElementById("btnFive").disabled = true;
    document.getElementById("btnOne").disabled = true;
    document.getElementById("btnTwo").disabled = true;
    document.getElementById("btnThree").disabled = true;
    document.getElementById("btnFour").disabled = true;
    document.getElementById("btnFive").innerHTML = "round5-cmpltd";
    } else {
        document.getElementById("btnFive").disabled = true;
    } 
}  
else if (plrOnehealth  > plrTwohealth ){
  roundFivescrplr1 = 1;
  roundFivescrplr2 = 0;
  document.getElementById("gFiveplr1").innerHTML = roundFivescrplr1;
  document.getElementById("gFiveplr2").innerHTML = roundFivescrplr2;
  if (confirm("Congo You Won...Please wait for the result")) {
    document.getElementById("btnFive").disabled = true;
    document.getElementById("btnOne").disabled = true;
    document.getElementById("btnTwo").disabled = true;
    document.getElementById("btnThree").disabled = true;
    document.getElementById("btnFour").disabled = true;
    document.getElementById("btnFive").innerHTML = "round5-cmpltd";
    declareResult();
    } else {
        document.getElementById("btnFive").disabled = true;
    } 
}
}
function declareResult (){
  let plrscrOne = roundOnescrplr1 + roundTwoscrplr1 + roundThreescrplr1 + roundFourscrplr1 + roundFivescrplr1;
  let plrscrTwo = roundOnescrplr2+ roundTwoscrplr2+ roundThreescrplr2+ roundFourscrplr2+ roundFivescrplr2;
  if(plrscrOne == plrscrTwo){
  	document.getElementById("result").innerHTML = "Match is draw";
    if (confirm("Match is Draw !! Wants to restart?")){
       
    } else {
        txt = "No";
    }
    
  }else if(plrscrOne > plrscrTwo){
  	document.getElementById("result").innerHTML = playerName +" " + "is winner";
    if (confirm("Congratulation you won!! Wants to restart?")){
        setTimeout(
    function() {
    window.location.replace("https://jsfiddle.net/hn80brjz/3/");
    }, 10000);
      
    }else {
        txt = "No";
    }

  }else if(plrscrOne < plrscrTwo){
  	document.getElementById("result").innerHTML = "Ajmal is winner.";
    if (confirm("oops you loose !! Wants to restart?")){
    		setTimeout(
    function() {
    window.location.replace("https://jsfiddle.net/hn80brjz/3/");
    }, 10000);
        
      
    }else {
        txt = "No";
    }
  }
}
