const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {} //model is a tool from NPM package sequelize to make tables. so we are making a table called books here and adding values

Book.init(
  {
    book_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    is_paperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true, //prevents sequelize from pluralizing 'book'
    modelName: 'book'// calling table book.
  }
);

module.exports = Book;
