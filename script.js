// global constants
let clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


// global variables
// var pattern = [5, 2, 6, 3, 2, 5, 2, 4]; // array uses integers 1-6
let pattern = []
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be within 0-1
var guessCounter = 0;
let mistakes = 0;
let timeleft = 10;


function randomArray(array){
  while (array.length < 8) {
    //Generates a number between 0 to 8
    let temp = Math.round(Math.random() * 6)
    //If number is not 0, then number is pushed to array
    if (temp !== 0) {
        array.push(temp)
    }
  }
  console.log(array)
  return array
}


function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakes = 0;
  timeleft = 10;
  randomArray(pattern);
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clueHoldTime = 1000;
  pattern = [];
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  clueHoldTime -= 50
  console.log(clueHoldTime);
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn) {
    //Correct guess
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //Win condition
        winGame();
      } else {
        //correct pattern
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  }else{
    // incorrect guess
    mistakes++;
    if (mistakes === 3) {
      loseGame();
  }
}
}
// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 250,
  3: 300,
  4: 350,
  5: 400,
  6: 450
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)