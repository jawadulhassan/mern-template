const router = require('express').Router();
const bookRoutes = require('./books');
const path = require('path');

// API routes
router.use('/api/books', bookRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
	const index = path.join(__dirname, 'front-end', 'build', 'index.html');
  res.sendFile(index);
});

module.exports = router;