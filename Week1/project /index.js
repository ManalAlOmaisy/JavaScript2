// your code goes in here
let quotes = [
    
{
quote:"If life were predictable it would cease to be life, and be without flavor.", 
author:"-Eleanor Roosevelt"
},
{quote:"Always remember that you are absolutely unique. Just like everyone else.",
author:"-Margaret Mead"
},
{
quote:"The future belongs to those who believe in the beauty of their dreams.",
author:"-Eleanor Roosevelt"
},
{quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.",
author:"-Benjamin Franklin"
},
{quote:"Whoever is happy will make others happy too.",
author:"-Anne Frank,"
},
{quote:"Don't judge each day by the harvest you reap but by the seeds that you plant.",
author:"-Robert Louis Stevenson"
}
];


function randomQuote(){
   let randomQuotes = Math.floor(Math.random() * quotes.length);
   let pickQuote = quotes[randomQuotes].quote 
   let pickauthor = quotes[randomQuotes].author;

   document.getElementById("quote").innerText= pickQuote;
   document.getElementById("author").innerText= pickauthor;
  
}
randomQuote();

let button = document.getElementById("button").addEventListener('click', randomQuote);


