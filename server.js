//dependencies
var request = require('request');
require('dotenv').config();
var express = require('express');
var app = express();
var fs = require('fs');

//keys
const keys = require('./keys');

//port
const PORT = process.env.PORT || 8080;

//mysql database connection
const mysql = require('mysql');
const connection = mysql.createConnection(process.env.JAWSDB_URL  || keys.mysql_data);
connection.connect((err)=> {
    if (err){ console.log(err) };
    console.log("Database connected");
});

app.get("/", (req,res) => {
    res.send({mesage: "Hello world!"});
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});