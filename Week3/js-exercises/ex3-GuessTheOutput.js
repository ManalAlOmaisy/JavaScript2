/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/



let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();
x()

// This code will return or display alert message (12) on the window. We can see that (let a = 10) is set as a global variable while inside the function the variable (a) is re-assigned to a new value(12) inside the same memory block not declared as a new variable inside the local block. And this reassigning will affect and apply on the global variable. so the new value for (a) will be changed to (12). and the window will alert the number 12.