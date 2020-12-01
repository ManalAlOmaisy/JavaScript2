/**
 
 ** Exercise 5: The cat walk **
 Starting with an HTML, which has a single img tag of an animated GIF of a cat walking.

 1. Create a variable to store a reference to the img.
 2. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
 3. Create a  function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
 4. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
 5. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen, forever and ever.
 6. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https: //tenor.com/StFI.gif), keep it dancing for 5 seconds, and then replace the img with the original image and have it continue the walk.
 
*/

let catImg = document.querySelector('img');
    catImg.style.left = "0px";
let walkCatSrc  = catImg.src;;
let danceCatSrc = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424";

function catwalk(){
  // to make the cat walk
let currentPosition = parseInt(catImg.style.left);
 catImg.style.left =(currentPosition  + 10)+ "px";

//  to make the cat stop and dance
 let middlePosition = (window.innerWidth - catImg.width) / 2;

if( currentPosition >= middlePosition - 10 && currentPosition <= middlePosition + 10) {
  clearInterval(interval);
  catImg.src = danceCatSrc;
  setTimeout(function(){
  catImg.src = walkCatSrc;
  catImg.style.left = (currentPosition  + 20)+ "px";
  interval = setInterval(catwalk, 50);
 }, 5000);
  };

// to make the cat restart and keep walking from left to right across the screen
  if( currentPosition > window.innerWidth){
    catImg.style.left="0px";
  }
 
};
let interval = setInterval(catwalk, 50);




