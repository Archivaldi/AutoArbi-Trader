const path = require('path');
const router = require('express').Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/out/index.html'));
});

router.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/out/dashboard.html'));
});

router.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/out/upload.html'));
});

// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/out/404.html'));
// });

module.exports = router;