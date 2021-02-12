const router = require("express").Router();

router.get("/fill_form", async (req, res) => {

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

    const { statusCode, data } = await anvilClient.fillPDF(keys.anvil.bill_of_sale_id, exampleData);

    // Data will be the filled PDF raw bytes
    fs.writeFile('output.pdf', data, { encoding: null }, function (err) {
        if (err) { console.log(err) }
        else {
            console.log("the file was created");

            cloudinary.uploader.upload("output.pdf",
                function (error, result) { console.log(result, error); });

        }
    });

    res.send({ statusCode });
    console.log(data);


});

let groupEid = "";


router.get("/createEtchSigh", (req, res) => {

    const signer_1_email = "artur.markov1860@gmail.com";
    const signer_1_name = "Artur Markov";

    const signer_2_email = "archivaldi95@yandex.ru";
    const signer_2_name = "Nate Ryan";

    async function main() {
        const variables = getPacketVariables()
        const { data: result } = await anvilClient.createEtchPacket({ variables })
        const { data, errors } = result
        if (errors) {
            console.log('Error', errors)
        } else {
            console.log(data.createEtchPacket)
            groupEid = data.createEtchPacket.documentGroup.eid;
            console.log("GroupEid :", groupEid);
        }
    }

    function getPacketVariables() {
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
                        }
                    ]
                }
            ]
        }
    }


    function run(fn) {
        fn().then(() => {
            //process.exit(0);
            res.send({ message: "Succsess!" })
        }).catch((err) => {
            console.log(err.stack || err.message)
            process.exit(1)
        })
    }

    run(main);
});


router.get("/download", async (req, res) => {

    async function main() {
        const { statusCode, response, data, errors } = await anvilClient.downloadDocuments(groupEid, {});
        if (statusCode === 200) {
            fs.writeFile('output.zip', data, { encoding: null }, function (err) {
                if (err) { console.log(err) }
                else {
                    console.log("Created zip file");
                }
            });

            console.log(statusCode);
        } else {
            console.log(statusCode, JSON.stringify(errors, null, 2))
        };
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