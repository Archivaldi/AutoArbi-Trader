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

//keys
const keys = require('./keys');

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

//TYPINGDNA api and secret
const { typingDna_apiKey, typingDna_secret } = keys.typingDna;
const TypingDnaClient = require('typingdnaclient');
const typingDnaClient = new TypingDnaClient(typingDna_apiKey, typingDna_secret);
let base_url = 'https://api.typingdna.com';


//main page
app.use(express.static(path.join(__dirname, './client/out')));


app.post("/sighup/typingdna", (req, res) => {
    console.log(req.body)
    console.log(req.data)
    let typingPattern = req.body.typingPattern;
    console.log(typingPattern);

    let client_id = "test123";

    typingDnaClient.auto(client_id, typingPattern, (error, response) => {
        if (error) {
            console.log(error);
        }
        console.log(response)
        if (response.statusCode === 200) {
            res.send({ message: "Success!" });
        } else {
            res.send({ message: "Got some issue" });
        };
    });
});

app.get("/check_pattern", (req, res) => {
    let typingPattern = req.body.typingPattern;
    console.log(typingPattern);
    let client_id = "test123";
    typingDnaClient.check(
        {
            userId: client_id,
            type: 1,
            device: 'desktop'
        },
        function (error, result) {
            console.log(result);
            if (error) {
                res.send({ "message": "got some error" });
            } else {
                res.send({ message: "Success!" })
            }
        }
    )
})




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});