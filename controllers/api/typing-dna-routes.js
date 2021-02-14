const router = require("express").Router();
const TypingDnaClient = require('typingdnaclient');
const keys = require('../../config/keys');

const { typingDna_apiKey, typingDna_secret } = keys.typingDna;
const typingDnaClient = new TypingDnaClient(typingDna_apiKey, typingDna_secret);

router.post("/signup", ({ body: {
    typingPattern
} }, res) => {
    let userID = "test123"
    typingDnaClient.auto(
        userID,
        typingPattern,
        {
            userId: userID,
            type: 0,
            device: 'desktop'
        },
        (error, result) => {
            console.log(result);
            if (error) {
                res.send({ "message": error })
            } else {
                res.send({ "message": result });
            };
        }
    );
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
                res.send({ reuse })
            };
        });
});

module.exports = router;