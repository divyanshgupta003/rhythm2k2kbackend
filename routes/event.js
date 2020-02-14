const express = require('express');

const router = express.Router();

const eventController = require('../controllers/event_controller');

router.get('/' , eventController.home);
// router.get('/:number' , eventController.specificEvent);

module.exports = router;