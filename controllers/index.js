const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const availabilityRoutes = require('./availabilityRoutes.js');

router.use('/availabilty', availabilityRoutes);
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/availabilty', availabilityRoutes);

router.use((req, res) => {
  res.send("<h1>The webpage cannot be found!</h1>")
    res.status(404).end();
  });
  
  module.exports = router;
