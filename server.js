var express = require('express');
var app = express();
const path = require('path');
const bodyParser = require("body-parser");
const session = require('cookie-session');
const cookieParser = require('cookie-parser');
const { secret: { secret } } = require('./config/keys');
const PORT = process.env.PORT || 8080;
const connection = require("./config/db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    session({
        cookie: { maxAge: 1 * 1000 * 60 * 60 * 24 * 365 },
        secret: secret,
    })
);

app.use(express.static(path.join(__dirname, './client/out')));
app.use(require('./controllers/'));

app.get("/updateUrls", async (req,res) => {
    console.log("Before updating userId:",req.session.user_id);
    req.session.user_id = '21ee0b6e-45c2-4136-ae61-a2e474f478b0';
    console.log(req.session.user_id);
    const {bill_of_sale_url, title_url} = req.body;
    const {user_id} = req.session;
    connection.query("UPDATE Users SET billOfSale = ?, title = ? WHERE user_id = ?", 
    [bill_of_sale_url, title_url, user_id], 
    (err, result) => {
        if (err) throw err;
        else {
            req.session.billOfSale = bill_of_sale_url;
            req.session.title = title_url;
            console.log(req.session.billOfSale, req.session.title);
            console.log("Info inserted");
            res.send({message: "Succses"});
        };
    });
});

app.get("/sessions", (req,res) => {
    res.send(req.session);
});
app.get("/logout", (req, res) => {
    req.session = null;
    res.send(req.session);
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});