/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);
//x is 9 because  x is declared on the global scope and called by its value, and any changes inside the function scope will apllies only inside its local scope because it will be only visiible inside the function or between the function curly brackets. 
//the console here called the global value of x because it cannot access the local scope and print the changes applied inside it.


const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
//(y : 10) 
//if the object is used as an argument inside a function we passed its referance, and when the function is envoked the object properties inside the function will be updated and that will changes the object reference also in the global scope. 