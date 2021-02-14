var express = require('express');
var app = express();
const path = require('path');
const bodyParser = require("body-parser");
const session = require('cookie-session');
const cookieParser = require('cookie-parser');
const { secret: { secret } } = require('./config/keys');
const TypingDNAClient = require('typingdnaclient');
const PORT = process.env.PORT || 8080;
const connection = require('./config/db');


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

app.get("/test", (req,res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
});

//the route to signup new users
app.post("/sighup/:title", (req,res) => {

    //we use route to see the user's title. We need to save it in state when user clicks "seller or buyer" buttons when the users signs up
    let {title} = req.params;

    //generate uuid
    const user_id = uuidv4();

    //here I take vars that fit both titles
    //const {email, password, firstName, lastName, street, city, state, zip_code} = req.body;

    //vars got test
    let email = "example@mail.com"
    let firstName = "Artur";
    let lastName = "Markov";
    let street = "1403 Fort Lloyd Pl";
    let city = "Round Rock";
    let state = "TX";
    let zip_code = "94015";
    let password = "test123";

    //if the user is a seller we run two function to add car and the user and we add more vars
    if (title == "seller"){

        //generate transaction_id for the seller
        let transaction_id = randomstring.generate(10);
        //additional vars for the seller
        //let {price, year, odometer, make, model, body, vin, plate, title_number} = req.body

        //add this vars for tests
        let price = 10000;
        let year = 2015;
        let odometer = 20536;
        let make = "Mazda";
        let model = "5";
        let body = "mv";
        let vin = "asdfasdf23423";
        let plate = "12fjh34";
        let title_number = "123345782";

        //we have to insert car first cuz of the tables in the database
        const insert_car = () => {
            connection.query(
                'INSERT INTO Cars(price, year, odometer, make, model, body, vin, plate, title_number) VALUES (?,?,?,?,?,?,?,?,?)',
                [price, year, odometer, make, model, body, vin, plate, title_number],
                (err, result) => {
                    if (err) throw err;
                    else {
                        let car_id = result.insertId;
                        bcrypt.hash(password, 10, function(e, hash) {
                            if(err) throw err;
                            else {
                                insert_user(car_id, hash)
                            }
                        });
                    };
                }
            );
        };

        //insert the seller with the car_id
        const insert_user = (car_id, hash) => {
            connection.query("INSERT INTO Users(car_id, user_id, firstName, lastName, street, city, state, zip_code, password_hash, title, email, transaction_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                [car_id, user_id, firstName, lastName, street, city, state, zip_code, hash, title, email, transaction_id],
                function (err, result) {
                    if (err) throw err;
                    else {
                        //the server gives info back to the client. We can give any info that needed
                        req.session.user_id = user_id;
                        req.session.transaction_id = transaction_id;
                        res.send({user_id});
                    }
                }
            );
        };

        
        insert_car();

        //if the user is a buyer we generate uuid and run only one fuction to insert the user
    } else {

        //should have transaction_id in the form
        //const {transaction_id} = req.body;
        const transaction_id = "fnsDIo901f"
        //insert the buyer without car_id
        function insert_byuer(){
            bcrypt.hash(password, 10, function(e, hash){
                if (e) throw new Error(e);
                else {
                    connection.query("INSERT INTO Users(user_id, firstName, lastName, street, city, state, zip_code, password_hash, title, email, transaction_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                    [user_id, firstName, lastName, street, city, state, zip_code, hash, title, email, transaction_id],
                    function (err, result){
                        if (err) throw err;
                        else {
                            req.session.user_id = user_id;
                            res.send({user_id});
                        }
                    }
                    );
                }
            })
        };

        insert_byuer();
    };



    //let password_hash = await bcrypt.hash(password, 10);
    // const result = await connection.query(
    //     'INSERT INTO Cars(price, year, odometer, make, model, body, vin, plate, title_number) VALUES (?,?,?,?,?,?,?,?,?)',
    //     [price, year, odometer, make, model, body, vin, plate, title_number]
    // );

        // try {
        //     const insert = await connection.query(
        //         'INSERT INTO Cars(price, year, odometer, make, model, body, vin, plate, title_number) VALUES (?,?,?,?,?,?,?,?,?)',
        //         [price, year, odometer, make, model, body, vin, plate, title_number]
        //     );
        //     hash_password = await bcrypt.hash(password, 10);
        //     console.log(results); 
        // } catch (e) {
        //     console.error(e)
        // }


});


app.get("/login", (req,res) => {
    //we check typing pattern at the same time when user logins
    //const {email, password, typingPattern} = req.body;



    const user_id = "";

    //1 step is to check email
    connection.query("SELECT * FROM Users WHERE email = ?",
    [email],
    (err, result) => {
        if (err) throw err;

        //send error if no email found
        else if (result.length === 0){
            res.send({"error": "Invalid email"});
        }
        else {
            let {password_hash} = result[0];
            user_id = result[0].user_id;
            check_password(password_hash);
        }
    }
    );

    //step 2 is to check password
    async function check_password(hash){
        try {
            let match = await bcrypt.compare(password, hash);
            if (match){
                typing_dna_verify();
            } else {
                //if password is invalid send error
                res.send({"error": "Ivalid password"});
            }
        } catch(e) {
            console.log(e)
        }
    };

    //step 3 verify typing dna
    async function typing_dna_verify(){
        try {
           const result = await TypingDNAClient.verify(user_id, typingPattern);
           console.log(result);
        } catch(e){
            throw e;
        }
    }
});


app.get("/user_id", (req,res) => {
    let user_id = uuidv4();
    req.session.user_id = user_id;
});

app.get("/session", (req,res) => {
    res.send({user_id: req.session.user_id});
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});