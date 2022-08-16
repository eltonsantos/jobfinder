const Sequelize = require('sequelize');

// SQLITE
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './db/app.db'
// });

// POSTGRESQL
const sequelize = new Sequelize('postgres://postgres@localhost:5432/jobsfinder', {dialect: 'postgres'}) // Example for postgres

module.exports = sequelize