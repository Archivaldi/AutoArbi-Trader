var express = require('express');
var app = express();
const path = require('path');
const bodyParser = require("body-parser");
const session = require('cookie-session');
const { secret: { secret } } = require('./config/keys');
const PORT = process.env.PORT || 8080;

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

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});