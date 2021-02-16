const router = require("express").Router();
const Anvil = require("@anvilco/anvil");
const moment = require('moment');
const cloudinary = require('cloudinary').v2;
const keys = require('../../config/keys');
const extract = require('extract-zip');
const { anvil } = require("../../config/keys");
const request = require('request');
const { decryptRSA } = require('@anvilco/encryption');
var fs = require('fs');
const path = require('path');
const connection = require("../../config/db");

const anvilClient = new Anvil({ apiKey: keys.anvil.apiKey });
cloudinary.config({ cloud_name: keys.cloudinary.cloud_name, api_key: keys.cloudinary.apikey, api_secret: keys.cloudinary.secret });

router.post("/createEtchSigh", (req, res) => {
    const {user_id} = req.session;
    let seller = {};
    let buyer = {};


    connection.query("SELECT * FROM Users LEFT JOIN Cars USING (car_id) WHERE transaction_id = (SELECT transaction_id FROM users WHERE user_id = ?) ORDER BY role DESC", [user_id], (err, result) => {
        if (err) throw err;
        else {
            seller = result[0];
            buyer = result[1];
            console.log(seller, buyer)
            run(main);
        };
    });

    const insertGroupId = (id) => {
        connection.query("UPDATE Users SET groupId = ? WHERE user_id = ? OR user_id = ?", 
        [id, seller.user_id, buyer.user_id],
        (err, result) => {
            if (err) throw err;
            else {
                console.log("Group ID inserted");
            }
        })
    }

    async function main() {
        const variables = getPacketVariables()
        const { data: result } = await anvilClient.createEtchPacket({ variables })
        const { data, errors } = result
        if (errors) {
            console.log('Error', errors)
        } else {
            console.log(data.createEtchPacket)
            let groupEid = data.createEtchPacket.documentGroup.eid;
            insertGroupId(groupEid);
        }
    }

    function getPacketVariables() {
        return {
            isDraft: false,
            isTest: true,

            name: `Vehicle Purchase - ${seller.firstName} ${seller.lastName} - ${buyer.firstName} ${buyer.lastName}`,
            signatureEmailSubject: 'Please sign documents',
            signatureEmailBody: 'Please sign the Title and the Bill of Sale',

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
                            seller: `${seller.firstName} ${seller.lastName}`,
                            sellerStreet: seller.street,
                            sellerCity: seller.city,
                            sellerState: seller.state,
                            sellerZipCode: seller.zip_code,
                            sellerCounty: seller.county,
                            buyer: `${buyer.firstName} ${buyer.lastName}`,
                            buyerStreet: buyer.street,
                            buyerCity: buyer.city,
                            buyerState: buyer.state,
                            buyerZipCode: buyer.zip_code,
                            buyer_county: buyer.county,
                            price: seller.price,
                            carYear: seller.year,
                            carMake: seller.make,
                            carBody: seller.body,
                            carModel: seller.model,
                            carVin: seller.vin,
                            carPlate: seller.plate,
                            odometer: seller.odometer,
                            dayMonth: moment().format("DD/MM"),
                            year: "21",
                            date: moment().format("MM/DD/YYYY"),
                        }
                    },
                    texas_title: {
                        data: {
                            titleNumber: seller.title_number,
                            carVin: seller.vin,
                            carYear: seller.year,
                            carMake: seller.make,
                            carBody: seller.body,
                            carModel: seller.model,
                            carPlate: seller.plate,
                            odometer: seller.odometer,
                            seller: `${seller.firstName} ${seller.lastName}`,
                            sellerFullAddress: `${seller.street} ${seller.city} ${seller.state} ${seller.zip_code}`,
                            date: moment().format("MM/DD/YYYY")
                        }
                    }
                }
            },

            signers: [
                {
                    id: seller.firstName,
                    name: `${seller.firstName} ${seller.lastName}`,
                    email: seller.email,

                    fields: [
                        {
                            fileId: 'bill_of_sale',
                            fieldId: 'sellerSign'
                        },
                        {
                            fileId: 'texas_title',
                            fieldId: 'sellerSign1'
                        },
                        {
                            fileId: "texas_title",
                            fieldId: "sellerSign"
                        }
                    ]
                },
                {
                    id: buyer.firstName,
                    name: `${buyer.firstName} ${buyer.lastName}`,
                    email: buyer.email,
                    fields: [
                        {
                            fileId: "bill_of_sale",
                            fieldId: "buyerSign"
                        }
                    ]
                }
            ]
        }
    }


    function run(fn) {
        fn().then(() => {
            res.send({ message: "Succsess!" })
        }).catch((err) => {
            console.log(err.stack || err.message)
            process.exit(1)
        });
    };
});

router.post("/hooks", async (req, res) => {

    const { action } = req.body;
    if (action === "etchPacketComplete") {
        let bill_of_sale_url = "";
        let title_url = "";
        const { data } = req.body;
        const decryptedRSAMessage = await decryptRSA(anvil.private_key, data)
        const info = await JSON.parse(decryptedRSAMessage);
        const { eid } = info.documentGroup;
        const seller_email = info.signers[0].email;

        connection.query("SELECT * FROM Users WHERE transaction_id = (SELECT transaction_id FROM Users where email = ?) ORDER BY role DESC", [seller_email], (err, result) => {
            if (err) throw err;
            else {
                async function main() {
                    try {
                        const { statusCode, response, data, errors } = await anvilClient.downloadDocuments(eid, {});
                        if (statusCode === 200) {
                            fs.writeFileSync('output.zip', data, { encoding: null });
                            await (extract(path.join(__dirname, "../../output.zip"), { dir: path.join(__dirname, `../../Unzip/${eid}`) }));
                            const files = fs.readdirSync(path.join(__dirname, `../../Unzip/${eid}`));
                            for (let i = 0; i < files.length; i++) {
                                let { secure_url } = await cloudinary.uploader.upload(path.join(__dirname, `../../Unzip/${eid}/${files[i]}`));
                                if (i === 0) {
                                    bill_of_sale_url = secure_url;
                                } else {
                                    title_url = secure_url;
                                }
                            };

                        } else {
                            console.log(JSON.stringify(errors, null, 2));
                            res.send({ statusCode: 200 });
                        }
                    } catch (error) {
                        console.log(error);
                        res.send({ statusCode: 200 });
                    }
                }

                main()
                    .then(() => {
                        const payloads = {
                            url: "https://desolate-hollows-77552.herokuapp.com/api/db/updateUrls",
                            method: "POST",
                            json: { bill_of_sale_url, title_url, seller_id: result[0].user_id, buyer_id: result[1].user_id },
                        };
                        request(payloads, (error, response, body) => {
                            if (error) throw error;
                            else {
                                res.send({ statusCode: 200 });
                            };
                        });
                    })
                    .catch((err) => {
                        console.log(err.stack || err.message);
                        res.send({ statusCode: 200 });
                        process.exit(1);
                    })
            }
        })
    } else {
        res.send({ statusCode: 200 });
    };
});


router.get("/download", (req, res) => {

    async function main() {
        try {
            const { statusCode, response, data, errors } = await anvilClient.downloadDocuments(groupEid, {});
            if (statusCode === 200) {
                fs.writeFileSync('output.zip', data, { encoding: null });
                await (extract(path.join(__dirname, "../../output.zip"), { dir: path.join(__dirname, `../../Unzip/${groupEid}`) }));
                const files = fs.readdirSync(path.join(__dirname, `../../Unzip/${groupEid}`));
                console.log(files);
                for (let i = 0; i < files.length; i++) {
                    const { secure_url } = await cloudinary.uploader.upload(path.join(__dirname, `../../Unzip/${groupEid}/${files[i]}`));
                    console.log(secure_url);
                }
            } else {
                console.log(JSON.stringify(errors, null, 2))
            }
        } catch (error) {
            console.log(error);
        }
    }

    main()
        .then(() => {
            res.send({ message: "Succsess!" })
        })
        .catch((err) => {
            console.log(err.stack || err.message);
            process.exit(1);
        })

});

module.exports = router;