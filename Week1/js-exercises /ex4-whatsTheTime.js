/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

//  */
// var paragraph = document.createElement('p');
// paragraph.textContent ="time";
// document.body.appendChild("paragraph");


function displayCurrentTime() {
  // your code goes in here
 let currentTime = new Date();
 let hour= currentTime.getHours();
 let min = currentTime.getMinutes();
 let sec = currentTime.getSeconds();

 //adding the if statment to make it 2 digits (digitalized)

 if(hour < 10){
   hour = '0' + hour;
 }
 else if(min < 10){
  min = '0' + min;
}
else if(sec <= 10){
  sec = '0' + sec;
 };

 let displayTime = document.getElementById('displayTime');
 displayTime.textContent = hour+":"+min+":"+sec;
 displayTime.style.fontSize = "100px";
 displayTime.style.textAlign ="center"

}

setInterval(displayCurrentTime, 1000);

