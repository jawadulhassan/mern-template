const router = require('express').Router();
const seasonRoutes = require('./seasons');
const path = require('path');

// API routes
router.use('/api/seasons', seasonRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../front-end/build/index.html'));
});

module.exports = router;