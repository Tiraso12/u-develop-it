const express = require('express');
const router = express.Router();

router.use(require('./cadidateRoutes'));
router.use(require('./partyRoutes'));

module.exports = router;