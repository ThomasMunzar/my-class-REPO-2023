const sequelize = require('../config/connection');

const Book = require('../models/Book');
const Library = require('../models/Library');

const bookSeedData = require('./bookSeedData.json');
const librarySeedData = require('./librarySeedData.json');

// TODO: Use async / await to Refactor the seedDatabase function below
const seedDatabase = async () => {
  // return sequelize.sync({ 
  //   force: true 
  // })
  // .then(() => {
  //   Book.bulkCreate(bookSeedData)
  //   .then(() => {
  //     Library.bulkCreate(librarySeedData)
  //     .then(() => {
  //       console.log('All Seeds Planted'); 
  //     });
  //   });
  // });
 await sequelize.sync ({
  force: true
 })
  await Book.bulkCreate(bookSeedData)
  await Library.bulkCreate(librarySeedData)
   console.log('All Seeds Planted');
 
  process.exit(0);
};

seedDatabase();

function someFunction () {

}

someFunction()

const var = someFunction
