const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host:"us-cdbr-east-05.cleardb.net",
    user:"b84e881a541eec",
    password:"2baed8c8",
    database:"Acharacters"
});

module.exports = pool;