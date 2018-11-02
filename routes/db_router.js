var express = require('express');
var router = express.Router();
var Parse = require('parse/node');

const APP_ID = process.env.APP_ID;
const JAVASCRIPT_KEY = process.env.JAVASCRIPT_KEY;
const SERVER_URL = 'https://kimbyungsoo.herokuapp.com/parse'


router.get('/', function(req, res, next) {
	Parse.initialize(APP_ID, JAVASCRIPT_KEY);
	Parse.serverURL = SERVER_URL
	const Contents= Parse.Object.extend("contents");
	const content = new Contents();

	content.set("title", req.query.title);
	content.set("content", req.query.content);

	content.save()
		.then((content) => {
 			return res.json(content);
		}, (error) => {
 			return res.status(404).json({error: "매개변수를 확인해 주세요."});
		});
});
router.get('/get', function(req, res, next) {
	let Contents= Parse.Object.extend("contents");
	let query = new Parse.Query(Contents);
	query.get("mrkxSHzup6")
	.then((content) => {
		return res.json(content);
	}, (error) => {
		return res.status(404).json({error: error});
	});
});

router.get('/count', function(req, res, next) {
	let Contents = Parse.Object.extend("contents");
	let query = new Parse.Query(Contents);
	query.equalTo("title", "title");
	query.count().then(function(results) {
 		return res.json(results); 
	});
});

router.get('/first', function(req, res, next) {
	let Contents = Parse.Object.extend("contents");
	let query = new Parse.Query(Contents);
	query.find().then(function(results) {
 		return res.json(results); 
	});
});

router.get('/find', function(req, res, next) {
	let Contents = Parse.Object.extend("contents");
	let query = new Parse.Query(Contents);
	query.find().then(function(results) {
 		return res.json(results); 
	});
});

module.exports = router;