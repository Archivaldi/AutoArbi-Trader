const router = require('express').Router();

const typingDNARoutes = require('./typing-dna-routes.js');
const anvilRoutes = require('./anvil-routes.js');
const dbRoutes = require('./db-routes.js');

router.use('/typing-dna', typingDNARoutes);
router.use('/anvil', anvilRoutes);
router.use('/db', dbRoutes);

module.exports = router;