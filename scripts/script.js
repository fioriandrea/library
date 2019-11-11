'use strict'

let library = [{title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937,
      description: 'It\'s a book. It has been written.',
      URL: 'https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg',
      read: false
    },
    {title: 'Harry Potter', author: 'J.K. Rowling', year: 1937 ,
    description: 'It\'s a book written by J.K. It has been written. It talks about a wizard.',
    URL: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg',
    read: false},
    {title: "The Little Mermaid", author: "Oscar Iscariota", year: 2019,
    description: "A little Mermaid gets killed.",
    URL: "https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/37836/large_thumb_stage.jpg"}];

function addBookToLibrary(book) {
  library.push(book);
}

function removeBookFromLibrary(id) {
  library[id] = null;
}

function toggleBookRead(i) {
  if(library[i]) {
    library[i].read ? false : true;
  }
}

function render() {
  const bookList = document.querySelector(".bookList");
  emptyElement(bookList);

  for(let i = 0; i < library.length; i++) {
    if(library[i]) {
      bookList.appendChild(createEntry(library[i], i));
    }
  }
}

function main() {
  setListeners();
  render();
}

main();
