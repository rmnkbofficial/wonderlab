var express = require('express');
var router = express.Router();
var users = require('../controllers/users');
/* GET users listing. */
router.get('/', users.list);
module.exports = router;
