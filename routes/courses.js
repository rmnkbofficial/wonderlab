var express = require('express');
var router = express.Router();
var courses = require('../controllers/courses')
/* GET courses listing. */
router.get('/', courses.list);
module.exports = router;
