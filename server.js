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
const keys = require('./keys');

//uuid 
const { v4: uuidv4 } = require('uuid');


//allow sessions
app.use(bodyParser.urlencoded({ extended: true }));
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

//ANVIL api
const anvilClient = new Anvil({apiKey: keys.anvil.apiKey});
cloudinary.config({cloud_name: keys.cloudinary.cloud_name, api_key: keys.cloudinary.apikey, api_secret: keys.cloudinary.secret});



//main page 
app.get("/", (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get("/login", (req,res) => {
    res.send({message: "We are on login page"});
});

app.get("/sighup", (req,res) => {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/sighup/typingdna", (req,res) => {
        let typingPattern = req.body.typingPattern;
        let client_id = "test123";

        typingDnaClient.auto(client_id, typingPattern, (error, response) => {
            if (error){
                console.log(error);
            }
            console.log(response)
            if (response.statusCode === 200){
                res.send({message: "Success!"});
            } else {
                res.send({message: "Got some issue"});
            };
    });
});

app.get("/check_pattern", (req,res) => {
    res.sendFile(__dirname + "/check_pattern.html");
});

app.post("/check_pattern", (req,res) => {
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
                res.send({"message": "got some error"});
            } else {
                res.send({message: "Success!"})
            };
        });
});

app.get("/fill_form", async (req,res) => {

    const exampleData = {
        "title": "Texas Vehicle Bill Of Sale",
        "fontSize": 14,
        "textColor": "#222222",
        "data":
            {
                seller: "Artur Markov",
                sellerStreet: "1403 Fort Lloyd Pl",
                sellerCity: "Round Rock",
                sellerState: "TX",
                sellerZipCode: "78665",
                sellerCounty: "Williamson",
                buyer: "Nathaniel Ryan",
                buyerStreet: "1700 W Parmer St",
                buyerCity: "Austin",
                buyerState: "TX",
                buyerZipCode: "78727",
                buyer_county: "Jefferson",
                price: "10000",
                carYear: "2015",
                carMake: "Mazda",
                carBody: "Minivan",
                carModel: "5",
                carVin: "1SG13VNSSDN45693",
                carPlate: "NKR1897",
                odometer: "77356",
                dayMonth: moment().format("DD/MM"),
                year: "21",
                date: moment().format("MM/DD/YYYY"),
            }
      };

      const {statusCode, data} = await anvilClient.fillPDF(keys.anvil.bill_of_sale_id, exampleData);

    // Data will be the filled PDF raw bytes
    fs.writeFile('output.pdf', data, { encoding: null }, function(err) {
        if(err){console.log(err)}
        else {
            console.log("the file was created");

            cloudinary.uploader.upload("output.pdf", 
                function(error, result) {console.log(result, error); });
        }
    });

    res.send({statusCode});
    console.log(data);


});

app.get("/createEtchSigh", (req,res) => {

    const signer_1_email = "artur.markov1860@gmail.com";
    const signer_1_name = "Artur Markov";

    const signer_2_email = "archivaldi95@yandex.ru";
    const signer_2_name = "Nate Ryan";

        async function main () {
            const variables = getPacketVariables()
            const { data: result } = await anvilClient.createEtchPacket({ variables })
            const { data, errors } = result
            if (errors) {
            console.log('Error', errors)
            } else {
            console.log(data.createEtchPacket)
            }
        }

      function getPacketVariables(){
          return {
              isDraft: false,
              isTest: true,

              name: `Docs - ${signer_2_name}`,
              signatureEmailSubject: 'Docs ok',
              signatureEmailBody: 'Please sigh dosc...',

              files: [
                  {
                      id: "bill_of_sale",
                      castEid: keys.anvil.bill_of_sale_id
                  },
                  {
                      id: "texas_title",
                      castEid: keys.anvil.title_id
                  }
              ],

              data: {
                payloads: {
                    bill_of_sale: {
                        data: {
                            seller: "Artur Markov",
                            sellerStreet: "1403 Fort Lloyd Pl",
                            sellerCity: "Round Rock",
                            sellerState: "TX",
                            sellerZipCode: "78665",
                            sellerCounty: "Williamson",
                            buyer: "Nathaniel Ryan",
                            buyerStreet: "1700 W Parmer St",
                            buyerCity: "Austin",
                            buyerState: "TX",
                            buyerZipCode: "78727",
                            buyer_county: "Jefferson",
                            price: "10000",
                            carYear: "2015",
                            carMake: "Mazda",
                            carBody: "Minivan",
                            carModel: "5",
                            carVin: "1SG13VNSSDN45693",
                            carPlate: "NKR1897",
                            odometer: "77356",
                            dayMonth: moment().format("DD/MM"),
                            year: "21",
                            date: moment().format("MM/DD/YYYY"),
                        }
                    },
                    texas_title: {
                        data: {
                            carVin: "1SG13VNSSDN45693",
                            carYear: "2015",
                            carMake: "Mazda",
                            carBody: "Minivan",
                            carModel: "5",
                            carPlate: "NKR1897",
                            odometer: "77356",
                            seller: "Artur Markov",
                            sellerFullAddress: "1403 Fort Lloyd Pl, Round Rock, TX, 78665",
                            date: moment().format("MM/DD/YYYY")
                        }
                    }
                }
              },

              signers: [
                  {
                      id: "artur",
                      name: "Artur Markov",
                      email: "artur.markov1860@gmail.com",

                      fields: [
                          {
                              fileId: 'bill_of_sale',
                              fieldId: 'sellerSign'
                          },
                          {
                              fileId: "texas_title",
                              fieldId: "sellerSign"
                          }
                      ]
                  },
                  {
                      id: "nate",
                      name: "Nate Ryan",
                      email: "archivaldi95@yandex.ru",
                      fields: [
                          {
                              fileId: "bill_of_sale",
                              fieldId: "buyerSign"
                          },
                          {
                              fileId: "texas_title",
                              fieldId: "buyerSign"
                          }
                      ]
                  }
              ]
          }
      }


      function run (fn) {
        fn().then(() => {
          //process.exit(0);
          res.send({message: "Succsess!"})
        }).catch((err) => {
          console.log(err.stack || err.message)
          process.exit(1)
        })
      }

      run(main);
});



app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});