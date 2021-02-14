const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');
const {mysql_data} = require("./keys");

const connection = mysql.createConnection(process.env.JAWSDB_URL || mysql_data);

connection.connect((err) => {
    if (err) { console.log(err) };
    console.log("Database connected");
});

module.exports = connection;