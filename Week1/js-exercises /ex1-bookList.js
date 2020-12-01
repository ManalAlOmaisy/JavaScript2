/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  // your code goes in here, return the ul element
  //create paragraph
  let createUl = document.createElement('ul');
    createUl.style.listStyle = 'none';
    createUl.style.display = "flex";
    createUl.style.justifyContent = "space-around";
    createUl.style.padding = "40px";


for(let i = 0; i< books.length; i++){
  let createListItem = document.createElement('li');
      createListItem.style.padding = "10px";
      createListItem.style.margin = "10px";
      createListItem.style.width = "33.3%"
 

  let createParagraph = document.createElement('p');
      createParagraph.innerText = (books[i].title + ' - ' + books[i].author);

   let createImg = document.createElement('img');
       createImg.src = "img/pic"+ (i+1)+ ".jpeg";

   if(books[i].alreadyRead == true){
      createListItem.style.background = "green";
   }
   else{
      createListItem.style.background = "red";
   }

    createListItem.appendChild(createParagraph);
    createListItem.appendChild(createImg);
    createUl.appendChild(createListItem);
    document.body.appendChild(createUl);
}

}
const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true
  }
];


let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);