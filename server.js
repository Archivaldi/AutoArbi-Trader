//dependencies
const request = require('request');
require('dotenv').config();
var express = require('express');
var app = express();
var fs = require('fs');
const path = require('path');
const bodyParser = require("body-parser");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const Anvil = require("@anvilco/anvil");
const moment = require('moment');
const cloudinary = require('cloudinary').v2;

//keys
const keys = require('./config/keys');

//uuid
const { v4: uuidv4 } = require('uuid');


//allow sessions
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: keys.secret.secret, cookie: { maxAge: 1 * 1000 * 60 * 60 * 24 * 365 } }));

//port
const PORT = process.env.PORT || 8080;

//mysql database connection
// const mysql = require('mysql');
// const connection = mysql.createConnection(process.env.JAWSDB_URL  || keys.mysql_data);
// connection.connect((err)=> {
//     if (err){ console.log(err) };
//     console.log("Database connected");
// });

//TYPINGDNA api and secre

//ANVIL api
const anvilClient = new Anvil({ apiKey: keys.anvil.apiKey });
cloudinary.config({ cloud_name: keys.cloudinary.cloud_name, api_key: keys.cloudinary.apikey, api_secret: keys.cloudinary.secret });



//main page
app.use(express.static(path.join(__dirname, './client/out')));

app.use(require('./controllers/'));




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});