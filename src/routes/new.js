const express = require('express');
const router = express.Router();
const newController = require('../controllers/newController');


router.get('/', newController.list);
router.post('/add', newController.save);

module.exports = router;