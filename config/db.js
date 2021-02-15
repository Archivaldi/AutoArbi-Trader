const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');
const { mysql_data } = require("./keys");

const connection = mysql.createConnection(process.env.JAWSDB_URL || {
    host: "localhost",
    user: "root",
    password: "password",
    database: "auto"
});

connection.connect((err) => {
    console.log("Database connected");
});

module.exports = connection;