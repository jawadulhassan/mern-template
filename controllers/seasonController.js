const Season = require('../models/Seasons');

// Defining all methods and business logic for routes

module.exports = {
	findAll: function(req, res) {
		Season.find(req.query)
			.then(seasons => res.json(seasons))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		Season.findById(req.params.id)
			.then(season => res.json(season))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		Season.create(req.body)
			.then(newSeason => res.json(newSeason))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		Season.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(season => res.json(season))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		Season.findById({ _id: req.params.id })
			.then(season => season.remove())
			.then(allseasons => res.json(allseasons))
			.catch(err => res.status(422).json(err));
	}
};
