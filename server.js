//dependencies
var request = require('request');
require('dotenv').config();
var express = require('express');
var app = express();
var fs = require('fs');

//mysql database connection
const mysql = require('mysql');
const connection = mysql.createConnection(keys.mysql_data);
connection.connect((err)=> {
    if (err){ console.log(err) };
    console.log("Database connected");
});