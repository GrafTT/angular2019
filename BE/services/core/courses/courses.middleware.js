const express = require('express');
const router = express.Router();
const url = require('url');
const moment = require('moment');

module.exports = (server) => {

	router.delete('/courses/:id', (req, res, next) => {
		let id = req.params.id;
		let	courses = server.db.getState().courses.filter(item => item.id != id);
		console.log(courses)

		res.json(courses);
	});

	router.post('/courses', (req, res, next) => {
		let course = req.body;
		let	courses = server.db.getState().courses.slice(0, 3);
		console.log(courses)

		res.json(courses.unshift(course).slice(0, 3));
	});

	router.get('/courses', (req, res, next) => {
		let url_parts = url.parse(req.originalUrl, true),
			query = url_parts.query,
			from = query.start || 0,
			to = +query.start + +query.count,
			sort = query.sort,
			queryStr = query.query,
			filter = query.filter,
			id = query.id,
			courses = server.db.getState().courses;

		if (!!query.textFragment) {
			courses = courses.filter((course) => course.name.concat(course.description).toUpperCase().indexOf(query.textFragment.toUpperCase()) >= 0);
		}

		if(sort) {
			courses.sort((a, b) => {
				if (sort === 'date') {
					const c = moment(b.date);
					const d = moment(a.date);
					return c.valueOf() - d.valueOf();
				} else {
					return b[sort] - a[sort];
				}
			});
		}

		if (courses.length < to || !to) {
			to = courses.length;
		}

		if(!id) {
			console.log(from, to)
			courses = courses.slice(from, to);
		} else {
			courses = courses.filter((item) => {
				return item.id == id;
			});
		}

		res.json(courses);
	});

	router.get('/error', function(req, res, next) {
		let url_parts = url.parse(req.originalUrl, true);
		let query = url_parts.query;
		res.status(parseInt(query.code, 10)).send({message: 'Error'});
	});
	return router;
};
