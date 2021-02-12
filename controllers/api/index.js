const router = require('express').Router();

const typingDNARoutes = require('./typing-dna-routes.js');
const anvilRoutes = require('./anvil-routes.js');

router.use('/typing-dna', typingDNARoutes);
router.use('/anvil', anvilRoutes);

module.exports = router;