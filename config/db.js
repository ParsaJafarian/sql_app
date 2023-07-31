const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

// Create a pool of connections to the database that implements promises instead of callbacks

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DB
}).promise();

module.exports = pool;