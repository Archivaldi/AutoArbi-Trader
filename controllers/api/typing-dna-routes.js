const router = require("express").Router();
const TypingDnaClient = require('typingdnaclient');
const keys = require('../../config/keys');
const connection = require('../../config/db');

const { typingDna_apiKey, typingDna_secret } = keys.typingDna;
const typingDnaClient = new TypingDnaClient(typingDna_apiKey, typingDna_secret);


router.post("/check-pattern", (req, res) => {
    const { typingPattern, user_id, userRole } = req.body;

    typingDnaClient.auto(
        user_id,
        typingPattern,
        {
            type: 0,
            device: 'desktop'
        },
        function (error, result) {
            if (error) {
                res.send({ "message": "got some error" });
            } else {
                if (userRole === "seller") {
                    connection.query("SELECT * FROM Users LEFT JOIN Cars USING (car_id) WHERE user_id = ?",
                        [user_id],
                        (err, response) => {
                            if (err) throw err;
                            if (result.result === 1 && result.enrollment === 1 && result.messageCode === 1 && result.highConfidence === 1) {
                                res.send({ message: 'verified' });
                            } else {
                                res.send({ message: 'not verified' });
                            }
                        });
                } else {
                    connection.query("SELECT * FROM Users WHERE user_id = ?",
                        [user_id],
                        (err, response) => {
                            if (err) throw err;
                            if (result.result === 1 && result.enrollment === 1 && result.messageCode === 1 && result.highConfidence === 1) {
                                res.send({ message: 'verified' });
                            } else {
                                res.send({ message: 'not verified' });
                            }
                        })
                }
            };
        });
});

module.exports = router;