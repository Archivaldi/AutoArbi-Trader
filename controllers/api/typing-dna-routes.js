const router = require("express").Router();
const TypingDnaClient = require('typingdnaclient');
const keys = require('../../config/keys');
const { typingDna_apiKey, typingDna_secret } = keys.typingDna;
const typingDnaClient = new TypingDnaClient(typingDna_apiKey, typingDna_secret);
const connection = require("../../config/db");

router.post("/check-pattern", (req, res) => {
    const { typingPattern, user_id, role } = req.body;
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
                if (result.result === 1 && result.enrollment === 1 && result.messageCode === 1 && result.highConfidence === 1) {
                    req.session.user_id = user_id;
                    res.send({ message: 'verified' });
                }
                else {
                    res.send({ message: 'not verified' });
                };
            };
        });
});


router.get("/destroyAccount", (req,res) => {
    const {user_id, role} = req.session;
    let query = "";

    if (role === "buyer"){
        query = "DELETE FROM Users WHERE user_id = ?"
    } else if (role === "seller"){
        query = "DELETE Users, Cars FROM Users inner JOIN Cars USING (car_id) where user_id = ?"
    };

    connection.query(query, [user_id], (err, result) => {
        if (err) throw err;
        else {
            typingDnaClient.delete({userId: user_id}, (err, result) => {
                if (err) throw err;
                else {
                    console.log(result);
                    req.session = null;
                }
            });
        }
    });
});

module.exports = router;