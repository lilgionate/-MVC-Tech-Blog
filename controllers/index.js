const router = require('express').Router();
const apiRoutes = require('./API');
const homeRoute = require('./homeRoute.js');
const dashboardRoute = require('./dashboardRoute.js');

router.use('/', homeRoute);
router.use('/dashboard', dashboardRoute);
router.use('/api', apiRoutes);

module.exports = router;