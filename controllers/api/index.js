const router = require('express').Router();
const userRoutes = require('./userRoutes');
const CrossSetRoutes = require('./CrossSetRoutes');

router.use('/users', userRoutes);
router.use('/CrossSet', CrossSetRoutes);

module.exports = router;
