// Your code goes in here

document.querySelector("#app").innerText = "Tip Calculator";
const bill = document.getElementById('bill');
const service = document.getElementById('service');
const people = document.getElementById('people');
const tipAmount = document.getElementById('tip-amount');
const eachText = document.getElementById("each-text");

function tipCalc(){

let cost = parseFloat(bill.value);
let servicePerce = parseFloat(service.value)/ 100;
let peoples = parseFloat(people.value);
let tip = ((cost * servicePerce) + cost) / peoples;
tipAmount.innerText = tip.toFixed(2)
eachText.innerText =  (peoples >1 ? "each": "")
}
