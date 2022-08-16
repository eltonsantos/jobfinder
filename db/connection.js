const Sequelize = require('sequelize');

// SQLITE
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './db/app.db'
// });

// POSTGRESQL LOCAL
// const sequelize = new Sequelize('postgres://postgres@localhost:5432/jobsfinder', {dialect: 'postgres'}) // Example for postgres

/* HEROKU
postgres://qtfzszxdvkcxrh:d4af303e2005512cd239e2cfeb7ebbb5afb4a870a5077802b3e272986398688c@ec2-52-86-56-90.compute-1.amazonaws.com:5432/d730earqbnv78
*/

// HEROKU PRODUCTION
const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "postgres",
  dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
   },
});

module.exports = sequelize