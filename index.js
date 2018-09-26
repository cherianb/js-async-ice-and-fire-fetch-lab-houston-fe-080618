function fetchBooks() {
fetch('https://anapioficeandfire.com/api/books')
.then(resp => resp.json())
.then(json => renderBooks(json));

}

function renderBooks(json){
  let counter = 0
 const main = document.querySelector('main');
 json.forEach(book => {
   
   
  if(counter === 4){
    const fifthBook = document.createElement ('h1');
   fifthBook.innerHTML =`<h2> This ${book.name} is the 5th book</h2>`
   main.appendChild(fifthbook)

 })
 const h2 =document.createElement('h2');
 h2.innerHTML= 'h2>${book.name}</h2>'
 main.appendChild(h2)
}

document.addEventListener ('DOMContentLoaded', function() {
 fetchBooks();
 counter++
});

// hold on don’t load yet!
