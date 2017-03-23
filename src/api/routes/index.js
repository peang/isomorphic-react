var express = require('express');
var router = express.Router();
var slug = require('slug');
var Playground = require('./../schemes/mongoose/playground');

/* GET json data playground service */
router.get('/service-names', (req, res, next) => {
	Playground.aggregate([
		{
			$group: {
				_id: '$name',
				version:  {$first: '$version'},
			}
		}
	], (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json(result);
        }
    })
});

/* GET json data playground service */
router.get('/json/:name/:version', (req, res, next) => {
	const name = req.params.name;
	const version = req.params.version;

	Playground.findOne({ slug: slug(name), version: version }, (err, pgdata) => {
		if (!pgdata) {
			res.status(404);
			res.send({ message: "Cannot find Json Data." });
			res.end();
		} else {
			res.send(pgdata);
		}
	});
});

/* POST generated json data to db */
router.post('/json', (req, res, next) => {

	let data = req.body;
	let slugName = slug(data.name, { lower: true });

	Playground.findOne({ slug: slugName, version: data.version.name }, (err, pgdata) => {

		if (err) return console.error(err);

		if (!pgdata) {

			var pgdata = new Playground({
				name: data.name,
				slug: slug(data.name, { lower: true }),
				description: data.description || "",
				version: data.version.name,
				endpoints: []
			});

			data.version.endpoints.map(function (obj) {
				pgdata.endpoints.push(obj);
			})

			pgdata.save((err, pgresult) => {
				if (err) return console.error(err);

				res.send(pgresult);
			});

		} else {

			pgdata.description = data.description || "";
			pgdata.endpoints = [];

			data.version.endpoints.map((obj) => {
				pgdata.endpoints.push(obj);
			});

			pgdata.updatedAt = Date.now();

			pgdata.save((err, pgresult) => {
				if (err) return console.error(err);

				res.send(pgresult);
			});
		}
	});

});

module.exports = router;
