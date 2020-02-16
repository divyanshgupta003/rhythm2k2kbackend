const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/' , homeController.home);
router.use('/users' , require('./users'));
router.use('/event-list' , require('./event'));
router.use('/register' , require('./register'));

module.exports = router;