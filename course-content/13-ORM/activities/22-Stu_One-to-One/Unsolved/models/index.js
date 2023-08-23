const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  // will delete row from child table if parent table is deleted.
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
// Exporting these two tables
module.exports = { Reader, LibraryCard };

//establish a relationship between reader and library card where 'reader_id' is the foreign key
