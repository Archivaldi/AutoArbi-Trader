const router = require("express").Router();
const TypingDnaClient = require('typingdnaclient');
const keys = require('../../config/keys');
const { typingDna_apiKey, typingDna_secret } = keys.typingDna;
const typingDnaClient = new TypingDnaClient(typingDna_apiKey, typingDna_secret);
const connection = require("../../config/db");
const cloudinary = require('cloudinary').v2;
cloudinary.config({ cloud_name: keys.cloudinary.cloud_name, api_key: keys.cloudinary.apikey, api_secret: keys.cloudinary.secret });

router.post("/check-pattern", (req, res) => {
    const { typingPattern, user_id, role } = req.body;
    typingDnaClient.auto(
        user_id,
        typingPattern,
        {
            type: 0
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


router.get("/destroyAccount", (req, res) => {
    const { user_id, role } = req.session;
    let queryDelete = "";

    if (role === "buyer") {
        queryDelete = "DELETE FROM Users WHERE user_id = ?"
    } else if (role === "seller") {
        queryDelete = "DELETE Users, Cars FROM Users inner JOIN Cars USING (car_id) where user_id = ?"
    };

    connection.query(queryDelete, [user_id], (err, result) => {
        if (err) throw err;
        else {
            typingDnaClient.delete({ userId: user_id }, (err, result) => {
                if (err) throw err;
                else {
                    cloudinary.api.delete_resources([`${user_id}_0`, `${user_id}_1`, `${user_id}_2`], (err, result) => {
                        if (err) throw err;
                        else {
                            res.send({ message: "Account successfully delete!" });
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;