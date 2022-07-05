const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const availRoutes = require('./availRoutes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/availabilty', availRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
    res.status(404).end();
  });
  
  module.exports = router;
