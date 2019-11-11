'use strict';

/*book class*/

function Book(title, year, author, description, imageURL) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.description = description;
  this.URL = imageURL;
  this.read = false;
}
