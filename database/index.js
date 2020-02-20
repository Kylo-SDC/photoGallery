// const { Pool, Client } = require('pg');
const cassandra = require('cassandra-driver');
const path = require('path');
require('dotenv').config({path: path.resolve(__dirname, '../.env')})

//####### MYSQL DB CONNECTION
// const mysql = require('mysql');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'DibsOnDinnerPhotos',
// });

// db.connect(
//   console.log('connected'),
// );

//####### POSTGRESQL DB CONNECTION
// const user = process.env.DB_USER
// const host = process.env.DB_HOST
// const port = process.env.DB_PORT
// const collection = process.env.DB_DATABASE

// const connection = `postgresql://${user}:${host}/${port}/${collection}`

// const pool = new Pool({
//   user: user,
//   host: host,
//   database: collection,
//   port: port,
// })

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// })

// const client = new Client(pool)

// client.connect();
// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   client.end();
// })

//####### CASSANDRA CONNECTION
const db = new cassandra.Client({
  contactPoints: [process.env.DB_HOST],
  localDataCenter: 'datacenter1',
  keyspace: 'photos',
})

db.connect()
.then(() => {
  console.log('CONNECTED TO CASSANDRA')
});

module.exports = { db };