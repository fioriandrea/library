'use strict'

/*Module where we define event actions*/

let toggleFormTransitionAction = (e) => {
  resetForm();
  toggleFormTransition();
};

function setAddBookButtonListener() {
  const addButton = document.querySelector("#addBookButton");

  addButton.addEventListener("click", toggleFormTransitionAction);
}

function setCancelButtonListener() {
  const cancel = document.querySelector("#cancel");

  cancel.addEventListener("click", toggleFormTransitionAction);
}

function setSubmitButtonListener() {
  const submit = document.querySelector("#submit");

  submit.addEventListener("click", (e) => {
    addBookToLibrary(getBookFromForm());
    render();
    toggleFormTransition();
  });
}

function setListeners() {
  setAddBookButtonListener();
  setCancelButtonListener();
  setSubmitButtonListener();
}

let deleteButtonAction = (e) => {
  document.querySelector(`.bookEntry[data-id='${e.target.dataset.id}']`).remove();
  removeBookFromLibrary(e.target.dataset.id);
};

let readButtonAction = (e) => {
  toggleReadClass(e.target);
  toggleBookRead(e.target.dataset.id);
}
