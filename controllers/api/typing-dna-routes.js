const router = require("express").Router();
const TypingDnaClient = require('typingdnaclient');
const keys = require('../../config/keys');

const { typingDna_apiKey, typingDna_secret } = keys.typingDna;
const typingDnaClient = new TypingDnaClient(typingDna_apiKey, typingDna_secret);


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

module.exports = router;