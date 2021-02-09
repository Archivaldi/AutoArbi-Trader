//dependencies
var request = require('request');
require('dotenv').config();
var express = require('express');
var app = express();
var fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const session = require('express-session');
const request = require("request");

//keys
const keys = require('./keys');


//allow sessions
app.use(session({ secret: keys.secret.secret, cookie: { maxAge: 1 * 1000 * 60 * 60 * 24 * 365 } }));

//port
const PORT = process.env.PORT || 8080;

//mysql database connection
const mysql = require('mysql');
const connection = mysql.createConnection(process.env.JAWSDB_URL  || keys.mysql_data);
connection.connect((err)=> {
    if (err){ console.log(err) };
    console.log("Database connected");
});

//TYPINGDNA api and secret
const {typingDna_apiKey, typingDna_secret} = keys.typingDna;
const TypingDnaClient = require('typingdnaclient');
const typingDnaClient = new TypingDnaClient(typingDna_apiKey, typingDna_secret);
console.log("Instantiated the typing dna client");
let base_url = 'api.typingdna.com';
let client_id = test123;

let options = {
    hostname: base_url,
    port: 443,
    path: '/auto/'+id,
    method: "POST",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache',
        'Authorization': 'Basic ' + new Buffer (typingDna_apiKey + ':' + typingDna_secret).toString('base64'),
    }
}

var responseData = '';

request(options, function(response) {
    response.on('data', function(chunk){
        console.log(responseData += chunk);
    });

    response.on('end', () => {
        console.log(JSON.parse(responseData));
    });

    response.on('error', (e) => {
        console.log(e)
    })
})

//main page 
app.get("/", (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/login", (req,res) => {
    res.send({message: "We are on login page"});
});

app.get("/sighup", (req,res) => {
    res.send({message: "We are on signup page"});
});





app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});