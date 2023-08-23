const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.USER_DB,
  process.env.PASSWORD_DB,
  // 'library_db',
  // 'root',
  // 'password',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306 //this is the port that sequelize lives on, no need to worry about this
  }
);

module.exports = sequelize;
