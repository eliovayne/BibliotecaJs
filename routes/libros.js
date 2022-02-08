var express = require('express');
var router = express.Router();
const librosControllers = require('../controllers/librosControllers');

/* GET home page. */
router.get('/',librosControllers.index);
router.get('/crear',librosControllers.crear);

module.exports = router;