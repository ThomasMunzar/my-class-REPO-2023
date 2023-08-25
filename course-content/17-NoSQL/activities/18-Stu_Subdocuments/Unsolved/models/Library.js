const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument

const bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  price: Number,
})

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  library: librarySchema,
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema)
// TODO: Create a new instance of the model including the subdocuments
const libraryData = {name: 'New Library'};
const bookData = [
{name: 'Book1', price: 30},
{name: 'Book2', price: 40},  
];

Library
.create({name: 'basil', library: libraryData, books: bookData })
.then(data => console.log(data))
  .catch(err => console.error(err));

module.exports = Library;
