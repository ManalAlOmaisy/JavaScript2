/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
// const pause = document.getElementById('pause');
// const unpause = document.getElementById('unpause');
const increment = document.getElementById('session-increment');
const decrement = document.getElementById('session-decrement');
const sessionNumber = document.getElementById('session-number');
const timer = document.getElementById('timer');
const TimesUPText = document.getElementById('timer-text');


sessionNumber.innerText = 25;
minutes.innerText = sessionNumber.innerText; 
seconds.innerText = "00";

// create a varaiable to set  and clear my interval
let secondsInterval;


// to increment the session length
function incrementSession(){
  sessionNumber.innerText = parseFloat(sessionNumber.innerText) + 1;
  minutes.innerText = sessionNumber.innerText;
}
 

// // to decrement the session length
function decrementSession(){
  sessionNumber.innerText = parseFloat(sessionNumber.innerText) - 1;
  minutes.innerText = sessionNumber.innerText;
  if(sessionNumber.innerText <= 0){
    decrement.disabled = true;
  }
}


//  this function is to be called by the start interval

function timerClock(){

  if(seconds.innerText <= 0){
     seconds.innerText = 59;
     minutes.innerText = minutes.innerText - 1;
  }
  else{
     seconds.innerText = seconds.innerText - 1;
  }

  if(seconds.innerText <= 0 && minutes.innerText <= 0){
    clearInterval(secondsInterval);
    timer.style.display = 'none';
    TimesUPText.style.display = 'block';
    TimesUPText.innerText = "Time's up!";
  }
}

// to start or play the timer

function startTimer(){
  secondsInterval = setInterval(timerClock, 1000);
  start.style.display = 'none';
  stop.style.display = 'block'; 
  // to make the session length not working while the timer is on 
  increment.disabled = true;
  decrement.disabled = true;
}


// to reset  the timer and the pause button 

function stopTimer(){
  clearInterval(secondsInterval);
  minutes.innerText = sessionNumber.innerText;
  seconds.innerText = "00";
  start.style.display = 'block';
  stop.style.display = 'none';
  unpause.style.display = 'none';
  pause.style.display = 'block';
  unpause.style.display = 'none';
  pause.style.display = 'block';
  increment.disabled = false;
  decrement.disabled = false;
 
}

 // function  pause 

  function addPause(){
    clearInterval(secondsInterval);
    unpause.style.display = 'block';
    pause.style.display = 'none';
    pause.disabled = true;
    unpause.disabled = false;
};
// function to start back 

function addUnpause(){
  secondsInterval = setInterval(timerClock, 1000);
  unpause.style.display = 'none';
  pause.style.display = 'block';
  
};
 



