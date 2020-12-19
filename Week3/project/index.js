// Your code goes in here

document.querySelector("#app").innerText = "Tip Calculator";
const tipAmount = document.getElementById('tip-amount');
const eachText = document.getElementById("each-text");

function tipCalc(){

const bill = document.getElementById('bill').value;
const service = document.getElementById('service').value;
const people = document.getElementById('people').value;

let tip = ((parseInt(bill)* service) + parseInt(bill)) / people;

tipAmount.innerText = tip.toFixed(2)

// here is the "each" if the invoice for more than one person
eachText.innerText =  (people >1 ? "each": "")

// Added the alert option
if (bill === '' || people ==="") {
    
    tipAmount.innerText = ""
    return alert('Please Enter Value'); 

  }

}
