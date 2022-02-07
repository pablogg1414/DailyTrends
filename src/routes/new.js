const express = require('express');
const router = express.Router();
const newController = require('../controllers/newController');


router.get('/', newController.list);


module.exports = router;