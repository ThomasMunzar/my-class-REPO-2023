const Reader = require('./Reader');
const Book = require('./Book');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});


// a reader can have many books
Reader.hasMany(Book, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});
// a book belojngs to a single reader
Book.belongsTo(Reader, {
  foreignKey:'reader_id',
});

module.exports = { Reader, Book, LibraryCard };
