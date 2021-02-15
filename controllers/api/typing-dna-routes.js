const router = require("express").Router();
const TypingDnaClient = require('typingdnaclient');
const keys = require('../../config/keys');
const connection = require('../../config/db');

const { typingDna_apiKey, typingDna_secret } = keys.typingDna;
const typingDnaClient = new TypingDnaClient(typingDna_apiKey, typingDna_secret);


router.post("/check-pattern", (req, res) => {
    //client should send to the server user_id, role from previous response
    const {user_id, role, typingPattern} = req.body;

    typingDnaClient.auto(
        {
            userId: user_id,
            type: 1,
            device: 'desktop'
        },
        function (error, result) {
            console.log(result);
            if (error) {
                res.send({ "message": "got some error" });
            } else {
                if (role === "seller"){
                    connection.query("SELECT * FROM Users LEFT JOIN Cars USING (user_id) WHERE user_id = ?", 
                    [user_id],
                    (err, result) => {
                        if (err) throw err;
                        else {
                            req.session = result[0];
                            res.send({ message: "Verification success" });
                        };
                    });
                } else {
                    connection.query("SELECT * FROM Users WHERE user_id = ?",
<<<<<<< Updated upstream
                    [user_id],
                    (err,result) => {
                        if (err) throw err;
                        else {
                            req.session = result[0];
                            res.send({message: "Verification success"})
                        }
                    })
                }
=======
                        [user_id],
                        (err, response) => {
                            if (err) throw err;
                            if (result.result === 1 && result.enrollment === 1 && result.messageCode === 1 && result.highConfidence === 1) {
                                res.send({ message: 'verified' });
                            } else {
                                res.send({ message: 'not verified' });
                            };
                        });
                };
>>>>>>> Stashed changes
            };
        });
});

module.exports = router;