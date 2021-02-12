const router = require("express").Router();
const TypingDnaClient = require('typingdnaclient');
const keys = require('../../config/keys');

const { typingDna_apiKey, typingDna_secret } = keys.typingDna;
const typingDnaClient = new TypingDnaClient(typingDna_apiKey, typingDna_secret);

let mess;

router.post("/signup", (req, res) => {
    let typingPattern = req.body.typingPattern;
    let client_id = "test123";

    typingDnaClient.auto(client_id, typingPattern, (error, response) => {
        if (error) {
            console.log(error);
        }
        if (response.statusCode === 200) {
            res.json(response)
            mess = response
            console.log(mess);
        } else {
            res.send({ message: "Got some issue" });
        };
    });
});

router.post("/check-pattern", (req, res) => {
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
            };
        });
});

module.exports = router;