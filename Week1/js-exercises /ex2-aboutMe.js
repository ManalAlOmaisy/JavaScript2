/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */
document.body.style.fontFamily = "Arial, sans-serif";
let nickName = document.querySelector('#nickname');
    nickName.textContent = ("Miss M");

let favFood = document.getElementById("fav-food");
    favFood.textContent = "Lazania";

document.getElementById("hometown").textContent = "Yemen";

//iterate through Li

let listItem = document.getElementsByTagName('li');

for (let i = 0; i <listItem.length; i++){

listItem[i].className = "list-item";

}

let myImg = document.createElement('img');
    myImg.src ="img/Me.jpg";
    myImg.style.width = "200px";
    document.body.appendChild(myImg);



