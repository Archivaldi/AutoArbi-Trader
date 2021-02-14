const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');

const connection = mysql.createConnection(process.env.JAWSDB_URL || keys.mysql_data);

connection.connect((err) => {
    if (err) { console.log(err) };
    console.log("Database connected");
});

module.exports = connection;