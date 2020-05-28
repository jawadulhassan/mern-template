const router = require('express').Router();
const seasonController = require('../controllers/seasonController');

router
	.route('/')
	.get(seasonController.findAll)
	.post(seasonController.create);

router
	.route('/:id')
	.get(seasonController.findById)
	.put(seasonController.update)
	.delete(seasonController.remove);

module.exports = router;
