const { Pool } = require('pg');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')})

const connection = `postgresql://${process.env.DB_USER}:@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

console.log(connection);

// # MYSQL DB CONNECTION
// const mysql = require('mysql');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'DibsOnDinnerPhotos',
// });

// db.connect(
//   console.log('connected'),
// );

// # POSTGRESQL DB CONNECTION

// module.exports = db;
