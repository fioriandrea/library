'use strict'

/*This module handles the DOM management, like DOM element creation or refresh*/

function emptyElement(element) {
  element.innerHTML = "";
}

function toggleReadClass(button) {
  button.classList.toggle("read");
}

function createBookInfo(book) {
  const bookInfo = document.createElement("div");
  bookInfo.classList.add("bookInfo");

  const title = document.createElement("h2");
  title.classList.add("entryTitle");
  title.textContent = book.title;

  const year = document.createElement("span");
  year.classList.add("entryYear");
  year.textContent = book.year;

  const author = document.createElement("h3");
  author.classList.add("entryAuthor");
  author.textContent = book.author;

  const description = document.createElement("p");
  description.classList.add("entryDescription");
  description.textContent = book.description;

  bookInfo.appendChild(title);
  bookInfo.appendChild(year);
  bookInfo.appendChild(author);
  bookInfo.appendChild(description);

  return bookInfo;
}

function createEntryButton() {
  const button = document.createElement("input");
  button.type = "button";
  button.classList.add("transparentButton");

  return button;
}

function createEntryButtons(id) {
  const entryButtons = document.createElement("div");
  entryButtons.classList.add("entryButtons");

  const readButton = createEntryButton(id);
  readButton.value = "Read";
  readButton.dataset.id = `${id}`;
  readButton.classList.add("readButton");
  readButton.addEventListener("click", readButtonAction);

  const deleteButton = createEntryButton();
  deleteButton.value = "Delete";
  deleteButton.dataset.id = `${id}`;
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", deleteButtonAction);

  entryButtons.appendChild(readButton);
  entryButtons.appendChild(deleteButton);

  return entryButtons;
}

function createEntry(book, id) {
  const bookEntry = document.createElement("div");
  bookEntry.classList.add("bookEntry");
  bookEntry.dataset.id = `${id}`;

  const image = document.createElement("div");
  image.classList.add("image");
  image.style["background-image"] = `url('${book.URL}')`;

  const info = createBookInfo(book);

  const buttons = createEntryButtons(id);

  bookEntry.appendChild(image);
  bookEntry.appendChild(info);
  bookEntry.appendChild(buttons);

  return bookEntry;
}

function resetForm() {
  const formIns = [...document.querySelectorAll(".formIn")];
  formIns.forEach((elem) => elem.value="");
}

function toggleFormTransition() {
  document.querySelector(".mainContainer").classList.toggle("blur");
  document.querySelector(".form").classList.toggle("formCentered");
}

function getBookFromForm() {
  let title = document.querySelector("#titleIn").value;
  let year = document.querySelector("#yearIn").value;
  let description = document.querySelector("#descriptionIn").value;
  let author = document.querySelector("#authorIn").value;
  let url = document.querySelector("#coverIn").value;

  return new Book(title, year, author, description, url);
}
