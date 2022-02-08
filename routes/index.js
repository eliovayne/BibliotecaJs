var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/',function (req, res, next) {
   res.send("BIENVENIDOS LA BIBLIOTECA ");
});

module.exports = router;
