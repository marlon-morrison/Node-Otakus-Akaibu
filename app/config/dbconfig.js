const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host:"",
    user:"root",
    password:"",
    database:"Acharacters"
});

module.exports = pool;